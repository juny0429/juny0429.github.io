import homeStyle from '../resources/css/pages/Home.module.css';
import headerStyle from '../resources/css/components/Header.module.css';
import darkMode from '../resources/css/components/DarkMode.module.css';

import swtichWhiteImg from '../resources/images/switch_white.png';
import swtichDarkOffImg from '../resources/images/switch_dark_off.png';
import swtichDarkOnImg from '../resources/images/switch_dark_on.png';
import light from '../resources/images/light.png';
import brokenLight from '../resources/images/brokenLight.png';

import { useState } from 'react';
import React, { useEffect } from 'react';

function Home() {

    /* 다크모드 */
    const [darkModeClass, setDarkModeClass] = useState(0);
    const [bulbBroken, setBulbBroken] = useState(0);

    const handleToggleDarkMode = () => {
        if(bulbBroken === 0) {
            setDarkModeClass(darkModeClass === 0 ? 1 : 0);
        }
    };

    const bulbBrokenhandler = () => {
        if(bulbBroken === 0) {
            setDarkModeClass(darkModeClass === 0 ? 1 : 0);
            setBulbBroken(1);
        }
    }

    /* 바운스 글자 */
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

    /* 바운스 글자 배열에 담기 */
    const textArrayTop = ['P','J','Y'];
    const textArrayBottom = ['P','O','R','T','F','O','L','I','O'];

    /* 화면 이동 핸들러 */
    const onClickHomeHandler = () => {
        window.location.href = "/pjy-portfolio/home";
    }

    const onClickAboutHandler = () => {
        window.location.href = "/pjy-portfolio/about";
    }

    const onClickSkillsHandler = () => {
        window.location.href = "/pjy-portfolio/skills";
    }
    
    const onClickProjectHandler = () => {
        window.location.href = "/pjy-portfolio/project";
    }

    const onClickcontactHandler = () => {
        window.location.href = "/pjy-portfolio/contact";
    }

    return (
        <div className={`${(darkModeClass === 0) ? darkMode.darkMode : darkMode.whiteMode}`}>
    
            <div className={headerStyle.bulbImgDiv}>
                <img 
                    className={headerStyle.bulbImg} 
                    onClick={bulbBrokenhandler} 
                    src={(darkModeClass === 0 && bulbBroken === 1) ? brokenLight : ((darkModeClass === 1 && bulbBroken === 0) ? light : "")} 
                />
            </div>

            <div className={headerStyle.switchImgDiv}>
                <img 
                    className={headerStyle.switchImg} 
                    onClick={handleToggleDarkMode} 
                    src={(darkModeClass === 0 && bulbBroken === 0) ? swtichDarkOffImg :((darkModeClass === 0 && bulbBroken === 1) ? swtichDarkOnImg : swtichWhiteImg)} 
                    alt="스위치 이미지"
                />
            </div>

            <div className={headerStyle.navMain}>
                <div className={headerStyle.navBlock}>
                    <span className={headerStyle.navText} onClick={onClickHomeHandler}>Home</span>
                    <div className={headerStyle.underLine}></div>
                </div>
                <div className={headerStyle.navBlock}>
                    <span className={headerStyle.navText}  onClick={onClickAboutHandler}>About</span>
                    <div className={headerStyle.underLine}></div>
                </div>
                <div className={headerStyle.navBlock}>
                    <span className={headerStyle.navText}  onClick={onClickSkillsHandler}>Skills</span>
                    <div className={headerStyle.underLine}></div>
                </div>
                <div className={headerStyle.navBlock}>
                    <span className={headerStyle.navText}  onClick={onClickProjectHandler}>Project</span>
                    <div className={headerStyle.underLine}></div>
                </div>
                <div className={headerStyle.navBlock}>
                    <span className={headerStyle.navText}  onClick={onClickcontactHandler}>Contact</span>
                    <div className={headerStyle.underLine}></div>
                </div>
            </div>

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
        </div>
    );
}

export default Home;