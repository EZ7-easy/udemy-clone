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
		name: 'Elon Musk',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/800px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg',
		job: 'Designer',
	},
	{
		name: 'Bill Gates',
		image:
			'https://assets.bbhub.io/dotorg/sites/64/2023/09/BillGates-Headshot-2022.jpg',
		job: 'Web Developer',
	},
	{
		name: 'GigaChad',
		image:
			'https://media.printables.com/media/prints/609705/images/4843766_f3a15f19-e7ee-4661-b553-2533084ac8fa_dcb27d2e-db17-433d-8f60-1d129843482d/th-387312948.png',
		job: 'Designer',
	},
	{
		name: 'Asker',
		image: '/assets/images/ask.jpg',
		job: 'Digital Marketer',
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
