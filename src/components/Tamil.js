import React from 'react'
import Figure from 'react-bootstrap/Figure';
import { Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Navbar_Comp from './Navbar_Comp';
function Tamil() {
  return (
    <>
    <>
   <Navbar_Comp />
    </>
      <div className='explore'>
            <h4 className='img_p'>Popular Movies Streaming Now</h4>
            <Link to="/explore">
            <p>Explore Upcoming Movies</p>
            </Link>
        </div>
      <Row>
        <Col>
          <Figure className='figure'>
            <Link to ="/conjurin">
            <Figure.Image
              className='img_movies'
              width={200}
              height={200}
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICA1SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00378033-cgjbwrsmgr-portrait.jpg"
            />
            </Link>
            <Figure.Caption className='img-caption'>
              <h5>Conjurin Kannapan</h5>
           
              <h6>UA</h6>
              <h6>Tamil</h6>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Figure className='figure'>
          <Link to='/fight'>
          <Figure.Image
              className='img_movies'
              width={200}
              height={200}
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTEuNksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379120-uzbnyvbdru-portrait.jpg"
            />
            </Link>
            <Figure.Caption className='img-caption'>
              <h5>Fight Club</h5>
              <h6>A</h6>
              <h6>Tamil</h6>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Figure className='figure'>
          <Link to="/al">
            <Figure.Image
              className='img_movies'
              width={200}
              height={200}
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MS42SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00322921-abydvhmpfz-portrait.jpg"
            />
            </Link>
            <Figure.Caption className='img-caption'>
              <h5>Aalambana</h5>
              <h6>U</h6>
              <h6>Tamil,Telgu</h6>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Figure className='figure'>
          <Link to='/animal'>
            <Figure.Image
              className='img_movies'
              width={200}
              height={200}
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA0NDEuM0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00311762-zjjwutxtls-portrait.jpg"
            />
            </Link>
            <Figure.Caption className='img-caption'>
              <h5>Animal</h5>
              <h6>A</h6>
              <h6>Tamil</h6>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Figure className='figure'>
            <Link to="/kannagi">            
            <Figure.Image
              className='img_movies'
              width={200}
              height={200}
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NS43SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379108-ubqwlmsaaj-portrait.jpg"
            />
            </Link>
            <Figure.Caption className='img-caption'>
              <h5>Kannagi</h5>
              <h6>UA</h6>
              <h6>Tamil</h6>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Figure className='figure'>
            <Link to="/joe">
            <Figure.Image
              className='img_movies'
              width={200}
              height={200}
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgOS45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00376793-aquhpbtucv-portrait.jpg"
            />
            </Link>
            <Figure.Caption className='img-caption'>
              <h5>Joe</h5>
              <h6>UA</h6>
              <h6>Tamil</h6>
            </Figure.Caption>
          </Figure>
        </Col>
        </Row>
        <Row>
        <Col>
          <Figure className='figure'>
            <Link to="/hi">
            <Figure.Image
              className='img_movies'
              width={200}
              height={200}
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICA1Ny44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364503-ybandkparz-portrait.jpg"
            />
            </Link>
            <Figure.Caption className='img-caption'>
              <h5>Hi Nanna</h5>
              <h6>U</h6>
              <h6>Tamil</h6>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Figure className='figure'>
            <Link to="/park">
            <Figure.Image
              className='img_movies'
              width={200}
              height={200}
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICA2LjlLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00377279-rnftjeahaz-portrait.jpg"
            />
            </Link>
            <Figure.Caption className='img-caption'>
              <h5>Parking</h5>
              <h6>UA</h6>
              <h6>Tamil</h6>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Figure className='figure'>
            <Link to="/an">
            <Figure.Image
              className='img_movies'
              width={200}
              height={200}
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICAzLjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00375827-mufdggxkzk-portrait.jpg"
            />
            </Link>
            <Figure.Caption className='img-caption'>
              <h5>Annapoorani</h5>
              <h6>U</h6>
              <h6>Tamil</h6>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Figure className='figure'>
            <Link to="/patti">
            <Figure.Image
              className='img_movies'
              width={200}
              height={200}
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTIgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379623-sfgakdtqgf-portrait.jpg"
            />
            </Link>
            <Figure.Caption className='img-caption'>
              <h5>Patti Sollai Thattathae</h5>
              <h6>U</h6>
              <h6>Tamil</h6>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Figure className='figure'>
            <Link to="/vi">
            <Figure.Image
              className='img_movies'
              width={200}
              height={200}
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NDc4IExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379150-yfcagsqqkt-portrait.jpg"
            />
            </Link>
            <Figure.Caption className='img-caption'>
              <h5>Vivesini</h5>
              <h6>UA</h6>
              <h6>Tamil</h6>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Figure className='figure'>
            <Link to="/sri">
            <Figure.Image
              className='img_movies'
              width={200}
              height={200}
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjA4IExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379268-bcqvsgjntk-portrait.jpg"
            />
            </Link>
            <Figure.Caption className='img-caption'>
              <h5>Sri Sabari Ayyappan</h5>
              <h6>U</h6>
              <h6>Tamil</h6>
            </Figure.Caption>
          </Figure>
        </Col>
    </Row>
</>
  )
}
export default Tamil;


