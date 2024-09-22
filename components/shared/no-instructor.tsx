import NoResult from '@/components/shared/no-result'
import Mobile from '../../app/[lng]/(root)/_components/mobile'
import Logo from '@/components/shared/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function NoInstructor() {
	return (
		<>
			<div className='lg:hidden'>
				<div className='m-3 flex justify-between'>
					<Logo />
					<span className='my-auto'>
						<Mobile />
					</span>
				</div>

				<NoResult
					title='Kompyuter orqali kiring!'
					description='Instructor va Admin panellarga Telefon orqali kirish mumkin emas'
				/>
				<div className='mx-auto w-[180px]'>
					<Button size={'icon'} className='bg-primary px-[90px] py-1'>
						<Link href={'/'}>Bosh sahifaga qaytish</Link>
					</Button>
				</div>
			</div>
		</>
	)
}

export default NoInstructor
