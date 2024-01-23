import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar_Comp from './Navbar_Comp';
import {Link} from 'react-router-dom';
function Pradhan() {
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
                <Card.Img
                  variant="top"
                  src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pradhan-et00376411-1701867434.jpg"
                  style={{ width: '100%', height: '400px' }}
                />
                <Card.Body>
                  <Card.Title>About the movie</Card.Title>
                  <Card.Text>
                  Deepak Pradhan, a young police officer, gets transferred to North Bengal where his junior officers are involved in corrupt practices. When disturbing events from the past start to surface and as the pressure builds, will Deepak be able to hold on to his principles? Will he be able to save his integrity and loved ones?
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
    
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ color: 'black', marginTop: '50px' }}>Pradhan</h2>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img style={{ width: '23px', marginRight: '5px', marginTop: '20px' }} 
                src="https://clipground.com/images/free-thumbs-up-clipart-5.png" />
                <Link to="/rate">
                <h5 style={{ color: 'black', margin: '0', cursor: 'pointer', marginTop: '20px' }}>8K are interested</h5>
                </Link>
              </div>
              <div>
                <h5 className="border" style={{ color: 'black', padding: '10px', border: '30px', marginTop: '20px', display: 'flex', justifyContent: 'center' }}>Add your ratings & reviews <button style={{ backgroundColor: 'yellow', cursor: 'pointer' }}>Rate now</button></h5>
              </div>
              <div>
                <button style={{ marginTop: '20px', backgroundColor: 'blueviolet', color: 'white' }}>2D</button>
                <button style={{ marginTop: '20px', backgroundColor: 'blueviolet', color: 'white' }}>Bengali</button>
              </div>
              <h5 style={{ color: 'blue', marginTop: '20px' }}>2h 43m . Drama,Family .  UA .22 Dec,2023</h5>
              <Button style={{ backgroundColor: 'red', marginTop: '20px', width: '200px' }} variant="primary">
                Book Tickets
              </Button>
            </div>
          </div>
        </div>
      </div>
  
  )
}
export default Pradhan
