import homeStyle from '../resources/css/pages/Home.module.css';
import { useState } from 'react';
import React, { useEffect } from 'react';

function Home() {

    const [isTextTop, setIsTextTop] = useState(Array(3).fill(false));
    const [isTextBottom, setIsTextBottom] = useState(Array(9).fill(false));

    const handleMouseEnter = (index) => {
        setIsTextTop((prevState) => {
          const newState = [...prevState];
          newState[index] = true;
          return newState;
        });
      };
      
    const handleMouseLeave = (index) => {
    setTimeout(() => {
        setIsTextTop((prevState) => {
        const newState = [...prevState];
        newState[index] = false;
        return newState;
        });
    }, 1000);
    };

    const handleMouseEnter2 = (index) => {
        setIsTextBottom((prevState) => {
          const newState = [...prevState];
          newState[index] = true;
          return newState;
        });
      };
      
    const handleMouseLeave2 = (index) => {
    setTimeout(() => {
        setIsTextBottom((prevState) => {
        const newState = [...prevState];
        newState[index] = false;
        return newState;
        });
    }, 1000);
    };

    const textArrayTop = ['P','J','Y'];
    const textArrayBottom = ['P','O','R','T','F','O','L','I','O'];

    return (
        <div className={homeStyle.homeMain}>
            <div className={homeStyle.homeBody}>
                <div className={homeStyle.homePOFOText}>
                    <div>
                        {textArrayTop.map((text, index) => (
                        <span
                            key={index}
                            className={`${homeStyle.homePOFOTextSpan} ${
                            isTextTop[index] ? homeStyle.bounce : ""
                            }`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            {text}
                        </span>
                        ))}
                    </div>
                    <div>
                        {textArrayBottom.map((text, index) => (
                        <span
                            key={index}
                            className={`${homeStyle.homePOFOTextSpan} ${
                            isTextBottom[index] ? homeStyle.bounce : ""
                            }`}
                            onMouseEnter={() => handleMouseEnter2(index)}
                            onMouseLeave={() => handleMouseLeave2(index)}
                        >
                            {text}
                        </span>
                        ))}
                    </div>
                </div>
                <div className={homeStyle.homeMiddleText}>반갑습니다! 좋은 개발자를 꿈꾸고 있는 '박준영'입니다.</div>
            </div>
        </div>
    );
}

export default Home;