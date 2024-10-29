import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import '@/assets/styles/globals.scss'

import { APP_URl } from '@/config/url.config'

import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'

import Providers from './providers'

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	icons: '/images/logo.svg',
	description: SITE_DESCRIPTION,
	metadataBase: new URL(APP_URl),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['info@cinemanh.com']
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' className={`${GeistSans.variable} ${GeistMono.variable}`}>
			<body>
				<Providers>{children}</Providers>
				<div id='modal'></div>
			</body>
		</html>
	)
}
