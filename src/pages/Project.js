import projectStyle from '../resources/css/pages/Project.module.css';
import React, { useState, useEffect } from 'react';

import semiProjectImg from '../resources/images/project_img/semi_project.png';
import finalProjectImg from '../resources/images/project_img/final_project.png';
import protfolioImg from '../resources/images/project_img/protfolio.png';
import theTitanLogo from '../resources/images/project_img/the_titan_logo.png';
import smileInvestLogo from '../resources/images/project_img/smile_invest_logo.png';
import pjyImg from '../resources/images/project_img/pjy_portpolio.jpg';

import calendarIcon from '../resources/images/icon/calendar_icon.png';
import peoplesIcon from '../resources/images/icon/peoples_icon.png';
import peopleIcon from '../resources/images/icon/people_icon.png';
import eyeIcon from '../resources/images/icon/eye_icon.png'

function Project() {

    /* 아이콘 사이즈 변경 */
    const [itemSize, setItemSize] = useState([]);

    const itemSizeEnterHandler = (index) => {
        setItemSize(prevState => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        });

        const listItem = document.getElementsByClassName(`${projectStyle.projectListItem}`)[index];
        switch (index) {
            case 0:
                listItem.style.background = 'linear-gradient(to top left, #d0ad1329, #4b4b4b4d)';
                // listItem.style.background = 'linear-gradient(to top left, #d0ad13, #181818b0)';
                break;
            case 1:
                listItem.style.background = 'linear-gradient(to top left, #f7670729, #4b4b4b4d)';
                break;
            case 2:
                listItem.style.background = 'linear-gradient(to top left, #F3DD72b0, #4b4b4b4d)';
                break;
            default:
                listItem.style.background = 'linear-gradient(to top left, #4b4b4b29, #4b4b4b4d)';
                break;
    }
    };

    const itemSizeLeaveHandler = (index) => {
        setItemSize(prevState => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
        
        const listItem = document.getElementsByClassName(`${projectStyle.projectListItem}`)[index];
        listItem.style.background = 'none';
    };

    /* 페이지 이동 */
    const handleProjectClick = (index) => {
        // 해당 index에 맞는 페이지로 이동
        if (index === 0) {
            window.location.href = '';
        } else if (index === 1) {
            window.location.href = '/pjy-portfolio/project/the_titan';
        } else if (index === 2) {
            window.location.href = '';
        }
      };


    return (
        <div className={projectStyle.projectMain}>
            <div className={projectStyle.projectContant}>
                <div className={projectStyle.projectListTitle}>
                    <span>Project List</span>
                </div>
                <div className={projectStyle.projectCategory}>
                    <span>single</span>
                    <span>team</span>
                    <span>study</span>
                    <span>game(coming soon)</span>
                </div>
                <div className={projectStyle.projectList}>
                    <div 
                        className={`${projectStyle.projectListItem} ${itemSize[0] ? projectStyle.projectItemGradient : ""}`}
                        onMouseEnter={() => itemSizeEnterHandler(0)}
                        onMouseLeave={() => itemSizeLeaveHandler(0)}    
                        onClick={() => handleProjectClick(0)}
                    >
                        <div className={projectStyle.itemImg}>
                            <img src={pjyImg} alt="포트폴리오 프로젝트"/>
                        </div>
                        <div className={projectStyle.itemText}>
                            <p className={projectStyle.itemTextTitle}>PJY Portpolio</p>
                            <div className={projectStyle.itemTextInfo}>
                                <img className={projectStyle.calendarIcon} src={calendarIcon} alt="달력 아이콘"/>
                                <span style={{width:"240px"}}>23.03.24 ~ 23.03.29</span>
                                <img className={projectStyle.calendarIcon} src={peopleIcon} alt="사람 아이콘"/>
                                <span>1</span>
                            </div>
                        </div>
                        <div className={itemSize[0] ? projectStyle.viewCode : projectStyle.viewHide}>
                            <span>code view</span>
                            <img className={projectStyle.eyeIcon} src={eyeIcon} alt="눈 아이콘"/>
                        </div>
                    </div>
                    <div 
                        className={`${projectStyle.projectListItem} ${itemSize[1] ? projectStyle.projectItemGradient : ""}`}
                        onMouseEnter={() => itemSizeEnterHandler(1)}
                        onMouseLeave={() => itemSizeLeaveHandler(1)}    
                        onClick={() => handleProjectClick(1)}
                    >
                        <div className={projectStyle.itemImg} style={{backgroundColor:"#b66044"}}>
                            <img src={theTitanLogo} alt="파이널 프로젝트"/>
                        </div>
                        <div className={projectStyle.itemText}>
                            <p className={projectStyle.itemTextTitle}>the titan(인사관리 그룹웨어)</p>
                            <div className={projectStyle.itemTextInfo}>
                                <img className={projectStyle.calendarIcon} src={calendarIcon} alt="달력 아이콘"/>
                                <span style={{width:"240px"}}>23.01.17 ~ 23.03.22</span>
                                <img className={projectStyle.calendarIcon} src={peoplesIcon} alt="사람들 아이콘"/>
                                <span>6</span>
                            </div>
                        </div>
                        <div className={itemSize[1] ? projectStyle.viewCode : projectStyle.viewHide}>
                            <span>code view</span>
                            <img className={projectStyle.eyeIcon} src={eyeIcon} alt="눈 아이콘"/>
                        </div>
                    </div>
                    <div 
                        className={`${projectStyle.projectListItem} ${itemSize[2] ? projectStyle.projectItemGradient : ""}`}
                        onMouseEnter={() => itemSizeEnterHandler(2)}
                        onMouseLeave={() => itemSizeLeaveHandler(2)}    
                        onClick={() => handleProjectClick(2)}
                    >
                        <div className={projectStyle.itemImg} style={{backgroundColor:"#F3DD72"}}>
                            <img src={ smileInvestLogo} alt="세미 프로젝트"/>
                        </div>
                        <div className={projectStyle.itemText}>
                            <p className={projectStyle.itemTextTitle}>smlie invest(크라우드 펀딩 사이트)</p>
                            <div className={projectStyle.itemTextInfo}>
                                <img className={projectStyle.calendarIcon} src={calendarIcon} alt="달력 아이콘"/>
                                <span style={{width:"240px"}}>22.12.05 ~ 23.01.13</span>
                                <img className={projectStyle.calendarIcon} src={peoplesIcon} alt="사람들 아이콘"/>
                                <span>8</span>
                            </div>
                        </div>
                        <div className={itemSize[2] ? projectStyle.viewCode : projectStyle.viewHide}>
                            <span>code view</span>
                            <img className={projectStyle.eyeIcon} src={eyeIcon} alt="눈 아이콘"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
