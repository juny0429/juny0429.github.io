import aboutStyle from '../resources/css/pages/About.module.css';
import junyoungImg from '../resources/images/junyoung.jpg';
import junyoung2Img from '../resources/images/junyoung2.jpg';

import React, { useState } from 'react';

function About() {

    const [junyoungImgChange, setJunyoungImgChnage] = useState(false);

    const ImgChangeEnterHandler = () => {
        setJunyoungImgChnage(true);
    };

    const ImgChangeLeaveHandler = () => {
        setJunyoungImgChnage(false);
    }

    // const getMousePosition = (e) => {
    //     const { top, bottom } = e.target.getBoundingClientRect();
    //     const middle = (top + bottom) / 2;
    //     if (e.clientY < middle) {
    //         setJunyoungImgChnage(false);
    //     } else {
    //         setJunyoungImgChnage(true);
    //     }
    //   };

    return (
        <div className={aboutStyle.aboutMain}>
            <div className={aboutStyle.aboutContant}>
                <div className={aboutStyle.pjyImg}>
                    <img
                        className={junyoungImgChange ? aboutStyle.hideImg : aboutStyle.showImg} 
                        onMouseEnter={ImgChangeEnterHandler}
                        onMouseLeave={ImgChangeLeaveHandler}
                        src={junyoungImg} 
                        alt="박준영 사진"
                    />
                    <img 
                        className={junyoungImgChange ? aboutStyle.showImg : aboutStyle.hideImg}
                        onMouseEnter={ImgChangeEnterHandler}
                        onMouseLeave={ImgChangeLeaveHandler}
                        src={junyoung2Img} 
                        alt="박준영 사진2"
                    />
                </div>
                <div className={aboutStyle.aboutContantMain}>
                    <div className={aboutStyle.aboutContantTitle}>
                        <p className={aboutStyle.aboutContantName}>박준영</p>
                        <p className={aboutStyle.aboutContantfield}>Front-End Developer</p>
                    </div>

                    <div className={aboutStyle.aboutContantMBTI}>
                        <span>뭐든지 분석하는 습관</span>
                        <span>준비가 철저함</span>
                        <span>효율과 사랑에 빠짐</span>
                        <span>자기애가 강함</span>
                    </div>
                        
                    <div className={aboutStyle.aboutContantMBTI}>
                        <span>시야가 넓음</span>
                        <span>리더십 있음</span>
                        <span>공사구분 철저함</span>
                        <span>한다면 무조건함</span>
                        <span>사교적인</span>
                    </div>

                    <div className={aboutStyle.aboutBottomText}>
                        <p>"잠은 죽어서 자자!"라는 좌우명으로</p>
                        <p>노션과 벨로그를 운영하며 매일 성장하려고 노력하고 있습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;