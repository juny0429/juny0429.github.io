import projectItemFilledStyle from '../resources/css/components/ProjectItemFilled.module.scss';

import React from 'react';
import { Link } from 'react-router-dom';

function ProjectItemFilled({projectTeamLogoUrl, title, date, people, info, bgColor, tools, captureUrl, githubUrl}) {

    return (
        <div>
            <div className={projectItemFilledStyle.projectFilledItem} style={{ backgroundColor: bgColor }}>
                <div className={projectItemFilledStyle.projectFilledItemImg} style={{ backgroundColor: bgColor }} >
                    <Link to={githubUrl} className={projectItemFilledStyle.codeView}>
                        <span>code view</span>
                        <img
                            className={projectItemFilledStyle.eyeIcon}
                            src="./images/icon/eye_icon.png"
                            alt="눈 아이콘"
                        />
                    </Link>
                    <img src={process.env.PUBLIC_URL + captureUrl} alt='로고'/>
                </div>

                <div className={projectItemFilledStyle.projectFilledTitle}>
                    <p>{title}</p>
                    <img
                        className={projectItemFilledStyle.calendarIcon}
                        src="./images/icon/calendar_icon.png"
                        alt="달력 아이콘"
                        />
                    <span>{date}</span>
                    <img 
                        className={projectItemFilledStyle.calendarIcon} 
                        src="./images/icon/people_icon.png" 
                        alt="사람 아이콘" 
                    />
                    <span className={projectItemFilledStyle.projectFilledPeple}>{people}</span>
                </div>

                <div className={projectItemFilledStyle.projectFilledContent}>
                    {info.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                </div>

                <div className={projectItemFilledStyle.projectToolList}>
                    {tools.map((tool, index) => (
                        <img key={index} src={process.env.PUBLIC_URL + tool} alt="툴로고" />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectItemFilled;