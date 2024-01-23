import React from 'react'
import { Carousel } from 'react-bootstrap';

function Slide_Stream() {
  const  fixedHeight=500;
  const fixedWidth=400;
  return (
    <Carousel>
      <Carousel.Item>
        <div style={{ display: 'flex', justifyContent: 'space-between',backgroundColor:'black',color:"white"}}>
          <img style={{cursor:'pointer'}}
           width={fixedWidth}
           height={fixedHeight}
            src ="https://assets-in.bmscdn.com/discovery-catalog/events/et00374217-plzkvswzup-portrait.jpg"
            alt="First slide"
          />
          <div style={{ width: '50%', padding: '1rem' }}>
            <button style={{backgroundColor:"blue",color:'white',marginTop:"50px",borderRadius:"20px"}}>PREMIERS STREAMING NOW</button>
            <p>Brand new releases...</p>
            <h1 style={{marginTop:"30px",color:'wheat',cursor:'pointer'}}>Naal Part2</h1>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>2h 10m . Drama,Family . U </h4>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>Marathi</h4>
            <p style={{marginTop:"30px",cursor:'pointer'}}>Naal2:Explores the depth of human connects,the....</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ display: 'flex', justifyContent: 'space-between',backgroundColor:'black',color:"white" }}>
          <img style={{cursor:'pointer'}}
             width={fixedWidth}
             height={fixedHeight}
            src="https://assets-in.bmscdn.com/discovery-catalog/events/et00363189-debbthrqxw-portrait.jpg"
            alt="Second slide"
          />
          <div style={{ width: '50%', padding: '1rem' }}>
          <button style={{backgroundColor:"blue",color:'white',marginTop:"50px",borderRadius:"20px"}}>PREMIERS STREAMING NOW</button>
            <p>Brand new releases...</p>
            <h1 style={{marginTop:"30px",color:'wheat',cursor:'pointer'}}>Trolls Band...</h1>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>1h 32m . Animation,Fantasy,Comedy . U </h4>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>English</h4>
            <p style={{marginTop:"30px",cursor:'pointer'}}>Poppy discovers the branch and his four brothers were once...</p> 
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ display: 'flex', justifyContent: 'space-between',backgroundColor:'black',color:"white" }}>
          <img style={{cursor:'pointer'}}
            width={fixedWidth}
            height={fixedHeight}
            src="https://assets-in.bmscdn.com/discovery-catalog/events/et00367969-fjskyyxtvx-portrait.jpg"
            alt="Third slide"
          />
          <div style={{ width: '50%', padding: '1rem' }}>
          <button style={{backgroundColor:"blue",color:'white',marginTop:"50px",borderRadius:"20px"}}>PREMIERS STREAMING NOW</button>
            <p>Brand new releases...</p>
            <h1 style={{marginTop:"30px",color:'wheat',cursor:'pointer'}}>The Marsh...</h1>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>1h 48m . Crime,Drama,Thriller . 18+ </h4>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>English</h4>
            <p style={{marginTop:"30px",cursor:'pointer'}}>The story follows Helena,a women living a seeming...</p> 
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ display: 'flex', justifyContent: 'space-between',backgroundColor:'black',color:"white" }}>
          <img style={{cursor:'pointer'}}
           width={fixedWidth}
           height={fixedHeight}
            src="https://assets-in.bmscdn.com/discovery-catalog/events/et00375311-gtuufkfefz-portrait.jpg"
            alt="fourth slide"
          />
          <div style={{ width: '50%', padding: '1rem' }}>
          <button style={{backgroundColor:"blue",color:'white',marginTop:"50px",borderRadius:"20px"}}>PREMIERS STREAMING NOW</button>
            <p>Brand new releases...</p>
            <h1 style={{marginTop:"30px",color:'wheat',cursor:'pointer'}}>Swathi Mutth...</h1>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>1h 42m . Drama,Romantic . U </h4>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>Kannada</h4>
            <p style={{marginTop:"30px",cursor:'pointer'}}>Prerana,a counsellor in a hospice,develop...</p> 
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ display: 'flex', justifyContent: 'space-between',backgroundColor:'black',color:"white" }}>
          <img style={{cursor:'pointer'}}
               width={fixedWidth}
               height={fixedHeight}
            src="https://assets-in.bmscdn.com/discovery-catalog/events/et00347867-brpyyxeyrs-portrait.jpg"
            alt="fifth slide"
          />
          <div style={{ width: '50%', padding: '1rem' }}>
          <button style={{backgroundColor:"blue",color:'white',marginTop:"50px",borderRadius:"20px"}}>PREMIERS STREAMING NOW</button>
            <p>Brand new releases...</p>
            <h1 style={{marginTop:"30px",color:'wheat',cursor:'pointer'}}>Oppenheimer</h1>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>3h 10m . Biography,Drama,Historical . UA </h4>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>English</h4>
            <p style={{marginTop:"30px",cursor:'pointer'}}>The film is based on the Pulitzer Prize-winning book American Prometheus.</p> 
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ display: 'flex', justifyContent: 'space-between',backgroundColor:'black',color:"white" }}>
          <img style={{cursor:'pointer'}}
               width={fixedWidth}
               height={fixedHeight}
            src="https://assets-in.bmscdn.com/discovery-catalog/events/et00381624-ptmqrsustn-portrait.jpg"
            alt="sixth slide"
          />
          <div style={{ width: '50%', padding: '1rem' }}>
          <button style={{backgroundColor:"blue",color:'white',marginTop:"50px",borderRadius:"20px"}}>PREMIERS STREAMING NOW</button>
            <p>Brand new releases...</p>
            <h1 style={{marginTop:"30px",color:'wheat',cursor:'pointer'}}>Warhorse One</h1>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>2h 6m . Biography,Drama,Historical . UA </h4>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>English</h4>
            <p style={{marginTop:"30px",cursor:'pointer'}}>A gunned down Navy SEAL Master Chief must guide...</p> 
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ display: 'flex', justifyContent: 'space-between',backgroundColor:'black',color:"white" }}>
          <img style={{cursor:'pointer'}}
              width={fixedWidth}
              height={fixedHeight}
            src="https://assets-in.bmscdn.com/discovery-catalog/events/et00381602-sdyfepkfpc-portrait.jpg"
            alt="seventh slide"
          />
          <div style={{ width: '50%', padding: '1rem' }}>
          <button style={{backgroundColor:"blue",color:'white',marginTop:"50px",borderRadius:"20px"}}>PREMIERS STREAMING NOW</button>
            <p>Brand new releases...</p>
            <h1 style={{marginTop:"30px",color:'wheat',cursor:'pointer'}}>A Savan....</h1>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>1h 45m . Crime,Thriller . A </h4>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>English</h4>
            <p style={{marginTop:"30px",cursor:'pointer'}}>After losing their daughter to drowning, the family relocates to Savannah...</p> 
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ display: 'flex', justifyContent: 'space-between',backgroundColor:'black',color:"white" }}>
          <img style={{cursor:'pointer'}}
               width={fixedWidth}
               height={fixedHeight}
            src="https://assets-in.bmscdn.com/discovery-catalog/events/et00382214-pykxwmgbcm-portrait.jpg"
            alt="eighth slide"
          />
          <div style={{ width: '50%', padding: '1rem' }}>
          <button style={{backgroundColor:"blue",color:'white',marginTop:"50px",borderRadius:"20px"}}>PREMIERS STREAMING NOW</button>
            <p>Brand new releases...</p>
            <h1 style={{marginTop:"30px",color:'wheat',cursor:'pointer'}}>Shrimoti ...</h1>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>1h . Romantic . U</h4>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>English</h4>
            <p style={{marginTop:"30px",cursor:'pointer'}}>A man is smitten by his colleague, and gets nervous ...</p> 
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ display: 'flex', justifyContent: 'space-between',backgroundColor:'black',color:"white" }}>
          <img style={{cursor:'pointer'}}
               width={fixedWidth}
               height={fixedHeight}
            src="https://assets-in.bmscdn.com/discovery-catalog/events/et00365290-czzdsnuclc-portrait.jpg"
            alt="nineth slide"
          />
          <div style={{ width: '50%', padding: '1rem' }}>
          <button style={{backgroundColor:"blue",color:'white',marginTop:"50px",borderRadius:"20px"}}>PREMIERS STREAMING NOW</button>
            <p>Brand new releases...</p>
            <h1 style={{marginTop:"30px",color:'wheat',cursor:'pointer'}}>Killers of the...</h1>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>3h 26m . Crime,Drama,Historical . A </h4>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>English</h4>
            <p style={{marginTop:"30px",cursor:'pointer'}}>Based on a true story and told through the improbable romance of Ernest Burkhart...</p> 
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ display: 'flex', justifyContent: 'space-between',backgroundColor:'black',color:"white" }}>
          <img style={{cursor:'pointer'}}
              width={fixedWidth}
              height={fixedHeight}
            src="https://assets-in.bmscdn.com/discovery-catalog/events/et00381434-cphdeqwdfn-portrait.jpg"
            alt="tenth slide"
          />
          <div style={{ width: '50%', padding: '1rem' }}>
          <button style={{backgroundColor:"blue",color:'white',marginTop:"50px",borderRadius:"20px"}}>PREMIERS STREAMING NOW</button>
            <p>Brand new releases...</p>
            <h1 style={{marginTop:"30px",color:'wheat',cursor:'pointer'}}>Tasher Ghawr</h1>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>47m . Drama . 16+ </h4>
            <h4 style={{marginTop:"30px",cursor:'pointer'}}>English</h4>
            <p style={{marginTop:"30px",cursor:'pointer'}}>Sujata, a housewife, is stuck between the four walls with her abusive husband ...</p> 
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  )       
}
export default Slide_Stream