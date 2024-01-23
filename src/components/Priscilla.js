import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar_Comp from './Navbar_Comp';
import {Link} from 'react-router-dom';
function Priscilla() {
     return (
        <div>
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
                <Link to="/priscillav">
                <Card.Img
                  variant="top"
                  src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/priscilla-et00372553-1697113034.jpg"
                  style={{ width: '100%', height: '400px' }}
                />
                </Link>
                <Card.Body>
                  <Card.Title>About the movie</Card.Title>
                  <Card.Text>
                  When teenage Priscilla Beaulieu meets Elvis Presley, the man who is already a meteoric rock-and-roll superstar becomes someone entirely unexpected in private moments: a thrilling crush, an ally in loneliness, a vulnerable best friend.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
    
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ color: 'black', marginTop: '50px' }}>Priscilla</h2>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img style={{ width: '23px', marginRight: '5px', marginTop: '20px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png" />
                <Link to="/rate">
                <h5 style={{ color: 'black', margin: '0', cursor: 'pointer', marginTop: '20px' }}>7.1/10 294 Votes---></h5>
                </Link>
              </div>
              <div>
                <h5 className="border" style={{ color: 'black', padding: '10px', border: '30px', marginTop: '20px', display: 'flex', justifyContent: 'center' }}>Add your ratings & reviews <button style={{ backgroundColor: 'yellow', cursor: 'pointer' }}>Rate now</button></h5>
              </div>
              <div>
                <button style={{ marginTop: '20px', backgroundColor: 'blueviolet', color: 'white' }}>2D</button>
                <button style={{ marginTop: '20px', backgroundColor: 'blueviolet', color: 'white' }}>English</button>
              </div>
              <h5 style={{ color: 'blue', marginTop: '20px' }}>2h 28m . Biography,Drama,Musical . A .15 Dec,2023</h5>
              <Button style={{ backgroundColor: 'red', marginTop: '20px', width: '200px' }} variant="primary">
                Book Tickets
              </Button>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Priscilla;
