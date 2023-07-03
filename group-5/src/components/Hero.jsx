import React from 'react';
import backGround from './img/video-2.mp4';

function Hero() {
  return (
    <div className="max-w-full h-screen relative">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
        src={backGround}
      ></video>
    </div>
  );
}

export default Hero;
