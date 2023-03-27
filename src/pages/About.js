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
        {/* <div className={aboutStyle.aboutMain} onMouseMove={getMousePosition}> */}
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
                {/* <div className={aboutStyle.pjyImg}>
                    <img
                        className={junyoungImgChange ? aboutStyle.hideImg : aboutStyle.showImg}
                        src={junyoungImg}
                        alt="박준영 사진"
                    />
                    <img
                        className={junyoungImgChange ? aboutStyle.showImg : aboutStyle.hideImg}
                        src={junyoung2Img}
                        alt="박준영 사진2"
                    />
                </div> */}
                <div className={aboutStyle.aboutContantMain}>
                    <div className={aboutStyle.aboutContantTitle}>
                        <p className={aboutStyle.aboutContantText}>좋은 개발자로서의 가치는 </p>
                        <span className={aboutStyle.aboutContantTextLine2}>경험하고,</span>
                        <span className={aboutStyle.aboutContantTextLine2}>학습하고,</span>
                        <span className={aboutStyle.aboutContantTextLine2}>공유 하는 것,</span>
                    </div>
                    <div className={aboutStyle.aboutBottomText}>
                        <p>개발자란 함께 협력하며 지식을 공유하고 발전시키는 것이 중요하다고 생각합니다.</p>
                        <p>프로젝트 진행 과정을 통해 커뮤니케이션 능력을 기르고,</p>
                        <p>적극적인 자세로 문제를 해결하며 발전을 위해 노력하고 있습니다. </p>
                        <p>모든 사람들에게 함께 일하는 즐거움을 느낄 수 있는 사람으로 기억되고 싶습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;