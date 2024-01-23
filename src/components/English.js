import React from 'react'
import Figure from 'react-bootstrap/Figure';
import { Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Tamil() {
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
            <Link to="/wonka">
            <Figure.Image
              className='img_movies'
              width={200}
              height={200}
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAzLjlLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00331568-bjypcwuvyz-portrait.jpg"
            />
            </Link>
            <Figure.Caption className='img-caption'>
              <h5>wonka</h5>
              <h6>U</h6>
              <h6>English</h6>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Figure className='figure'>
            <Link to="/pris">
            <Figure.Image
              className='img_movies'
              width={200}
              height={200}
              src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/priscilla-et00372553-1697113034.jpg"
            />
            </Link>
            <Figure.Caption className='img-caption'>
              <h5>Priscilla</h5>
              <h6>A</h6>
              <h6>English</h6>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Figure className='figure'>
            <Figure.Image
              className='img_movies'
              width={200}
              height={200}
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICAxLjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00371686-kcnnvcdvsk-portrait.jpg"
            />
            <Figure.Caption className='img-caption'>
              <h5>Wish</h5>
              <h6>U</h6>
              <h6>English</h6>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Figure className='figure'>
            <Figure.Image
              className='img_movies'
              width={200}
              height={200}
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4zLzEwICAxMC40SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364208-tkgyrjgeqc-portrait.jpg"
            />
            <Figure.Caption className='img-caption'>
              <h5>Napolean</h5>
              <h6>A</h6>
              <h6>English,Hindi</h6>
            </Figure.Caption>
          </Figure>
        </Col>
       
    </Row>
</>
  )
}
export default Tamil;

