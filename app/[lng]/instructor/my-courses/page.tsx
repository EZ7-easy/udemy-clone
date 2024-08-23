import InstructorCourseCard from '@/components/cards/instructor-course.card'
import Header from '../_components/header'
import { courses } from '@/constants'

function Page() {
	return (
		<>
			<Header title='My Courses' description='Here are your latest courses' />
			<div className='mt-4 grid grid-cols-3 gap-4'>
				{courses.map((item, idx) => (
					<InstructorCourseCard key={item.title} {...item} />
				))}
			</div>
		</>
	)
}

export default Page
