'use client'

import ReactStars from 'react-stars'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

function ReviewCard() {
	return (
		<div className='mt-6 border-t border-t-secondary'>
			<div className='mt-8 flex gap-2'>
				<Avatar>
					<AvatarImage
						src={
							'https://lh3.googleusercontent.com/a/ACg8ocJ37vKlSjIjRXfI-JNDgXo_lduQrdLNeICm33fe7r_cI6Njsrw=s288-c-no'
						}
					/>
					<AvatarFallback className='uppercase'>SB</AvatarFallback>
				</Avatar>

				<div className='flex flex-col'>
					<div>Nematov Bobur</div>
					<div className='flex items-center gap-1'>
						<ReactStars value={4.5} edit={false} color2='#DD6B20' />
						<p className='text-sm opacity-50'>5 minut oldin</p>
					</div>
				</div>
			</div>

			<div className='mt-2'>Kurs prosta bomba💣</div>
		</div>
	)
}

export default ReviewCard
