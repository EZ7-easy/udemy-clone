import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	return (
		<Link href={'/'} className='flex items-center gap-2'>
			<Image src={'/assets/logo.png'} alt='logo' width={120} height={50} />
		</Link>
	)
}

export default Logo
