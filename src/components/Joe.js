import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar_Comp from './Navbar_Comp';
import {Link} from 'react-router-dom';
function Joe() {
  return (
    <>
      <Navbar_Comp />
      <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <div className='ttr'
            style={{
              backgroundSize: 'cover',
              flex: '1',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
            }}
          >
            
            <div style={{ flex: '1', marginRight: '30px', marginLeft: '200px' }}>
              <Card style={{ width: '50%' }}>
                <Link to="/joev">
                <Card.Img
                  variant="top"
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgMTFLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00376793-aquhpbtucv-portrait.jpg"
                  style={{ width: '100%', height: '400px' }}
                />
                </Link>
                <Card.Body>
                  <Card.Title>About the movie</Card.Title>
                  <Card.Text>
                  The movie revolves around the emotional rollercoaster of love, laughter, friendships and heartbreaks in Joe`s life.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
    
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ color: 'black', marginTop: '50px' }}>Joe</h2>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img style={{ width: '23px', marginRight: '5px', marginTop: '20px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png" />
                <Link to="/rate">
                <h5 style={{ color: 'black', margin: '0', cursor: 'pointer', marginTop: '20px' }}>9/10 11.1K Votes---></h5>
                </Link>
              </div>
              <div>
                <h5 className="border" style={{ color: 'black', padding: '10px', border: '30px', marginTop: '20px', display: 'flex', justifyContent: 'center' }}>Add your ratings & reviews <button style={{ backgroundColor: 'yellow', cursor: 'pointer' }}>Rate now</button></h5>
              </div>
              <div>
                <button style={{ marginTop: '20px', backgroundColor: 'blueviolet', color: 'white' }}>2D</button>
                <button style={{ marginTop: '20px', backgroundColor: 'blueviolet', color: 'white' }}>Tamil</button>
              </div>
              <h5 style={{ color: 'blue', marginTop: '20px' }}>2h 27m .Drama,Romantic . A .24 Nov,2023</h5>
              <Button style={{ backgroundColor: 'red', marginTop: '20px', width: '200px' }} variant="primary">
             Book Tickets
              </Button>
            </div>
          </div>
        </div>
       </>
  );
}
export default Joe;
