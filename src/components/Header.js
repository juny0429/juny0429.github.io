import headerStyle from '../resources/css/components/Header.module.css';

import { useState } from 'react';
import React, { useEffect } from 'react';

function Header() {
  
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