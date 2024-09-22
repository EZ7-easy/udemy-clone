import { ChildProps } from '@/types'
import Sidebar from './_components/sidebar'
import Logo from '@/components/shared/logo'
import { Separator } from '@/components/ui/separator'
import MobileNavbar from './_components/mobile-navbar'

function Layout({ children }: ChildProps) {
	return (
		<>
			<Sidebar />
			<div className='fixed inset-0 z-40 h-20 bg-background/70 px-3 pt-3 backdrop-blur-xl lg:hidden'>
				<div className='flex  justify-between '>
					<div>
						<Logo />
					</div>
					<div className='p-2 pb-1'>
						<MobileNavbar />
					</div>
				</div>
				<Separator className='my-3' />
			</div>

			<main className='w-full p-4 pl-[420px] max-lg:mt-[80px] max-lg:pl-24 max-md:mt-[80px] max-md:pl-24'>
				<div className='size-full rounded-md bg-gradient-to-b from-background to-secondary px-4 pb-4'>
					{children}
				</div>
			</main>
		</>
	)
}

export default Layout
