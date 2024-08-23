import StatisticsCard from '@/components/cards/statistics.card'
import Header from '../_components/header'
import { MonitorPlay } from 'lucide-react'
import { PiStudent } from 'react-icons/pi'
import { GrMoney } from 'react-icons/gr'
import InstructorCourseCard from '@/components/cards/instructor-course.card'
import { courses } from '@/constants'
import ReviewCard from '@/components/cards/review.card'

function Page() {
	return (
		<>
			<Header title='Dashboard' description='Welcome to your dashboard' />

			<div className='mt-4 grid grid-cols-3 gap-4'>
				<StatisticsCard label='Total Courses' value='4' Icon={MonitorPlay} />
				<StatisticsCard
					label='Total Students'
					value='11.000'
					Icon={PiStudent}
				/>
				<StatisticsCard label='Total Sales' value='$190.00' Icon={GrMoney} />
			</div>

			<Header
				title='Latest Courses'
				description='Here are you latest courses'
			/>

			<div className='mt-4 grid grid-cols-3 gap-4'>
				{courses
					.map(course => (
						<InstructorCourseCard key={course.title} {...course} />
					))
					.slice(0, 3)}
			</div>

			<Header title='Reviews' description='Here are you latest reviews' />

			<div className='mt-4 grid grid-cols-3 gap-4'>
				<div className='rounded-md bg-background px-4 pb-4'>
					<ReviewCard />
				</div>
				<div className='rounded-md bg-background px-4 pb-4'>
					<ReviewCard />
				</div>
				<div className='rounded-md bg-background px-4 pb-4'>
					<ReviewCard />
				</div>
			</div>
		</>
	)
}

export default Page
