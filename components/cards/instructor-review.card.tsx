'use client'

import React from 'react'
import { Button } from '../ui/button'
import { Flag } from 'lucide-react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import ReactStars from 'react-stars'

function InstructorReviewCard() {
	return (
		<div className='flex gap-4 border-b pb-4'>
			<div className='flex-1'>
				<div className='flex gap-3'>
					<Avatar>
						<AvatarFallback className='uppercase'>SB</AvatarFallback>
					</Avatar>

					<div className='flex flex-col'>
						<div className='font-space-grotesk text-sm'>
							Bobur Nematov{' '}
							<span className='text-xs text-muted-foreground'>3 Days ago</span>
						</div>
						<ReactStars value={4.5} edit={false} color2='#DD6B20' />
						<div className='font-space-grotesk font-bold'>
							Full Course ReactJS
						</div>
						<p className='text-sm text-muted-foreground'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
							eum iusto dolores neque quod atque cum. Veniam nam cupiditate
							doloribus corrupti officia, incidunt quae. Odit alias illo
							accusamus corrupti possimus?
						</p>
					</div>
				</div>
			</div>
			<Button size={'icon'} variant={'ghost'} className='self-start'>
				<Flag className='text-muted-foreground' />
			</Button>
		</div>
	)
}

export default InstructorReviewCard
