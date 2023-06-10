import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/providers/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'English Platform'
}

export default function RootLayout({ children, ...props }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
