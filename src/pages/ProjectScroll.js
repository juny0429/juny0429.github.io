import scrollStyle from '../resources/css/pages/ProjectScroll.module.css';
import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';

import peopleIcon from '../resources/images/icon/people_icon_black.png';
import peoplesIcon from '../resources/images/icon/peoples_icon_black.png';
import playIcon from '../resources/images/icon/play_icon_black.png';
import studyIcon from '../resources/images/icon/study_icon_black.png';
import homeIcon from '../resources/images/icon/home_icon_black.png';

import semiProjectImg from '../resources/images/project_img/semi_project.png';
import finalProjectImg from '../resources/images/project_img/final_project.png';
import protfolioImg from '../resources/images/project_img/protfolio.png';

function ProjectScroll() {

    /* 아이콘 사이즈 변경 */
    const [iconSize, setIconSize] = useState([]);

    const iconSizeEnterHandler = (index) => {
        setIconSize(prevState => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        });
    };

    const iconSizeLeaveHandler = (index) => {
        setIconSize(prevState => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
    };

    /* 아이콘 클릭 이동 핸들러 */
    const homeLinkHandler = () => {
        window.location.href = "/pjy-portfolio/project";
    }

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
        <div>
            <div className={scrollStyle.scrollContent}>
                <div className={scrollStyle.scrollImgBox}>
                    <img
                        className={iconSize[0] ? scrollStyle.projectIconSizeUp : ''} 
                        src={homeIcon} 
                        alt="홈 아이콘"
                        onClick={homeLinkHandler}
                        onMouseEnter={() => iconSizeEnterHandler(0)}
                        onMouseLeave={() => iconSizeLeaveHandler(0)}
                    />
                    <img
                        className={iconSize[1] ? scrollStyle.projectIconSizeUp : ''} 
                        src={peopleIcon} 
                        alt="개인 프로젝트 아이콘"
                        onMouseEnter={() => iconSizeEnterHandler(1)}
                        onMouseLeave={() => iconSizeLeaveHandler(1)}
                    />
                    <img 
                        className={iconSize[2] ? scrollStyle.projectIconSizeUp : ''}
                        src={peoplesIcon} 
                        alt="팀 프로젝트 아이콘"
                        onMouseEnter={() => iconSizeEnterHandler(2)}
                        onMouseLeave={() => iconSizeLeaveHandler(2)}
                    />
                    <img 
                        className={iconSize[3] ? scrollStyle.projectIconSizeUp : ''}
                        src={playIcon} 
                        alt="게임 아이콘"
                        onMouseEnter={() => iconSizeEnterHandler(3)}
                        onMouseLeave={() => iconSizeLeaveHandler(3)}    
                    />
                    <img 
                        className={iconSize[4] ? scrollStyle.projectIconSizeUp : ''}
                        src={studyIcon} 
                        alt="스터디 아이콘"
                        onMouseEnter={() => iconSizeEnterHandler(4)}
                        onMouseLeave={() => iconSizeLeaveHandler(4)}
                    />
                </div>
                <div className={scrollStyle.teamProjectMain}>
                    {/* <div className={scrollStyle.teamProjectTitle} style={{transform: `translateX(${scrollPosition}px)`}}>
                        <img
                            className={scrollStyle.projectIconBig}
                            src={peoplesIcon} 
                            alt="팀 프로젝트 아이콘"
                        />
                        <span>Team Project</span>
                    </div> */}
                    <div className={scrollStyle.teamProjectDiv} style={{transform: `translateX(-${scrollPosition}px)`}}>
                        <div className={scrollStyle.teamProjectContentBox}>
                            <p className={scrollStyle.projectTitle}>the titan</p>
                            <img 
                                className={scrollStyle.teamProjectImg}
                                src={finalProjectImg}  
                                alt="프로젝트 이미지"
                            />
                        </div>
                        <div className={scrollStyle.teamProjectContentBox}>
                            <img 
                                className={scrollStyle.teamProjectImg}
                                src={semiProjectImg}
                                alt="프로젝트 이미지"
                            />
                        </div>
                    </div>
                </div>
                <div style={{ height: '1500vh' }}></div>

                
                {/* <div style={{ position: 'fixed', top: 0 }}>
                    <div style={{ display:"flex", transform:  `translateX(-${scrollPosition}px)`}}>
                        <img style={{ width : "1000px" }} src={image1}/>
                        <img style={{ width : "1000px" }} src={image1}/>
                        <img style={{ width : "1000px" }} src={image1}/>
                        <img style={{ width : "1000px" }} src={image1}/>
                    </div>
                </div>
                <div style={{ height: '4000px' }}></div> */}

                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
            </div>
        </div>
    );
}

export default ProjectScroll;
