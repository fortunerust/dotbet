import React from 'react'
import '../assets/css/home.css'
import { RightAreaHome } from '../components/RightAreaHome'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div>
      <div className='flex items-start home'>
        {/* right area */}
        <RightAreaHome />
      </div>
      <Footer />
    </div>
  )
}
