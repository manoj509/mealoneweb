import React from 'react'
import Navbar from './public/components/Navbar'
import Hero from './public/components/Hero'
import FeatureSection from './public/components/FeatureSection'
import Footer from './public/components/Footer'
import Animation from './public/components/Animation'
import WorkingProcess from './public/components/WorkingProcess'
import DownloadAppPage from './public/components/DownloadAppPage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeatureSection/>
      <WorkingProcess/>
      <DownloadAppPage/>
      <Footer/>
      
      {/* <Animation/> */}
    </div>
  )
}

export default App