import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

function MainLayout({ children }: any) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout