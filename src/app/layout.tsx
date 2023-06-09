'use client';

import './globals.css'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import { Provider } from 'react-redux'
import { store } from '@/store'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
    <html lang="en">
      <Layout>{children}</Layout>
    </html>
    </Provider>
  )
}
