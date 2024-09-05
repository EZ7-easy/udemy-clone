'use server'

import Section from '@/database/section.model'
import { connectToDatabase } from '@/lib/mongoose'

export const getSections = async (course: string) => {
	try {
		await connectToDatabase()
		return await Section.find({ course }).sort({ position: 1 })
	} catch (error) {
		throw new Error('Something went wrong while getting sections!')
	}
}

export const createSection = async (
	course: string,
	title: string,
	path: string
) => {
	try {
		await connectToDatabase()
		const sections = await Section.find({ course })
		const position = sections.length + 1
		await Section.create({ course, title, position })
	} catch (error) {
		throw new Error('Something went wrong while creating section!')
	}
}
