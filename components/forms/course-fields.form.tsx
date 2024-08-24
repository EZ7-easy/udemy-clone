'use client'

import { courseSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectValue,
	SelectItem,
} from '../ui/select'
import { courseCategory, courseLanguage, courseLevels } from '@/constants'
import { Button } from '../ui/button'
import { createCourse } from '@/actions/course.action'
import { toast } from 'sonner'
import { useState } from 'react'

function CourseFieldsForm() {
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof courseSchema>>({
		resolver: zodResolver(courseSchema),
		defaultValues: defaultVal,
	})

	function onSubmit(values: z.infer<typeof courseSchema>) {
		setIsLoading(true)
		const { oldPrice, currentPrice } = values
		const promise = createCourse({
			...values,
			oldPrice: +oldPrice,
			currentPrice: +currentPrice,
		})
			.then(() => form.reset())
			.finally(() => setIsLoading(false))

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully created!',
			error: 'Something went wrong!',
		})
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Course title<span className='text-red-500'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									{...field}
									className='bg-secondary'
									placeholder='Learn ReactJS from scratch'
									disabled={isLoading}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Short description<span className='text-red-500'>*</span>
							</FormLabel>
							<FormControl>
								<Textarea
									{...field}
									className='h-44 bg-secondary'
									placeholder='Description'
									disabled={isLoading}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className='grid grid-cols-2 gap-4'>
					<FormField
						control={form.control}
						name='learning'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									What will students learn in your course
									<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Textarea
										{...field}
										className='bg-secondary'
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='requirements'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Requirements
									<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Textarea
										{...field}
										className='bg-secondary'
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='grid grid-cols-3 gap-4'>
					<FormField
						control={form.control}
						name='level'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									level
									<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Select
										defaultValue={field.value}
										onValueChange={field.onChange}
										disabled={isLoading}
									>
										<SelectTrigger className='w-full bg-secondary'>
											<SelectValue placeholder='Select' />
										</SelectTrigger>
										<SelectContent>
											{courseLevels.map(item => (
												<SelectItem key={item} value={item}>
													{item}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='category'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Category
									<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Select
										defaultValue={field.value}
										onValueChange={field.onChange}
										disabled={isLoading}
									>
										<SelectTrigger className='w-full bg-secondary'>
											<SelectValue placeholder='Select' />
										</SelectTrigger>
										<SelectContent>
											{courseCategory.map(item => (
												<SelectItem key={item} value={item}>
													{item}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='language'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Language
									<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Select
										defaultValue={field.value}
										onValueChange={field.onChange}
										disabled={isLoading}
									>
										<SelectTrigger className='w-full bg-secondary'>
											<SelectValue placeholder='Select' />
										</SelectTrigger>
										<SelectContent>
											{courseLanguage.map(item => (
												<SelectItem key={item} value={item}>
													{item}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='grid grid-cols-2 gap-4'>
					<FormField
						control={form.control}
						name='oldPrice'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Old price<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										className='bg-secondary'
										type='number'
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='currentPrice'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Current price<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										className='bg-secondary'
										type='number'
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='flex justify-end gap-4'>
					<Button
						type='button'
						size={'lg'}
						variant={'destructive'}
						onClick={() => form.reset()}
						disabled={isLoading}
					>
						Clear
					</Button>
					<Button type='submit' size={'lg'} disabled={isLoading}>
						Submit
					</Button>
				</div>
			</form>
		</Form>
	)
}

export default CourseFieldsForm

const defaultVal = {
	title: '',
	description: '',
	learning: '',
	requirements: '',
	level: '',
	category: '',
	language: '',
	oldPrice: '',
	currentPrice: '',
}
