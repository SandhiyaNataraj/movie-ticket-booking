import React from 'react'
import Figure from 'react-bootstrap/Figure';
import { Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Hindi() {
  return (
    <>
    <div className='explore'>
          <h4 className='img_p'>Popular Movies Streaming Now</h4>
          <Link to="/explore">
          <p>Explore Upcoming Movies</p>
          </Link>
      </div>
    <Row>
      <Col>
        <Figure className='figure'>
            <Link to='/animal'>
          <Figure.Image
            className='img_movies'
            width={200}
            height={200}
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4zLzEwICA0ODEuMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00311762-zjjwutxtls-portrait.jpg"
          />
          </Link>
          <Figure.Caption className='img-caption'>
            <h5>Animal</h5>
            <h6>A</h6>
            <h6>Hindi,Teludu,Tamil,Kannada,Telugu</h6>
          </Figure.Caption>
        </Figure>
      </Col>
      <Col>
        <Figure className='figure'>
            <Link to="/sam">
          <Figure.Image
            className='img_movies'
            width={200}
            height={200}
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA4NS4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00310187-nbqbszhvcm-portrait.jpg"
          />
          </Link>
          <Figure.Caption className='img-caption'>
            <h5>Sam Bahabur</h5>
            <h6>UA</h6>
            <h6>Hindi</h6>
          </Figure.Caption>
        </Figure>
      </Col>
     
  </Row>
</>
  )
}
export default Hindi;


