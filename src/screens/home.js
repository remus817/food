import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Card from '../components/card'
import Carousel from '../components/carousel'

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel/>
      </div>
      
      <div>
        <Card/>
      </div>
      <div>
        <Card/>
      </div>
      <div>
        <Card/>
      </div>
      <div>
        <Footer/>
      </div>
      </div>
  )
}
