'use client'

import IconCloud from '@/components/magicui/icon-cloud'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const slugs = [
	'typescript',
	'javascript',
	'dart',
	'java',
	'telegram',
	'flutter',
	'android',
	'html5',
	'css3',
	'nodedotjs',
	'express',
	'nextdotjs',
	'prisma',
	'amazonaws',
	'postgresql',
	'firebase',
	'nginx',
	'vercel',
	'testinglibrary',
	'jest',
	'cypress',
	'docker',
	'git',
	'jira',
	'github',
	'gitlab',
	'visualstudiocode',
	'androidstudio',
	'sonarqube',
	'figma',
]

export function IconCloudDemo() {
	const [loading, setLoading] = useState(true)

	return (
		<div
			className={cn(
				'object-cover duration-700 ease-in-out transition-all scale-100 blur-0 grayscale-0',
				loading && 'scale-110 blur-2xl grayscale',
				'relative mx-auto flex size-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 max-lg:w-[25rem] max-md:w-[18rem] max-md:px-0'
			)}
			onLoad={() => setLoading(false)}
		>
			<IconCloud iconSlugs={slugs} />
		</div>
	)
}
