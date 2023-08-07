import { pageMetadata } from '@/content/general'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  metadataBase: new URL('https://www.aleeconseil.com'),
  openGraph: {
    images: '/og-image.png',
  },
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
