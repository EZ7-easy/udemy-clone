'use server'

import Course from '@/database/course.model'
import { connectToDatabase } from '@/lib/mongoose'
import { ICreateCourse } from './types'

export const createCourse = async (data: ICreateCourse) => {
	try {
		await connectToDatabase()
		await Course.create(data)
		return true
	} catch (error) {
		throw new Error('Something went wrong while creating course')
	}
}
