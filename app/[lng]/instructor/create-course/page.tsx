import { Separator } from '@/components/ui/separator'
import Header from '../../../../components/shared/header'
import CourseFieldsForm from '@/components/forms/course-fields.form'
import { auth } from '@clerk/nextjs'
import { getRole } from '@/actions/user.action'
import { redirect } from 'next/navigation'

async function Page() {
		const { userId } = auth()
		const user = await getRole(userId!)
	
		if (user.role !== 'instructor') return redirect('/')

	return (
		<>
			<Header
				title='Create a course'
				description='Fill in the details below to create a new course'
			/>

			<div className='mt-4 rounded-md bg-background p-4'>
				<h3 className='font-space-grotesk text-lg font-medium'>
					Basic information
				</h3>
				<Separator className='my-3' />
				<CourseFieldsForm />
			</div>
		</>
	)
}

export default Page
