import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/common/footer/Footer'
import { Layout } from '@/components/common/Layout'
import { GetServerSideProps } from 'next'
import { IPlace } from '@/src/types/place'
import { HeadingSection } from '@/components/elements/Home/HeadingSection/HeadingSection'
import { Search } from '@/components/elements/Search/Search'
import { Filters } from '@/components/elements/Filters/Filters'


const inter = Inter({ subsets: ['latin'] })

interface IHome {
  places: IPlace[]
}

export default function Home({ places }: IHome) {
  return (
    <Layout>
      <HeadingSection />
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Search />
        <Filters />
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  const result = await fetch('http://localhost:3000/api/places')
  const places: IPlace[] = await result.json()

  return {
    props: {
      places
    }
  }
}