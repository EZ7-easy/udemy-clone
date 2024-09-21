import { ChildProps } from '@/types'
import Sidebar from './_components/sidebar'
import Mobile from '../(root)/_components/mobile'
import Logo from '@/components/shared/logo'
import { Separator } from '@/components/ui/separator'

function Layout({ children }: ChildProps) {
	return (
		<>
			<Sidebar />
			<div className='sticky mt-3 block justify-between max-lg:pl-24 max-md:pl-24 lg:hidden'>
				<div className='flex'>
					<div>
						<Logo />
					</div>
					<div className='p-2 pb-1'>
						<Mobile />
					</div>
				</div>
				<Separator className='my-3' />
			</div>

			<main className='w-full p-4 pl-[420px] max-lg:pl-24 max-md:pl-24'>
				<div className='size-full rounded-md bg-gradient-to-b from-background to-secondary px-4 pb-4'>
					{children}
				</div>
			</main>
		</>
	)
}

export default Layout
