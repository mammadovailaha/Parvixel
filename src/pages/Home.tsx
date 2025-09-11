import React from 'react'
import Hero from '../components/Hero'
import ImagesSection from '../components/ImagesSection'
import Experience from '../components/Experience'

const Home: React.FC = () => {
  return (
    <div className='bg-white dark:bg-black overflow-x-hidden flex flex-col items-center'>
      <Hero />
      <ImagesSection/>
      <Experience/>
    </div>
  )
}

export default Home
