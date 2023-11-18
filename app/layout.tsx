import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Vet Plus',
  description: 'Your pet\'s Health, Our Priority',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
