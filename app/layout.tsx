import './globals.scss'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'

const inter = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: "/img/logo.png"
  },
  title: 'Sahan Weerakoon',
  description: 'Front end engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
