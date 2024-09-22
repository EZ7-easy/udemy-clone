import { ChildProps } from '@/types'
import Navbar from '@/components/shared/navbar'
import Sidebar from '@/components/shared/sidebar'
import NoInstructor from '@/components/shared/no-instructor'

function Layout({ children }: ChildProps) {
	return (
		<div>
			<div className='max-lg:hidden'>
				<Navbar />
				<Sidebar page='admin' />
				<main className='w-full p-4 pl-[320px] pt-[12vh]'>
					<div className='size-full rounded-md bg-secondary px-4 pb-4'>
						{children}
					</div>
				</main>
			</div>

			<NoInstructor />
		</div>
	)
}

export default Layout
