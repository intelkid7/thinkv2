import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import Provider from './components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'think',
  description: 'think fashion stores',
  keywords: ["Next.js", "fashion", "Fashion", "think", "THINK", "think", "Stores", "stores", "store", "Stores", "jackets", "shirts", "muffler"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>

      </body>
    </html>
  )
}
