import InstructorCourseCard from '@/components/cards/instructor-course.card'
import Header from '../_components/header'
import { getCourses } from '@/actions/course.action'
import { auth } from '@clerk/nextjs/server'

async function Page() {
	const { userId } = auth()
	const courses = await getCourses(userId as string)

	return (
		<>
			<Header title='My Courses' description='Here are your latest courses' />
			<div className='mt-4 grid grid-cols-3 gap-4'>
				{courses.map(item => (
					<InstructorCourseCard
						key={item._id}
						{...item}
						course={JSON.parse(JSON.stringify(item))}
					/>
				))}
			</div>
		</>
	)
}

export default Page
