import projectStyle from '../resources/css/pages/Project.module.scss';
import projectList from '../resources/data/Project.json';

import React, { useState, useEffect } from 'react';
import ProjectItem from '../components/ProjectItem';
import ProjectItemFilled from '../components/projectItemFilled';

/* 프로젝트 페이지 */
function Project() {

    /* 프로젝트 리스트 정보 */
    const projects = projectList.projectsList;

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
                listItem.style.background = 'linear-gradient(to top left, #7C743A29, #4b4b4b4d)';
                break;
            case 1:
                listItem.style.background = 'linear-gradient(to top left, #d0ad1329, #4b4b4b4d)';
                break;
            case 2:
                listItem.style.background = 'linear-gradient(to top left, #f7670729, #4b4b4b4d)';
                break;
            case 3:
                listItem.style.background = 'linear-gradient(to top left, #F3DD7229, #4b4b4b4d)';
                break;
            case 4:
                listItem.style.background = 'linear-gradient(to top left, #72CBF329, #4b4b4b4d)';
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

    /* 가로스크롤 이벤트 */
    useEffect(() => {
        const handleScroll = () => {
            const projectFilledContant = document.querySelector(`.${projectStyle.projectFilledContant}`);
            const projectFilledList = document.querySelector(`.${projectStyle.projectFilledList}`);
            
            if (projectFilledContant) {
              const { scrollLeft } = projectFilledContant;
              
              // 가로 스크롤이 발생하면 position 값을 변경
              if (scrollLeft > 0) {
                projectFilledList.style.position = 'fixed';
              } else {
                projectFilledList.style.position = 'relative';
              }
            }            
        };
    
        // 스크롤 이벤트에 대한 핸들러 등록
        window.addEventListener('scroll', handleScroll);
    
        // 컴포넌트 언마운트 시 이벤트 핸들러 제거
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /* 아이콘에 따른 프로젝트 리스트 변경 */
    const [isProjectListVisible, setProjectListVisible] = useState(true);
    const [isProjectFilledListVisible, setProjectFilledListVisible] = useState(false);

    const handleListIconClick = () => {
        setProjectListVisible(true);
        setProjectFilledListVisible(false);
    };

    const handleFilledIconClick = () => {
        setProjectListVisible(false);
        setProjectFilledListVisible(true);
    };

    return (
        <div className={projectStyle.projectMain}>
            <div className={projectStyle.projectContant}>

                <div className={projectStyle.projectListTitle}>
                    <span>Project List</span>
                    <div className={projectStyle.projectListTitleImg}>
                        <img onClick={handleListIconClick} src="./images/icon/list_icon.png" alt='리스트 아이콘'/>
                        <img onClick={handleFilledIconClick} src="./images/icon/filled_icon.png" alt='옆으로 보기 아이콘'/>
                    </div>
                </div>

                {isProjectListVisible && (
                    <div className={projectStyle.projectList}>
                        {projects.map((project, index) => (
                            <ProjectItem
                                key={index}
                                itemSize={itemSize[index]}
                                itemSizeEnterHandler={() => itemSizeEnterHandler(index)}
                                itemSizeLeaveHandler={() => itemSizeLeaveHandler(index)}
                                projectTeamLogoUrl={project.projectTeamLogoUrl}
                                bgColor={project.bgColor}
                                title={project.title}
                                date={project.date}
                                people={project.people}
                                githubUrl={project.githubUrl}
                                info={project.info}
                                tools={project.tools}
                            />
                        ))}
                    </div>
                )}

                {isProjectFilledListVisible && (
                    <div className={projectStyle.projectFilledContant} style={{ overflowX: 'scroll' }}>
                        <div className={projectStyle.projectFilledList}>
                            {projects.map((project, index) => (
                                <ProjectItemFilled
                                    key={index}
                                    projectTeamLogoUrl={project.projectTeamLogoUrl}
                                    title={project.title}
                                    date={project.date}
                                    people={project.people}
                                    info={project.info}
                                    tools={project.tools}
                                    captureUrl={project.captureUrl}
                                />
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Project;