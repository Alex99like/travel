import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/common/footer/Footer'
import { Layout } from '@/components/common/Layout'
import { GetServerSideProps } from 'next'
import { IPlace } from '@/types/place'
import { HeadingSection } from '@/components/elements/Home/HeadingSection/HeadingSection'
import { Search } from '@/components/elements/Search/Search'
import { Filters } from '@/components/elements/Filters/Filters'
import { PopularPlaces } from '@/components/elements/Home/PopularPlaces/PopularPlaces'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

interface IHome {
  initialPlaces: IPlace[]
}

export default function Home({ initialPlaces }: IHome) {
  const [places, setPlaces] = useState(initialPlaces)

  const [loading, setLoading] = useState(false)

  return (
    <Layout>
      <HeadingSection />
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Search initialPlaces={places} setIsLoading={setLoading} setPlaces={setPlaces} />
        <Filters setPlaces={setPlaces} />
        <PopularPlaces places={places} isLoading={false} />
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  const result = await fetch('http://localhost:3000/api/places')
  const initialPlaces: IPlace[] = await result.json()

  return {
    props: {
      initialPlaces
    }
  }
}