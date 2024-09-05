'use client'

import { createSection } from '@/actions/section.action'
import { ICourse, ISection } from '@/app.types'
import FillLoading from '@/components/shared/fill-loading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import useToggleEdit from '@/hooks/use-toggle-edit'
import { sectionSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { BadgePlus, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { DragDropContext, Droppable } from '@hello-pangea/dnd'
import SectionList from './section-list'

interface Props {
	course: ICourse
	sections: ISection[]
}

function Sections({ course, sections }: Props) {
	const { state, onToggle } = useToggleEdit()

	const onDragEnd = () => {}

	return (
		<Card>
			<CardContent className='relative p-6'>
				<div className='flex items-center justify-between'>
					<span className='text-lg font-medium'>Sections</span>
					<Button size={'icon'} variant={'ghost'} onClick={onToggle}>
						{state ? <X /> : <BadgePlus />}
					</Button>
				</div>
				<Separator className='my-3' />

				{state ? (
					<Forms course={course} onToggle={onToggle} />
				) : (
					<>
						{!sections.length ? (
							<p className='text-muted-foreground'>No sections</p>
						) : (
							<>
								<DragDropContext onDragEnd={onDragEnd}>
									<Droppable droppableId='sections'>
										{provided => (
											<div {...provided.droppableProps} ref={provided.innerRef}>
												{sections.map((section, index) => (
													<SectionList
														key={section._id}
														section={section}
														index={index}
													/>
												))}
											</div>
										)}
									</Droppable>
								</DragDropContext>
							</>
						)}
					</>
				)}
			</CardContent>
		</Card>
	)
}

export default Sections

interface FormsProps {
	course: ICourse
	onToggle: () => void
}

function Forms({ course, onToggle }: FormsProps) {
	const [isLoading, setIsLoading] = useState(false)
	const pathname = usePathname()

	const form = useForm<z.infer<typeof sectionSchema>>({
		resolver: zodResolver(sectionSchema),
		defaultValues: { title: '' },
	})

	const onSubmit = (values: z.infer<typeof sectionSchema>) => {
		setIsLoading(true)
		const promise = createSection(course._id, values.title, pathname)
			.then(() => onToggle())
			.finally(() => setIsLoading(false))

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully created!',
			error: 'Something went wrong!',
		})
	}

	return (
		<>
			{isLoading && <FillLoading />}
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Section title
									<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										className='bg-secondary'
										disabled={isLoading}
										placeholder='e.g Introduction to the course'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit' disabled={isLoading}>
						Save
					</Button>
				</form>
			</Form>
		</>
	)
}
