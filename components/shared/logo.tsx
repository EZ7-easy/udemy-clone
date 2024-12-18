import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	return (
		<Link href={'/'} className='flex items-center gap-1'>
			<Image src={'/assets/logo.png'} alt='logo' width={70} height={50} />
			<h1 className='font-space-grotesk text-4xl font-bold my-auto'>Ta'limot</h1>
		</Link>
	)
}

export default Logo
