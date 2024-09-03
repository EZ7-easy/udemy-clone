/* eslint-disable camelcase */
import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { createUser, updateUser } from '@/actions/user.action'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET
	if (!WEBHOOK_SECRET) {
		console.error('WEBHOOK_SECRET is missing in environment variables.')
		throw new Error(
			'Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local'
		)
	}

	const headerPayload = headers()
	const svix_id = headerPayload.get('svix-id')
	const svix_timestamp = headerPayload.get('svix-timestamp')
	const svix_signature = headerPayload.get('svix-signature')

	if (!svix_id || !svix_timestamp || !svix_signature) {
		console.error('Missing svix headers:', {
			svix_id,
			svix_timestamp,
			svix_signature,
		})
		return new Response('Error occurred -- no svix headers', { status: 400 })
	}

	const payload = await req.json()
	const body = JSON.stringify(payload)
	console.log('Received payload:', body)

	const wh = new Webhook(WEBHOOK_SECRET)
	let evt: WebhookEvent

	try {
		evt = wh.verify(body, {
			'svix-id': svix_id,
			'svix-timestamp': svix_timestamp,
			'svix-signature': svix_signature,
		}) as WebhookEvent
		console.log('Webhook verified successfully:', evt)
	} catch (err) {
		console.error('Error verifying webhook:', err)
		return new Response('Error occurred', { status: 400 })
	}

	const eventType = evt.type
	try {
		if (eventType === 'user.created') {
			const { id, email_addresses, image_url, first_name, last_name } = evt.data
			const user = await createUser({
				clerkId: id,
				email: email_addresses[0].email_address,
				fullName: `${first_name} ${last_name}`,
				picture: image_url,
			})
			console.log('User created successfully:', user)
			return NextResponse.json({ message: 'OK', user })
		}

		if (eventType === 'user.updated') {
			const { id, email_addresses, image_url, first_name, last_name } = evt.data
			const user = await updateUser({
				clerkId: id,
				updatedData: {
					email: email_addresses[0].email_address,
					fullName: `${first_name} ${last_name}`,
					picture: image_url,
				},
			})
			console.log('User updated successfully:', user)
			return NextResponse.json({ message: 'OK', user })
		}
	} catch (err) {
		console.error(`Error processing ${eventType} event:`, err)
		return new Response('Error processing event', { status: 500 })
	}

	return new Response('Unhandled event type', { status: 400 })
}
