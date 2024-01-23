import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar_Comp from './Navbar_Comp';
import {Link} from 'react-router-dom'
function Aalambana() {
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
            <Link to="/aalambanav">
            <Card.Img
              variant="top"
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MS42SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00322921-abydvhmpfz-portrait.jpg"
              style={{ width: '100%', height: '400px' }}
            />
            </Link>
            <Card.Body>
              <Card.Title>About the movie</Card.Title>
              <Card.Text>
              Alambana was scheduled for a theatrical release on 15 December 2023.However, on 12 December, TSR Studios filed a case against 24AM Studios and KJR Studios for lenting ₹10 crore and only paying back ₹3 crore. This resulted in the film to receive a four-week ban from release.
              </Card.Text>

6            </Card.Body>
          </Card>
        </div>

        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ color: 'black', marginTop: '50px' }}>Aalambana</h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img style={{ width: '23px', marginRight: '5px', marginTop: '20px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png" />
           <Link to="/rate">
            <h5 style={{ color: 'black', margin: '0', cursor: 'pointer', marginTop: '20px',cursor:'pointer' }}>7.2/10 5K Votes---></h5>
            </Link>
          </div>
          <div>
            <h5 className="border" style={{ color: 'black', padding: '10px', border: '30px', marginTop: '20px', display: 'flex', justifyContent: 'center' }}>Add your ratings & reviews <button style={{ backgroundColor: 'yellow', cursor: 'pointer' }}>Rate now</button></h5>
          </div>
          <div>
            <button style={{ marginTop: '20px', backgroundColor: 'blueviolet', color: 'white' }}>2D</button>
            <button style={{ marginTop: '20px', backgroundColor: 'blueviolet', color: 'white' }}>Tamil</button>
          </div>
          <h5 style={{ color: 'blue', marginTop: '20px' }}>2h 18m . Action,Thriller . A .15 Dec,2023</h5>
          <Button style={{ backgroundColor: 'red', marginTop: '20px', width: '200px' }} variant="primary">
            Book Tickets
          </Button>
        </div>
      </div>
    </div>
  </div>
  )
}
export default  Aalambana;

