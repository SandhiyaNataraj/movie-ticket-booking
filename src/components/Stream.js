import React from 'react'
import Slide_Stream from './Slide_Stream';
import Navbar_Comp from './Navbar_Comp';
import StreamMovies from './StreamMovies';
import Footer from './Footer';
function Stream() {
  return (
    <div>
        <Navbar_Comp />
       <Slide_Stream />
       <StreamMovies />
       <Footer />
    </div>
  )
}
export default Stream;
