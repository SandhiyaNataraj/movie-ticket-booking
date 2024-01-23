import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar_Comp from './Navbar_Comp';
import {Link} from 'react-router-dom';

function FightClub() {
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
        <div
          style={{
            backgroundImage: 'url(C:\Users\sandh\Downloads\ticketbookingapp\myapp\public\fight.png)',
            backgroundSize: 'cover',
            flex: '1',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            display: 'flex',
          }}
        >
          <div style={{ flex: '1', marginRight: '30px', marginLeft: '200px'  }}>
            <Card style={{ width: '50%' }}>
              <Link to="/fightv">
              <Card.Img
                variant="top"
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4yLzEwICA1LjNLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379120-uzbnyvbdru-portrait.jpg"
                style={{ width: '100%', height: '400px' }}
              />
              </Link>
              <Card.Body>
                <Card.Title>About the movie</Card.Title>
                <Card.Text>
                Selva, a young vibrant college student who dreams to be a footballer is frustrated with life due to lack of opportunities. He grows into an angry young man who is drawn into conflicts involving him and his family.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ color: 'black',marginTop:'50px' }}>Fight Club</h2>
            <div style={{ display: 'flex', alignItems: 'center',marginTop:'20px' }}>
              <img style={{ width: '23px', marginRight: '5px',marginTop:'20px' }} 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png" />
              <Link to="/rate">
              <h5 style={{ color: 'black', margin: '0',marginTop:'20px',cursor:'pointer' }}>7.2/10 --></h5>
              </Link>
            </div>
            <div>
            <h5 className="border" style={{ color: 'blue', padding: '10px', border: '30px', marginTop: '20px', display: 'flex', justifyContent: 'center',marginTop:'20px' }}>Add your ratings & reviews <button style={{ backgroundColor: 'yellow', cursor: 'pointer' }}>Rate now</button></h5>
          </div>
          <div>
            <button style={{ marginTop: '20px', backgroundColor: 'blueviolet', color: 'white',marginTop:'20px' }}>2D</button>
            <button style={{ marginTop: '20px', backgroundColor: 'blueviolet', color: 'white',marginTop:'30px' }}>Tamil</button>
          </div>
            <Button style={{ backgroundColor: 'red', marginTop: '20px' ,marginTop:'20px',width:'130px',height:'40px'}} variant="primary">
              Book Tickets
            </Button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default FightClub;

