import {
	Contact,
	FileCode,
	GaugeCircle,
	Home,
	ListVideo,
	MessageSquareMore,
	MonitorPlay,
	Settings2,
} from 'lucide-react'
import {
	DiCisco,
	DiCreativecommonsBadge,
	DiDjango,
	DiDocker,
	DiGhost,
	DiGithubFull,
	DiLess,
	DiMailchimp,
	DiMeteorfull,
	DiNetmagazine,
	DiNginx,
	DiStylus,
	DiYahoo,
} from 'react-icons/di'

export const navLinks = [
	{ route: '', name: 'navLink1', icon: Home },
	{ route: 'courses', name: 'navLink2', icon: ListVideo },
	{ route: 'contacts', name: 'navLink4', icon: Contact },
]

export const lngs = [
	{ route: 'en', label: 'English' },
	{ route: 'uz', label: "O'zbekcha" },
	{ route: 'ru', label: 'Русский' },
	{ route: 'tr', label: 'Türkçe' },
]

export const companies = [
	DiCisco,
	DiCreativecommonsBadge,
	DiGhost,
	DiGithubFull,
	DiMeteorfull,
	DiLess,
	DiMailchimp,
	DiNetmagazine,
	DiNginx,
	DiStylus,
	DiYahoo,
	DiDjango,
	DiDocker,
]

export const filterCourses = [
	{ label: 'cateogry1', name: 'all' },
	{ label: 'cateogry2', name: 'newest' },
	{ label: 'cateogry3', name: 'lowest-price' },
	{ label: 'cateogry4', name: 'highest-price' },
]

export const filterLevels = [
	{ label: 'level1', name: 'all' },
	{ label: 'level2', name: 'beginner' },
	{ label: 'level3', name: 'intermediate' },
	{ label: 'level4', name: 'advanced' },
]

export const categories = [
	{
		icon: '/assets/categories/digital-marketing.svg',
		label: 'Digital Marketing',
	},
	{ icon: '/assets/categories/web-development.svg', label: 'Web Development' },
	{ icon: '/assets/categories/graphic-design.svg', label: 'Graphic Design' },
	{ icon: '/assets/categories/photography.svg', label: 'Photography' },
	{ icon: '/assets/categories/social-sciences.svg', label: 'Social Sciences' },
	{ icon: '/assets/categories/art-humanities.svg', label: 'Art & Humanities' },
	{
		icon: '/assets/categories/personal-development.svg',
		label: 'Personal Development',
	},
	{ icon: '/assets/categories/it-software.svg', label: 'IT & Software' },
]

export const instructors = [
	{
		name: 'Emma Watson',
		image:
			'data:image/jpeg;base64,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',
		job: 'Digital Marketer',
	},
	{
		name: 'Emma Watson',
		image:
			'data:image/jpeg;base64,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',
		job: 'Digital Marketer',
	},
	{
		name: 'Emma Watson',
		image:
			'data:image/jpeg;base64,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',
		job: 'Digital Marketer',
	},
	{
		name: 'John Doe',
		image:
			'https://static.independent.co.uk/2023/05/01/11/be5fda0ecbee4f69e504b721f23a0608Y29udGVudHNlYXJjaGFwaSwxNjgzMDIyNTM1-2.71789316.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp',
		job: 'Designer',
	},
]

export const learningJourney = [
	{
		title: 'startTitle1',
		excerpt: 'startDescription1',
		image: '/assets/journey/rating.png',
	},
	{
		title: 'startTitle2',
		excerpt: 'startDescription2',
		image: '/assets/journey/science.png',
	},
	{
		title: 'startTitle3',
		excerpt: 'startDescription3',
		image: '/assets/journey/online-learning.png',
	},
	{
		title: 'startTitle4',
		excerpt: 'startDescription4',
		image: '/assets/journey/certificate.png',
	},
]

export const instructorNavLinks = [
	{
		label: 'Dashboard',
		route: '/instructor',
		icon: GaugeCircle,
	},
	{
		label: 'My Courses',
		route: '/instructor/my-courses',
		icon: MonitorPlay,
	},
	{
		label: 'Create Course',
		route: '/instructor/create-course',
		icon: FileCode,
	},
	{
		label: 'Reviews',
		route: '/instructor/reviews',
		icon: MessageSquareMore,
	},
	{
		label: 'Settings',
		route: '/instructor/settings',
		icon: Settings2,
	},
]

export const courseLevels = ['beginner', 'intermediate', 'advanced']
export const courseCategory = [
	'front-end',
	'back-end',
	'full-stack',
	'mobile',
	'desktop',
	'game',
]
export const courseLanguage = ['english', 'uzbek', 'russian', 'turkish']

export const editorConfig = {
	height: 150,
	menubar: false,
	plugins: [
		'advlist',
		'autolink',
		'lists',
		'link',
		'image',
		'charmap',
		'preview',
		'anchor',
		'searchreplace',
		'visualblocks',
		'codesample',
		'fullscreen',
		'insertdatetime',
		'media',
		'table',
	],
	toolbar: 'link |' + 'bullist numlist',
	content_style: 'body { font-family:Inter; font-size:16px }',
	skin: 'oxide-dark',
	content_css: 'dark',
}
