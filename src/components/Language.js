import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
function Language() {
  
  return (
    <div className='home'>
      
      <div className="explore" onclick="">
        <h2 >Movies in Coimbatore</h2>
        <Link to="/explore">
        <p>Explore Upcoming Movies</p>
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
  )
}
export default Language;
