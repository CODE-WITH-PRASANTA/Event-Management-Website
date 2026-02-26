import React from 'react'
import HomeHeroSection from '../../Components/HomeHeroSection/HomeHeroSection'
import HomeGallerySection from '../../Components/HomeGallerySection/HomeGallerySection'
import HomeAboutSection from '../../Components/HomeAboutSection/HomeAboutSection'
import HomeServiceSection from '../../Components/HomeServiceSection/HomeServiceSection'
import HomeHeading from '../../Components/HomeHeading/HomeHeading'
import HomeStories from '../../Components/HomeStories/HomeStories'
import HomeWedingClicks from '../../Components/HomeWeddingClicks/HomeWeddingClicks'
import HomePricing from '../../Components/HomePricing/HomePricing'

const Home = () => {
  return (
    <div>
      <HomeHeroSection />
      <HomeGallerySection />
      <HomeAboutSection />
      <HomeServiceSection />
      <HomeHeading />
      <HomeStories />
      <HomeWedingClicks />
      <HomePricing />
    </div>
  )
}

export default Home
