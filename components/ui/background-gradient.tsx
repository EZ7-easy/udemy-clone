import { cn } from '@/lib/utils'
import React from 'react'
import { motion } from 'framer-motion'

export const BackgroundGradient = ({
	children,
	className,
	containerClassName,
	animate = true,
}: {
	children?: React.ReactNode
	className?: string
	containerClassName?: string
	animate?: boolean
}) => {
	const variants = {
		initial: {
			backgroundPosition: '0 50%',
		},
		animate: {
			backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
		},
	}
	return (
		<div className={cn('relative p-[2px] group', containerClassName)}>
			<motion.div
				variants={animate ? variants : undefined}
				initial={animate ? 'initial' : undefined}
				animate={animate ? 'animate' : undefined}
				transition={
					animate
						? {
								duration: 5,
								repeat: Infinity,
								repeatType: 'reverse',
						  }
						: undefined
				}
				style={{
					backgroundSize: animate ? '400% 400%' : undefined,
				}}
				className={cn(
					'absolute inset-0 z-[1] opacity-10 group-hover:opacity-60 blur-xl  transition duration-500 will-change-transform',
					'bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500 to-blue-700'
				)}
			/>
			<motion.div
				variants={animate ? variants : undefined}
				initial={animate ? 'initial' : undefined}
				animate={animate ? 'animate' : undefined}
				transition={
					animate
						? {
								duration: 5,
								repeat: Infinity,
								repeatType: 'reverse',
						  }
						: undefined
				}
				style={{
					backgroundSize: animate ? '400% 400%' : undefined,
				}}
				className={cn(
					'absolute inset-0 z-[1] will-change-transform',
					'bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500 to-blue-700'
				)}
			/>

			<div className={cn('relative z-10', className)}>{children}</div>
		</div>
	)
}
