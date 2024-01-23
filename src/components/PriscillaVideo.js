import React from 'react'
import Navbar_Comp from './Navbar_Comp';
function PriscillaVideo() {
  return (
    <div>
    <div>
      <Navbar_Comp />
    </div>
    <div
          style={{
          position: 'relative',
          width: '100%',
          paddingTop: '56.25%', 
          marginTop: '50px',
          }}
          >
          <iframe 
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
    
          }}
       src="https://www.youtube.com/embed/Z2tH2Z4gGHc"
      title="YouTube video player"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  </div>
  )
}
export default PriscillaVideo