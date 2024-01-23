import React from 'react'
import {Link} from 'react-router-dom';
import Navbar_Comp from './Navbar_Comp';
function UpcomingMovies() {
  return (
    <>
    <Navbar_Comp />
    <div className='home'>
    <div className="explore" onclick="">
      <h2 >Now Showing</h2>
      <Link to="/">
      <p>In Cinemas near you</p>
      </Link>
      </div>
      <Link to="/tamil">
      <button className='lan-btn' onclick="">Tamil</button>
      </Link>
      <Link to="/english">
      <button className='lan-btn' onclick="">English</button>
      </Link>
      <Link to="/hindi">
      <button className='lan-btn' onclick="">Hindi</button>
      </Link>
      <Link to="/telugu">
      <button className='lan-btn' onclick="">Telugu</button>
      </Link>
      <Link to="/malayalam">
      <button className='lan-btn' onclick="">Malayalam</button>
      </Link>
    </div>
     </>
  )
}
export default UpcomingMovies;

