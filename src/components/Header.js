import headerStyle from '../resources/css/components/Header.module.css';
import darkMode from '../resources/css/components/DarkMode.module.css';
import swtichWhiteImg from '../resources/images/switch_white.png';
import swtichDarkImg from '../resources/images/switch_dark.png';

import { useState } from 'react';
import React, { useEffect } from 'react';

function Header() {
  
  return (
    <header>
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