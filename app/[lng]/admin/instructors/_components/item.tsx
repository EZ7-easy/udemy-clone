'use client'

import { updateUser } from '@/actions/user.action'
import { IUser } from '@/app.types'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { TableCell, TableRow } from '@/components/ui/table'
import { MoreHorizontal } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { toast } from 'sonner'

interface Props {
	item: IUser
}
function Item({ item }: Props) {
	const pathname = usePathname()

	const onRoleChange = async () => {
		const msg = item.role === 'instructor' ? 'Disapprove' : 'Approve'
		const isConfirmed = confirm(`Are you sure you want to ${msg} this user?`)

		if (isConfirmed) {
			const promise = updateUser({
				clerkId: item.clerkId,
				updatedData: { role: item.role === 'user' ? 'instructor' : 'user' },
				path: pathname,
			})

			toast.promise(promise, {
				loading: 'Loading...',
				success: `${msg} successfully.`,
				error: 'Something went wrong. Please try again.',
			})
		}
	}

	const onAdmin = async () => {
		const isConfirmed = confirm(
			`Are you sure you want to make this user an admin?`
		)

		if (isConfirmed) {
			const promise = updateUser({
				clerkId: item.clerkId,
				updatedData: { isAdmin: true },
				path: pathname,
			})

			toast.promise(promise, {
				loading: 'Loading...',
				success: `Successfully!`,
				error: 'Something went wrong. Please try again.',
			})
		}
	}

	const onDelete = async () => {
		const isConfirmed = confirm(
			`Are you sure you want to delete this instructor?`
		)

		if (isConfirmed) {
			const promise = updateUser({
				clerkId: item.clerkId,
				updatedData: { approvedInstructor: false, role: 'user' },
				path: pathname,
			})

			toast.promise(promise, {
				loading: 'Loading...',
				success: `Successfully!`,
				error: 'Something went wrong. Please try again.',
			})
		}
	}

	return (
		<TableRow>
			<TableCell className='text-sm capitalize'>
				{item.isAdmin ? 'Admin/' : ''}
				{item.role}
			</TableCell>
			<TableCell className='text-sm'>{item.email}</TableCell>
			<TableCell
				className='cursor-pointer text-sm text-primary hover:underline'
				onClick={() => window.open(item.website, '_blank')}
			>
				{item.website.replace(/^https?:\/\//, '')}
			</TableCell>
			<TableCell
				className='cursor-pointer text-sm text-primary hover:underline'
				onClick={() => window.open(item.youtube, '_blank')}
			>
				{item.youtube.replace(/^https?:\/\//, '')}
			</TableCell>
			<TableCell
				className='cursor-pointer text-sm text-primary hover:underline'
				onClick={() => window.open(item.github, '_blank')}
			>
				{item.github.replace(/^https?:\/\//, '')}
			</TableCell>
			<TableCell className='text-sm'>{item.job}</TableCell>
			<TableCell className='text-right'>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button size={'icon'} variant={'ghost'}>
							<MoreHorizontal className='size-6' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>Manage</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem onClick={onRoleChange}>
							{item.role === 'instructor' ? 'Disapprove' : 'Approve'}
						</DropdownMenuItem>
						<DropdownMenuItem onClick={onAdmin}>Admin</DropdownMenuItem>
						<DropdownMenuItem onClick={onDelete}>Delete</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</TableCell>
		</TableRow>
	)
}

export default Item
