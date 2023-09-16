import { Layout } from '@/components/common/Layout'
import { useRouter } from 'next/router'
import React from 'react'

const Place = () => {
  const { query: { slug } } = useRouter()

  return (
    <Layout>Hpme Page</Layout>
  )
}

export default Place