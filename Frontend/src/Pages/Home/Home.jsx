import React from 'react'
import HomeHeroSection from '../../Components/HomeHeroSection/HomeHeroSection'
import HomeGallerySection from '../../Components/HomeGallerySection/HomeGallerySection'
import HomeAboutSection from '../../Components/HomeAboutSection/HomeAboutSection'
import HomeServiceSection from '../../Components/HomeServiceSection/HomeServiceSection'
import HomeHeading from '../../Components/HomeHeading/HomeHeading'
import HomeStories from '../../Components/HomeStories/HomeStories'

const Home = () => {
  return (
    <div>
      <HomeHeroSection />
      <HomeGallerySection />
      <HomeAboutSection />
      <HomeServiceSection />
      <HomeHeading />
      <HomeStories />
    </div>
  )
}

export default Home
