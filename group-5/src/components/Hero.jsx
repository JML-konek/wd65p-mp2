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
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/20"></div>
    </div>
  );
}

export default Hero;
