import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/common/footer/Footer'
import { Layout } from '@/components/common/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>Hpme Page</Layout>
  )
}
