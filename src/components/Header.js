import headerStyle from '../resources/css/components/Header.module.css';
import darkMode from '../resources/css/components/DarkMode.module.css';
import swtichWhiteImg from '../resources/images/switch_white.png';
import swtichDarkImg from '../resources/images/switch_dark.png';

import { useState } from 'react';
import React, { useEffect } from 'react';

function Header() {
  
  const onClickHomeHandler = () => {
    window.location.href = "/home";
  }

  const onClickAboutHandler = () => {
    window.location.href = "/about";
  }

  const onClickSkillsHandler = () => {
    window.location.href = "/skills";
  }

  const onClickProjectHandler = () => {
    window.location.href = "/project";
  }
  
  const onClickcontactHandler = () => {
    window.location.href = "/contact";
  }

  return (
    <header>
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
    </header>
  );
}

export default Header;