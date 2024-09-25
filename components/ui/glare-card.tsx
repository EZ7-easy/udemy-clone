/* eslint-disable tailwindcss/no-custom-classname */
import { cn } from '@/lib/utils'
import React, { useRef } from 'react'

export const GlareCard = ({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) => {
	const isPointerInside = useRef(false)
	const refElement = useRef<HTMLDivElement>(null)
	const state = useRef({
		glare: {
			x: 50,
			y: 50,
		},
		background: {
			x: 50,
			y: 50,
		},
		rotate: {
			x: 0,
			y: 0,
		},
	})
	const containerStyle = {
		'--m-x': '50%',
		'--m-y': '50%',
		'--r-x': '0deg',
		'--r-y': '0deg',
		'--bg-x': '50%',
		'--bg-y': '50%',
		'--duration': '300ms',
		'--foil-size': '100%',
		'--opacity': '0',
		// '--radius': '48px',
		'--easing': 'ease',
		'--transition': 'var(--duration) var(--easing)',
	} as any

	const updateStyles = () => {
		if (refElement.current) {
			console.log(state.current)
			const { background, rotate, glare } = state.current
			refElement.current?.style.setProperty('--m-x', `${glare.x}%`)
			refElement.current?.style.setProperty('--m-y', `${glare.y}%`)
			refElement.current?.style.setProperty('--r-x', `${rotate.x}deg`)
			refElement.current?.style.setProperty('--r-y', `${rotate.y}deg`)
			refElement.current?.style.setProperty('--bg-x', `${background.x}%`)
			refElement.current?.style.setProperty('--bg-y', `${background.y}%`)
		}
	}
	return (
		<div
			style={containerStyle}
			className='duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] relative isolate w-[320px] transition-transform will-change-transform [aspect-ratio:17/21] [contain:layout_style] [perspective:600px]'
			ref={refElement}
			onPointerMove={event => {
				const rotateFactor = 0.4
				const rect = event.currentTarget.getBoundingClientRect()
				const position = {
					x: event.clientX - rect.left,
					y: event.clientY - rect.top,
				}
				const percentage = {
					x: (100 / rect.width) * position.x,
					y: (100 / rect.height) * position.y,
				}
				const delta = {
					x: percentage.x - 50,
					y: percentage.y - 50,
				}

				const { background, rotate, glare } = state.current
				background.x = 50 + percentage.x / 4 - 12.5
				background.y = 50 + percentage.y / 3 - 16.67
				rotate.x = -(delta.x / 3.5)
				rotate.y = delta.y / 2
				rotate.x *= rotateFactor
				rotate.y *= rotateFactor
				glare.x = percentage.x
				glare.y = percentage.y

				updateStyles()
			}}
			onPointerEnter={() => {
				isPointerInside.current = true
				if (refElement.current) {
					setTimeout(() => {
						if (isPointerInside.current) {
							refElement.current?.style.setProperty('--duration', '0s')
						}
					}, 300)
				}
			}}
			onPointerLeave={() => {
				isPointerInside.current = false
				if (refElement.current) {
					refElement.current.style.removeProperty('--duration')
					refElement.current?.style.setProperty('--r-x', `0deg`)
					refElement.current?.style.setProperty('--r-y', `0deg`)
				}
			}}
		>
			<div className='duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] grid h-full origin-center overflow-hidden transition-transform will-change-transform [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] hover:filter-none hover:[--duration:200ms] hover:[--easing:linear] hover:[--opacity:0.6]'>
				<div className='grid size-full mix-blend-soft-light [clip-path:inset(0_0_0_0_round_var(--radius))] [grid-area:1/1]'>
					<div className={cn('h-full w-full bg-slate-950', className)}>
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}
