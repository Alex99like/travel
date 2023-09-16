import React, { PropsWithChildren } from 'react'
import { Footer } from './footer/Footer'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div> {children}</div>
      <Footer />
    </div>
  )
}
