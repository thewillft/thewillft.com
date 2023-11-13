import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './navbar.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " px-20 pt-14"}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
