import { pageMetadata } from '@/content/general'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  metadataBase: new URL(pageMetadata.baseUrl),
  alternates: {
    canonical: '/',
    languages: {
      'fr-MA': '/',
    },
  },
  icons: {
    icon: 'https://www.aleeconseil.com/favicon.ico',
    apple: 'https://www.aleeconseil.com/apple-icon.png',
  },
  openGraph: {
    title: pageMetadata.title,
    description: pageMetadata.description,
    siteName: pageMetadata.siteName,
    url: 'https://www.aleeconseil.com',
    images: {
      url: 'https://www.aleeconseil.com/favicon.ico',
      width: 96,
      height: 96,
    },
    locale: 'fr-MA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': 'large',
      'max-image-preview': 'large',
      'max-snippet': 1024,
    }
  },
  themeColor: "#644E9B",
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
