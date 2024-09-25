import IconCloud from '@/components/magicui/icon-cloud'

const slugs = [
	'typescript',
	'javascript',
	'dart',
	'java',
	'react',
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
	return (
		<div className='relative mx-auto flex size-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 max-lg:w-[25rem] max-md:w-[18rem] max-md:px-0'>
			<IconCloud iconSlugs={slugs} />
		</div>
	)
}
