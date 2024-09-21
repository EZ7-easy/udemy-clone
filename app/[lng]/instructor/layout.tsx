import { ChildProps } from '@/types'
import Navbar from './_components/navbar'
import Sidebar from './_components/sidebar'
import NoInstructor from './_components/no-instructor'

function Layout({ children }: ChildProps) {
	return (
		<div>
			{/* Bu Kompyuter uchun */}
			<div className='max-lg:hidden'>
				<Navbar />
				<Sidebar />
				<main className='w-full p-4 pl-[320px] pt-[12vh]'>
					<div className='size-full rounded-md bg-secondary px-4 pb-4'>
						{children}
					</div>
				</main>
			</div>

			{/* Telefon uchun */}
			<NoInstructor />
		</div>
	)
}

export default Layout
