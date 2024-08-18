import { Rss, Home, ListVideo, Contact } from 'lucide-react'

export const navLinks = [
	{ route: '', name: 'Home', icon: Home },
	{ route: 'courses', name: 'Courses', icon: ListVideo },
	{ route: 'blogs', name: 'Blogs', icon: Rss },
	{ route: 'contact', name: 'Contact', icon: Contact },
]

export const lngs = [
	{ route: 'en', label: 'English' },
	{ route: 'uz', label: "O'zbekcha" },
	{ route: 'ru', label: 'Русский' },
	{ route: 'tr', label: 'Turkche' },
]
