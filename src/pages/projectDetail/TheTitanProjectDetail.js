import theTitanStyle from '../../resources/css/pages/projectDetail/TheTitan.module.css';
import { useState, useEffect } from 'react';

import semiProjectImg from '../../resources/images/project_img/semi_project.png';
import finalProjectImg from '../../resources/images/project_img/final_project.png';
import protfolioImg from '../../resources/images/project_img/protfolio.png';

import theTitanMainGif from '../../resources/images/gif/the_titan/the_titan_main.gif';

function TheTitanProject() {

     /* 스클로 인터렉션 */
     const [scrollPosition, setScrollPosition] = useState(0);

     const handleScroll = () => {
         const position = window.pageYOffset;
         setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={theTitanStyle.theTitanMain}>
            <div className={theTitanStyle.theTitanContant}>
                <div className={theTitanStyle.teamProjectMain}>
                    <div 
                        className={theTitanStyle.projectDetailTitle} 
                        style={(scrollPosition < 400) ? {transform: `translateY(${scrollPosition}px)`} : {transform: `translateY(400px)`}}
                    >
                        <span>The Titan(인사 관리 그룹웨어):{scrollPosition}</span>
                    </div>
                    <div 
                        className={theTitanStyle.theTitanGif} 
                        style={(scrollPosition <= 2775) ? {transform: `translateX(-${scrollPosition}px)`} : {transform: `translateX(-2775px)`}}
                    >
                        <img src={theTitanMainGif} alt="the titan 캡처"/>
                    </div>
                    <div 
                        className={theTitanStyle.theTitanBox}
                        // style={(scrollPosition <= 2900) ? {transform: `translateX(-${scrollPosition}px)`} : {transform: `translateX(-2900px)`}}
                    >
                        <h1>sdfdsfdsfsdfsfsdfdsfsfsfdsfdfsdfsfsdfsadfsfsfdsfadsfsdmhfsjkgfskfh</h1>
                        <span>설명글이 촤자자자작</span>
                        <span>설명글이 촤자자자작</span>
                        <span>설명글이 촤자자자작</span>
                        <span>설명글이 촤자자자작</span>
                        <span>설명글이 촤자자자작</span>
                        <span>설명글이 촤자자자작</span>
                    </div>




                    <div className={theTitanStyle.teamProjectDiv} style={{transform: `translateX(-${scrollPosition}px)`}}>
                        <div className={theTitanStyle.teamProjectContentBox}>
                            <p className={theTitanStyle.projectTitle}>the titan</p>
                            <img 
                                className={theTitanStyle.teamProjectImg}
                                src={finalProjectImg}  
                                alt="프로젝트 이미지"
                            />
                        </div>
                        <div className={theTitanStyle.teamProjectContentBox}>
                            <img 
                                className={theTitanStyle.teamProjectImg}
                                src={semiProjectImg}
                                alt="프로젝트 이미지"
                            />
                        </div>
                    </div>
                </div>
                <div style={{ height: '1500vh' }}></div>
            </div>
        </div>
    );
}

export default TheTitanProject;