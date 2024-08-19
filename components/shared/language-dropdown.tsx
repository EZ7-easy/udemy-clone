'use client'

import { Languages } from 'lucide-react'
import { Button } from '../ui/button'
import {
	DropdownMenuTrigger,
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuGroup,
	DropdownMenuContent,
} from '../ui/dropdown-menu'
import Image from 'next/image'
import { lngs } from '@/constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useParams } from 'next/navigation'

function LanguageDropdown() {
	const { lng } = useParams()

	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant={'ghost'} size={'icon'}>
						<Languages />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='w-56'>
					<DropdownMenuGroup>
						{lngs.map(item => (
							<Link href={`/${item.route}`} key={item.route}>
								<DropdownMenuItem
									className={cn(
										'cursor-pointer',
										lng === item.route && 'bg-secondary'
									)}
								>
									<Image
										src={`/assets/locales/${item.route}.png`}
										alt={item.label}
										width={30}
										height={30}
									/>
									<span className='ml-2 font-space-grotesk font-medium'>
										{item.label}
									</span>
								</DropdownMenuItem>
							</Link>
						))}
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default LanguageDropdown
