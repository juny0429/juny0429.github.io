import mainStyle from '../resources/css/Main.module.css';
import mainImage from '../resources/images/black_and_white_pjy.jpg';

import { useState } from 'react';
import React, { useEffect } from 'react';

function Main() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showImage, setShowImage] = useState(false);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setShowImage(true);
    img.src = mainImage;
  }, []);

  console.log('mousePosition.x', mousePosition.x);

  const imageStyle = {
    position: 'relative',
    top: mousePosition.y - 150,
    left: mousePosition.x - 150,
    borderRadius: '50%',
    width: '300px',
    height: '300px',
    zIndex: 99999,
    backgroundImage: `url(${mainImage})`,
    backgroundPosition: `${mousePosition.x + 200}px ${-(mousePosition.y - window.innerHeight - 300)}px`,
    backgroundSize: '1200%',
    opacity: showImage ? 1 : 0,
    transform: 'scaleX(-1)',
    filter: 'blur(1px)',
    cursor: 'none'
  };

  const onClickHandler = () => {
    window.location.href = "/home";
  }

  return (
    <div className={mainStyle.mainDiv}>
      <div className={mainStyle.mainText}>WHO ARE YOU?</div>
      <div style={imageStyle} onClick={onClickHandler}></div>
    </div>
  );
}

export default Main;
