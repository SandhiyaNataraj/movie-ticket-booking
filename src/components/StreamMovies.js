import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        padding: "10px",
        right: "-30px",
        backgroundColor:"black",
        width:'2px' 
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        padding: "10px",
        left: "-30px",
        backgroundColor:"black",
      
      
      }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
        
        <div
        style={{
          backgroundColor: "white", 
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >  
  <div className="container" >
        <h5 style={{color:'black',fontFamily:"sans-serif",fontSize:'30px',padding:"20px",fontWeight:"bold"}}>Premiere of the week</h5>
        <Slider {...settings}>
        <div>
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00382452-yyptlxachz-portrait.jpg" 
            alt=""
            style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00344973-btmqfufhhe-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div >

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00381602-sdyfepkfpc-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00364208-cemcdqklmw-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px' ,padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00375311-rgcnfkqvee-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00381624-ptmqrsustn-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00381630-hnwveuxmnc-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div style={{ margin: '0 10px' }}>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00367969-fjskyyxtvx-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00382214-pykxwmgbcm-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>
        </Slider>
      </div>
      <div className="container" >
        <h5 style={{color:'black',fontFamily:"sans-serif",fontSize:'30px',margin:"20px",padding:"20px",fontWeight:"bold"}}>Upcoming Movies</h5>
        <Slider {...settings}>
        <div>
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00309843-sgkenmrrqv-portrait.jpg" 
            alt=""
            style={{ width: "100%" ,borderRadius:'25px',padding:'15px',marginLeft:"15px",cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00354408-jaduugjmvy-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px',marginLeft:"15px",cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00374116-ecjevxszsm-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px',padding:'15px',marginLeft:"15px",cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00101440-sdfpadyedr-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px' ,padding:'15px',marginLeft:"15px",cursor:'pointer'}}/>
          </div>
          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00354922-jpesqtyszp-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px' ,padding:'15px',marginLeft:"15px",cursor:'pointer'}}/>
          </div>
          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00339436-bwvubbthga-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px' ,padding:'15px',marginLeft:"15px",cursor:'pointer'}}/>
          </div>
         </Slider>
      </div>
      <div className="container" >
        <h5 style={{color:'black',fontFamily:"sans-serif",fontSize:'30px',padding:"20px",fontWeight:"bold"}}>Top 10 TV Shows</h5>
        <Slider {...settings}>
        <div>
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00369688-syperxgkny-portrait.jpg" 
            alt=""
            style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@tv_series_v1.png,t-false,lfo-bottom_left,l-end/et00352909-mnezygkdan-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div >

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@tv_series_v1.png,t-false,lfo-bottom_left,l-end/et00337392-svlaatfdnc-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@tv_series_v1.png,t-false,lfo-bottom_left,l-end/et00358731-sautlxevza-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px' ,padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00357433-yetnfnwgyz-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@tv_series_v1.png,t-false,lfo-bottom_left,l-end/et00357030-daukwmnglv-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00353254-swqrbguruf-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div style={{ margin: '0 10px' }}>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00370924-bzsantkjda-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@tv_series_v1.png,t-false,lfo-bottom_left,l-end/et00358815-baexawdywd-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>
        </Slider>
      </div>
      <div className="container" >
        <h5 style={{color:'black',fontFamily:"sans-serif",fontSize:'30px',padding:"20px",fontWeight:"bold"}}>Monthly offer</h5>
        <Slider {...settings}>
        <div>
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00377441-bxledzvnvu-portrait.jpg" 
            alt=""
            style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00370579-bggexnpmmy-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div >

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00341470-sfhrnabklk-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00038182-wsyhcmranj-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px' ,padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00059052-tycxtfndyy-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00145296-xdfrtmsuqk-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00336937-kmvhtzklxl-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>
        </Slider>
      </div>
      <div className="container" >
        <h5 style={{color:'black',fontFamily:"sans-serif",fontSize:'30px',padding:"20px",fontWeight:"bold"}}>Top 10 TV Shows</h5>
        <Slider {...settings}>
        <div>
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00369688-syperxgkny-portrait.jpg" 
            alt=""
            style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@tv_series_v1.png,t-false,lfo-bottom_left,l-end/et00352909-mnezygkdan-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div >

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@tv_series_v1.png,t-false,lfo-bottom_left,l-end/et00337392-svlaatfdnc-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@tv_series_v1.png,t-false,lfo-bottom_left,l-end/et00358731-sautlxevza-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px' ,padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00357433-yetnfnwgyz-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@tv_series_v1.png,t-false,lfo-bottom_left,l-end/et00357030-daukwmnglv-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00353254-swqrbguruf-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div style={{ margin: '0 10px' }}>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00370924-bzsantkjda-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@tv_series_v1.png,t-false,lfo-bottom_left,l-end/et00358815-baexawdywd-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>
        </Slider>
      </div>
      <div className="container" >
        <h5 style={{color:'black',fontFamily:"sans-serif",fontSize:'30px',padding:"20px",fontWeight:"bold"}}>Free Movies for you</h5>
        <Slider {...settings}>
        <div>
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00313053-fttswgxmxu-portrait.jpg" 
            alt=""
            style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00329481-lhspkduspp-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div >

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00303783-vbkrtvudkm-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:/et00304008-rlkpexgyzm-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px' ,padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00300014-kysapsbjeh-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00350287-xryswtajyr-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:/et00300013-azpsyycyen-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>
          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00319244-hkrulzqzsb-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00350283-dcwufttjkx-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00342357-blsszwwdwb-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>
        </Slider>
      </div>
      <div className="container"  >
      
        <h5 style={{color:'black',fontFamily:"sans-serif",fontSize:'30px',padding:"20px",fontWeight:"bold"}}>Exclusive Movies</h5>
        <Slider {...settings}>
        <div>
            <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00378647-neheguljpa-portrait.jpg" 
            alt=""
            style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00357476-nfylcvwhny-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div >

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00365937-fjadqbrgsv-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00375433-puqjmcqckm-portrait.jpg" 
          alt=""
          style={{ width: "100%",borderRadius:'25px' ,padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00302706-cdmpfcqwtq-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00114135-rhfaktnaxh-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00300014-kysapsbjeh-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>
          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00373981-zylszguepv-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00350287-xryswtajyr-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>

          <div>
          <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00145296-xdfrtmsuqk-portrait.jpg" 
          alt=""
          style={{ width: "100%" ,borderRadius:'25px',padding:'15px', margin: '0 5px',cursor:'pointer'}}/>
          </div>
        </Slider>

      </div>
      </div>
    
    );
  }
}