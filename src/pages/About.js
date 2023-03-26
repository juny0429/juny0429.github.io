import aboutStyle from '../resources/css/pages/About.module.css';

import React, { useState } from 'react';

function About() {

    return (
        <div className={aboutStyle.container}>
            <div className={aboutStyle.triangle}>
                
            <div className={aboutStyle.square2}></div>
            </div>
        </div>
    );
}

export default About;