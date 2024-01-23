import React from 'react';
import Navbar_Comp from './Navbar_Comp';

function ConjurinVideo() {
  return (
    <div>
        <div>
            <Navbar_Comp />
        </div>
        <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '56.25%', 
          marginTop: '50px',
        }}
      >
      <iframe 
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',

      }}
      width="1000"
      height="500"
        src="https://www.youtube.com/embed/QoExzHQMUdA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    </div>
  );
}

export default ConjurinVideo;
