import projectStyle from '../resources/css/pages/Project.module.css';
import React from 'react';
import { useState } from 'react';
import { Element } from 'react-scroll';

import peopleIcon from '../resources/images/icon/people_icon.png';
import peoplesIcon from '../resources/images/icon/peoples_icon.png';
import playIcon from '../resources/images/icon/play_icon.png';
import studyIcon from '../resources/images/icon/study_icon.png';

function Project() {

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

    return (
        <div className={projectStyle.projectMain}>
            <div>
                <div className={projectStyle.projectIconPackage}>
                    <img
                        className={iconSize[0] ? projectStyle.projectIconSizeUp : ''} 
                        src={peopleIcon} 
                        alt="개인 프로젝트 아이콘"
                        onMouseEnter={() => iconSizeEnterHandler(0)}
                        onMouseLeave={() => iconSizeLeaveHandler(0)}
                    />
                    <img 
                        className={iconSize[1] ? projectStyle.projectIconSizeUp : ''}
                        src={peoplesIcon} 
                        alt="팀 프로젝트 아이콘"
                        onMouseEnter={() => iconSizeEnterHandler(1)}
                        onMouseLeave={() => iconSizeLeaveHandler(1)}
                    />
                    <img 
                        className={iconSize[2] ? projectStyle.projectIconSizeUp : ''}
                        src={playIcon} 
                        alt="게임 아이콘"
                        onMouseEnter={() => iconSizeEnterHandler(2)}
                        onMouseLeave={() => iconSizeLeaveHandler(2)}    
                    />
                    <img 
                        className={iconSize[3] ? projectStyle.projectIconSizeUp : ''}
                        src={studyIcon} 
                        alt="스터디 아이콘"
                        onMouseEnter={() => iconSizeEnterHandler(3)}
                        onMouseLeave={() => iconSizeLeaveHandler(3)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Project;
