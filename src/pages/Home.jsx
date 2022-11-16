import React, { useEffect } from 'react'

// COMPONENTS //
import Banner from "../components/Banner";
import LodgingList from "../components/Home/LodgingList"

// STYLES //
import '../styles/index.css'

// IMAGES //
import bannerBackground from '../images/banner_img_home.png'

const Home = () => {

  useEffect(() => {
    document.title = `KASA`
})

  const isMobile = window.matchMedia('(max-width: 425px)');
  const title = "Chez vous, partout et ailleurs";
  const mobileTitle = `Chez vous,
partout et ailleurs`

  return (
    <div>  
      <Banner 
        title = {`${isMobile ? mobileTitle : title}`}
        image={bannerBackground}
      />
      <LodgingList />
    </div >
  )
}

export default Home;

