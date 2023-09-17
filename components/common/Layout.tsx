import React, { PropsWithChildren } from 'react'
import { Footer } from './footer/Footer'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div style={{ maxWidth: 480, margin: '0 auto' }}> {children}</div>
      <Footer />
    </div>
  )
}
