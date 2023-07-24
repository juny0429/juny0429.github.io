import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectItemStyle from '../resources/css/components/ProjectItem.module.scss';

function ProjectItem({ itemSize, handleProjectClick, projectTeamLogoUrl, bgColor, title, date, people, tools, githubUrl, info }) {
    
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`${projectItemStyle.projectListItem} ${isHovered ? projectItemStyle.projectItemGradient : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleProjectClick}
        >
            <div className={projectItemStyle.itemImg} style={{ backgroundColor: bgColor }}>
                <img
                    src={process.env.PUBLIC_URL + projectTeamLogoUrl}
                    alt="프로젝트 이미지"
                />
            </div>
            <div className={projectItemStyle.itemText}>
                <p className={projectItemStyle.itemTextTitle}>{title}</p>
                <div className={projectItemStyle.itemTextInfo}>
                    <img
                        className={projectItemStyle.calendarIcon}
                        src="./images/icon/calendar_icon.png"
                        alt="달력 아이콘"
                    />
                    <span style={{ width: "240px" }}>{date}</span>
                    <img
                        className={projectItemStyle.calendarIcon}
                        src="./images/icon/people_icon.png"
                        alt="사람 아이콘"
                    />
                    <span>{people}</span>
                </div>
                <div className={isHovered ? projectItemStyle.viewInfo : projectItemStyle.viewHide}>
                    {info.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                    <div className={projectItemStyle.projectToolList}>
                    {tools.map((tool, index) => (
                        <img key={index} src={process.env.PUBLIC_URL + tool} alt="툴로고" />
                    ))}
                </div>
                </div>
            </div>
            <Link to={githubUrl} className={isHovered ? projectItemStyle.viewCode : projectItemStyle.viewHide}>
                <span>code view</span>
                <img
                    className={projectItemStyle.eyeIcon}
                    src="./images/icon/eye_icon.png"
                    alt="눈 아이콘"
                />
            </Link>
        </div>
    );
}

export default ProjectItem;
