import './globals.css'
import { Inter } from 'next/font/google'
import classNames from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo List',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={classNames(
          inter.className,
          'bg-slate-800 text-slate-200 container mx-auto p-4'
        )}
      >
        {children}
      </body>
    </html>
  )
}
