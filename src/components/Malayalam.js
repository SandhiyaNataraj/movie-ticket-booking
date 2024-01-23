import React from 'react'
import Figure from 'react-bootstrap/Figure';
import { Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Malayalam() {
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
            <Link to="/philips">
          <Figure.Image
            className='img_movies'
            width={200}
            height={200}
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAxLjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00375869-lzrwuechww-portrait.jpg"
          />
          </Link>
          <Figure.Caption className='img-caption'>
            <h5>Philips</h5>
            <h6>U</h6>
            <h6>Malayalam</h6>
          </Figure.Caption>
        </Figure>
      </Col>
      </Row>
      </>
  )
}
export default Malayalam;

