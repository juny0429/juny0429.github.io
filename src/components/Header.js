import headerStyle from '../resources/css/components/Header.module.css';
import swtichWhiteImg from '../resources/images/switch_black.png';

import { useState } from 'react';
import React, { useEffect } from 'react';

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const handleToggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  
    return (
      <header className={`${isDarkMode ? headerStyle.darkMode : headerStyle.whiteMode}`}>
        <div className={headerStyle.switchImgDiv}>
        {isDarkMode ? 'Light mode' : 'Dark mode'}
          <img className={headerStyle.switchImg} onClick={handleToggleDarkMode} src={swtichWhiteImg} alt="스위치 이미지"/>
        </div>
  
        <div className={headerStyle.navMain}>
          <div className={headerStyle.navBlock}>
            <span className={headerStyle.navText}>Home</span>
            <div className={headerStyle.underLine}></div>
          </div>
          <div className={headerStyle.navBlock}>
            <span className={headerStyle.navText}>About</span>
            <div className={headerStyle.underLine}></div>
          </div>
          <div className={headerStyle.navBlock}>
            <span className={headerStyle.navText}>Skills</span>
            <div className={headerStyle.underLine}></div>
          </div>
          <div className={headerStyle.navBlock}>
            <span className={headerStyle.navText}>Project</span>
            <div className={headerStyle.underLine}></div>
          </div>
          <div className={headerStyle.navBlock}>
            <span className={headerStyle.navText}>Contact</span>
            <div className={headerStyle.underLine}></div>
          </div>
        </div>
      </header>
    );
}

export default Header;