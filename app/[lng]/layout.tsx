import type { Metadata } from 'next'
import { Roboto, Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import './globals.css'
import { ChildProps } from '@/types'
import { ThemeProvider } from '@/components/providers/theme.provider'
import { languages } from '@/i18n/settings'
import { dir } from 'i18next'
import { ClerkProvider } from '@clerk/nextjs'
import { localization } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'
import { GoogleAnalytics } from '@next/third-parties/google'

const roboto = Roboto({
	subsets: ['latin', 'cyrillic'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-roboto',
})

const spaceGrotesk = SpaceGrotesk({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-space-grotesk',
})

export async function generateStaticParams() {
	return languages.map(lng => ({ lng }))
}

export const metadata: Metadata = {
	metadataBase: new URL('https://m1lo0709.uz'),
	title: 'M1lo praktikum | Dasturlash kurslari',
	description:
		"M1lo Praktikum Next.js dasturlash kurslari, amaliyotlar, startup loyihalar va asosiysi sifatli ta'limdir.",
	authors: [{ name: 'Bobur Nematov', url: 'https://m1lo0709.uz' }],
	icons: { icon: '/logo.svg' },
	openGraph: {
		title: 'M1lo praktikum | Dasturlash kurslari',
		description:
			"M1lo Praktikum Next.js dasturlash kurslari, amaliyotlar, startup loyihalar va asosiysi sifatli ta'limdir.",
		type: 'website',
		url: 'https://m1lo0709.uz',
		locale: 'uz_UZ',
		images:
			'https://i.pinimg.com/736x/d3/39/5a/d3395af0ffd62a571b9e683a7fa3e509.jpg',
		countryName: 'Uzbekistan',
		siteName: 'M1lo',
		emails: 'info@m1lo.uz',
	},
	keywords:
		"Praktikum, Praktikum m1lo, NextJS, NextJS to'liq kurs, NextJS kurs, NextJS dasturlash, Startup, Startup loyiha, Startup sammi, Sammi, Sammi praktikum, Sammi dasturlash, Sammi startup, Sammi kurs, Sammi kurslari, Sammi dasturlash kurslari, Sammi startup kurslari, Sammi startup loyihalari, Sammi startup loyiha, Sammi startup loyihasi, Sammi startup loyihasi dasturlash",
}

interface Props extends ChildProps {
	params: { lng: string }
}

function RootLayout({ children, params: { lng } }: Props) {
	const local = localization(lng)

	return (
		<ClerkProvider localization={local}>
			<html lang={lng} dir={dir(lng)} suppressHydrationWarning>
				<body
					className={`${roboto.variable} ${spaceGrotesk.variable} custom-scrollbar overflow-x-hidden`}
					suppressHydrationWarning
				>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						<Toaster position='top-center' />
						<div>{children}</div>
					</ThemeProvider>
				</body>
				<GoogleAnalytics gaId='G-8M4J2SDRJD' />
			</html>
		</ClerkProvider>
	)
}

export default RootLayout
