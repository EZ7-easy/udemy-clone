'use server'

import Course from '@/database/course.model'
import { connectToDatabase } from '@/lib/mongoose'
import { ICreateCourse } from './types'
import {ICourse} from "@/app.types";

export const createCourse = async (data: ICreateCourse) => {
	try {
		await connectToDatabase()
		await Course.create({ ...data })
	} catch (error) {
		throw new Error('Something went wrong when creating course')
	}
}

export const getCourses = async () => {
	try{
		await connectToDatabase()
		const courses = await Course.find()
		return courses as ICourse[]
	} catch (error) {
		throw new Error('Something went wrong when getting courses')
	}
}