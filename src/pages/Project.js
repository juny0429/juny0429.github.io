import projectStyle from '../resources/css/pages/Project.module.css';

import theTitanLogo from '../resources/images/project_img/the_titan_logo.png';
import theTitan from '../resources/images/project_img/the_titan.jpg';
import smileInvestLogo from '../resources/images/project_img/smile_invest_logo.png';
import smileInvest from '../resources/images/project_img/smile_invest.png';
import pjyImg from '../resources/images/project_img/pjy_portpolio.jpg';
import portfolio from '../resources/images/project_img/portfolio.png';
import olivesLogo from '../resources/images/project_img/olives_project.png';
import cocktable from '../resources/images/project_img/cocktable.jpg';

import calendarIcon from '../resources/images/icon/calendar_icon.png';
import peopleIcon from '../resources/images/icon/people_icon.png';
import eyeIcon from '../resources/images/icon/eye_icon.png';
import listIcon from '../resources/images/icon/list_icon.png';
import filledIcon from '../resources/images/icon/filled_icon.png';

import reactLogo from '../resources/images/logos/reactLogo.png';
import nextjsLogo from '../resources/images/logos/nextjs.png';
import HTMLogo from '../resources/images/logos/HTMLLogo.png';
import CSSLogo from '../resources/images/logos/CSSLogo.png';
import bootstrapLogo from '../resources/images/logos/bootstrapLogo.png';
import githubLogo from '../resources/images/logos/githubLogo.png';
import javascriptLogo from '../resources/images/logos/javascriptLogo.png';
import javaLogo from '../resources/images/logos/javaLogo.png';
import figmaLogo from '../resources/images/logos/figmaLogo.png';
import typescriptLogo from '../resources/images/logos/typescriptLogo.png';
import springLogo from '../resources/images/logos/springLogo.png';
import muiLogo from '../resources/images/logos/muiLogo.png';
import oracleLogo from '../resources/images/logos/oracleLogo.png';

import React, { useState, useEffect } from 'react';

/* 프로젝트 아이템 컴포넌트 */
function ProjectItem({ itemSize, itemSizeEnterHandler, itemSizeLeaveHandler, handleProjectClick, imgSrc, bgColor, title, date, people, info }) {
    
    return (
      <div
        className={`${projectStyle.projectListItem} ${itemSize ? projectStyle.projectItemGradient : ""}`}
        onMouseEnter={() => itemSizeEnterHandler()}
        onMouseLeave={() => itemSizeLeaveHandler()}    
        onClick={() => handleProjectClick()}
      >
        <div className={projectStyle.itemImg} style={{ backgroundColor: bgColor }}>
          <img src={imgSrc} alt="프로젝트 이미지" />
        </div>
        <div className={projectStyle.itemText}>
          <p className={projectStyle.itemTextTitle}>{title}</p>
          <div className={projectStyle.itemTextInfo}>
            <img className={projectStyle.calendarIcon} src={calendarIcon} alt="달력 아이콘" />
            <span style={{ width: "240px" }}>{date}</span>
            <img className={projectStyle.calendarIcon} src={peopleIcon} alt="사람 아이콘" />
            <span>{people}</span>
          </div>
          <div className={itemSize ? projectStyle.viewInfo : projectStyle.viewHide}>
            {info.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
        <div className={itemSize ? projectStyle.viewCode : projectStyle.viewHide}>
          <span>code view</span>
          <img className={projectStyle.eyeIcon} src={eyeIcon} alt="눈 아이콘" />
        </div>
      </div>
    );
}

function ProjectItemFilled({imgSrc, title, date, people, info, bgColor, tools, capture}) {

    return (
        <div>
            <div className={projectStyle.projectFilledItem} style={{ backgroundColor: bgColor }}>
                <div className={projectStyle.projectFilledItemImg} style={{ backgroundColor: bgColor }} >
                    <img className={projectStyle.projectFilledItemMainImg} src={capture} alt='로고'/>
                </div>

                <div className={projectStyle.projectFilledTitle}>
                    <p>{title}</p>
                    <span>{date}</span>
                    {/* <span className={projectStyle.projectFilledPeple}>{people}</span>
                    <img className={projectStyle.calendarIcon} src={peopleIcon} alt="사람 아이콘" /> */}
                </div>

                <div className={projectStyle.projectFilledContent}>
                    {info.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                </div>

                <div className={projectStyle.projectToolList}>
                {tools.map((tool, index) => (
                    <img key={index} src={tool} alt="툴 로고" />
                ))}
                </div>
            </div>
        </div>
    );
}

/* 프로젝트 페이지 */
function Project() {

    /* 프로젝트 리스트 정보 */
    const projects = [
        {
            imgSrc: olivesLogo,
            capture: cocktable,
            bgColor: "#9E964D",
            title: "Cocktable(칵테일 테이블오더 어플리케이션)",
            date: "23.04.27 ~ 진행중",
            people: "2",
            info: [
                "기존의 칵테일 주문 방식은 메뉴판을 봐도 어떤 맛일지 상상하기 어려웠고,",
                "맛을 잘 모르는 칵테일에 경우 실망하기도 했습니다.", 
                "커스텀 기능을 통해 나만의 칵테일을 주문하고, 손님들은 예상치 못한 맛이 아닌,",
                "자신의 입맛에 딱 맞는 칵테일을 즐길 수 있게 될 것입니다."
            ],
            tools: [
                nextjsLogo,
                typescriptLogo,
                oracleLogo,
                figmaLogo,
                githubLogo
            ]
        },
        {
            imgSrc: pjyImg,
            capture: portfolio,
            bgColor: "",
            title: "PJY Portpolio",
            date: "23.03.24 ~ 23.03.29",
            people: "1",
            info: [
                "나를 어떻게하면 간결하고 임팩트있게 보여줄수 있을까? 를 생각하며 작업했습니다.", 
                "각 페이지별 애니메이션 기능을 활용한 디자인 구현이 특징입니다."
            ],
            tools: [
                reactLogo,
                figmaLogo,
                githubLogo
            ]
        },
        {
            imgSrc: theTitanLogo,
            capture: theTitan,
            bgColor: "#b66044",
            title: "the titan(인사관리 그룹웨어)",
            date: "23.01.17 ~ 23.03.22",
            people: "6",
            info: [
                "인사관리 그룹웨어를 주제로한 프로젝트입니다.", 
                "스프링부트 기반의 RestAPI 서버를 연동한 React.jsSPA 애플리케이션이 특징입니다."
            ],
            tools: [
                reactLogo,
                muiLogo,
                springLogo,
                oracleLogo,
                figmaLogo,
                githubLogo
            ]
        },
        {
            imgSrc: smileInvestLogo,
            capture: smileInvest,
            bgColor: "#F3DD72",
            title: "smlie invest(크라우드 펀딩 사이트)",
            date: "22.12.05 ~ 23.01.13",
            people: "7",
            info: [
                "반려동물을 주제로 한 클라우드 펀딩 프로젝트입니다.", 
                "스프링부트와 마이바티스를 활용한 MVC Model2 기반으로 구현 했습니다."
            ],
            tools: [
                HTMLogo,
                CSSLogo,
                bootstrapLogo,
                springLogo,
                oracleLogo,
                figmaLogo,
                githubLogo
            ]
        }
    ];

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
                // listItem.style.background = 'linear-gradient(to top left, #d0ad13, #181818b0)';
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

    /* 페이지 이동 */
    const handleProjectClick = (index) => {

        // 해당 index에 맞는 페이지로 이동
        if (index === 0) {
            window.location.href = 'https://github.com/Green-0lives';
        } else if (index === 1) {
            window.location.href = 'https://github.com/juny0429/pjy-portfolio';
        } else if (index === 2) {
            window.location.href = 'https://github.com/orgs/2TeamHR/repositories';
        } else if (index === 3) {
            window.location.href = 'https://github.com/smile-invest/smile-invest';
        } else if (index === 4) {
            window.location.href = "/pjy-portfolio/mini-project";
        }
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
                        <img onClick={handleListIconClick} src={listIcon} alt='리스트 아이콘'/>
                        <img onClick={handleFilledIconClick} src={filledIcon} alt='옆으로 보기 아이콘'/>
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
                                handleProjectClick={() => handleProjectClick(index)}
                                imgSrc={project.imgSrc}
                                bgColor={project.bgColor}
                                title={project.title}
                                date={project.date}
                                people={project.people}
                                info={project.info}
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
                                    imgSrc={project.imgSrc}
                                    title={project.title}
                                    date={project.date}
                                    people={project.people}
                                    info={project.info}
                                    tools={project.tools}
                                    capture={project.capture}
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