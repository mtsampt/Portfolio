import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Frontend/Fullstack Engineer',
  description: 'Professional portfolio showcasing frontend and fullstack development projects',
  keywords: ['portfolio', 'frontend', 'fullstack', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-dark-900 text-dark-900 dark:text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
