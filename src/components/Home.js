import React from 'react'
import Navbar_Comp from './Navbar_Comp'
import Slide_Comp from './Slide_Comp'
import Language from './Language'
import Picture from './Picture'
import Footer from './Footer'

function Home() {
    const backgroundStyle = {
       // backgroundColor:"#1a1a1a",
        height: '100%', 
      };
  return (
    <div style={ backgroundStyle}>
        <Navbar_Comp />
        <Slide_Comp />
       <Language />
       <Picture />
       <Footer />
    </div>
  )
}
export default Home
