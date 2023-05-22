import skillStyle from '../resources/css/pages/Skills.module.css';
import pageTitleStyle from '../resources/css/components/PageTitle.module.css';

import reactLogo from '../resources/images/logos/reactLogo.png';
import HTMLogo from '../resources/images/logos/HTMLLogo.png';
import CSSLogo from '../resources/images/logos/CSSLogo.png';
import bootstrapLogo from '../resources/images/logos/bootstrapLogo.png';
import githubLogo from '../resources/images/logos/githubLogo.png';
import javascriptLogo from '../resources/images/logos/javascriptLogo.png';
import appleLogo from '../resources/images/logos/appleLogo.png';
import javaLogo from '../resources/images/logos/javaLogo.png';
import figmaLogo from '../resources/images/logos/figmaLogo.png';
import typescriptLogo from '../resources/images/logos/typescriptLogo.png';
import springLogo from '../resources/images/logos/springLogo.png';
import himdiaLogo from '../resources/images/education_img/himedia.png';
import greenLogo from '../resources/images/education_img/green.png';
import studyLogo from '../resources/images/education_img/study.png';
import arrowIcon from '../resources/images/icon/arrow_icon3.png';

import React, { useState, useEffect } from 'react';

function Skills() {

    /* 스킬 정보 배열 */
    const skillsTOP = [
        {
          logo: reactLogo,
          title: "React",
          contents: [
            "Component, JSX, props, state 개념 이해",
            "React Router, SPA 이해",
            "Hooks 함수형 컴포넌트 상태관리",
          ],
        },
        {
            logo: typescriptLogo,
            title: "TypeScript",
            contents: [
              "타입스트립트의 개념과 특징",
              "타입스크립트를 활용한 프로젝트 진행중",
            ],
        },
        {
          logo: HTMLogo,
          title: "HTML",
          contents: [
            "HTML 기본 구조와 태그 개념",
            "마크업, 페이지 구조화, 폼요소",
            "테이블 생성과 데이터 표시",
          ],
        },
        {
          logo: CSSLogo,
          title: "CSS",
          contents: [
            "Layout, 배경 스타일링",
            "텍스트 스타일링, 애니메이션",
          ],
        },
        {
          logo: javascriptLogo,
          title: "JavaScript",
          contents: [
            "ES6 추가 문법, Babel",
            "Document Object Model, 비동기처리",
          ],
        },
        {
          logo: bootstrapLogo,
          title: "Bootstrap",
          contents: [
            "레이아웃, 버튼, 입력창, 테이블 등 디자인 사용",
          ],
        },
    ];

    const skillsBOTTOM = [
        {
          logo: javaLogo,
          title: "Java",
          contents: [
            "기본 문법 및 데이터 타입",
            "객체지향 프로그래밍 개념 (클래스, 객체, 상속, 다형성)",
            "컬렉션 프레임워크 (List, Set, Map 등)",
          ],
        },
        {
          logo: springLogo,
          title: "Spring",
          contents: [
            "Servlet & JSP 기본 개념 및 구조",
            "스프링 시큐리티를 활용한 보안 및 인증처리 프로젝트 진행",
            "스프링 부트를 활용한 RestAPI서버 프로그래밍",
            "스프링 MVC 웹 애플리케이션 개발",
          ],
        },
        {
          logo: githubLogo,
          title: "GitHub",
          contents: [
            "마일스톤 및 이슈 관리, 프로젝트 코드 관리",
            "기본사용법(commit/push/fetch/put) 사용",
          ],
        },
        {
          logo: appleLogo,
          title: "macOS",
          contents: [
            "macOS 환경속 프로젝트 진행",
            "docker를 이용한 Oracle DB 구축",
            "Swift 기본 문법",
          ],
        },
        {
          logo: figmaLogo,
          title: "Figma",
          contents: [
            "기본 사용법 및 애니메이션 제작",
            "컴포넌트, 스타일, 아이콘 등을 포함한 디자인 시스템을 구축",
          ],
        },
    ];

    /* 가로스크롤 이벤트 */
    useEffect(() => {
        const handleScroll = () => {
          const educationContent = document.querySelector(`.${skillStyle.educationContent}`);
          const educationList = document.querySelector(`.${skillStyle.educationList}`);
          const { scrollLeft } = educationContent;
    
          // 가로 스크롤이 발생하면 position 값을 변경
          if (scrollLeft > 0) {
            educationList.style.position = 'fixed';
          } else {
            educationList.style.position = 'relative';
          }
        };
    
        // 스크롤 이벤트에 대한 핸들러 등록
        window.addEventListener('scroll', handleScroll);
    
        // 컴포넌트 언마운트 시 이벤트 핸들러 제거
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /* 위로가기 버튼 */
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // 스크롤 이벤트를 감지하여 버튼의 표시 여부를 설정
        const handleScroll = () => {
          if (window.pageYOffset > 0) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={skillStyle.skillMain}>
            <div className={pageTitleStyle.pageTitle}>
                <p>Skills</p>
            </div>

            {/* skill 정보 반복 */}
            <div className={skillStyle.skillBox}>
                {skillsTOP.map((skill, index) => (
                    <div key={index} className={skillStyle.skillBlockTOP}>
                        <img
                            className={skillStyle.logoImg}
                            src={skill.logo}
                            alt="로고"
                        />
                        <p className={skillStyle.logoTitle}>{skill.title}</p>
                        {skill.contents.map((content, index) => (
                            <p className={skillStyle.logoContant} key={index}>
                            {content}
                            </p>
                        ))}
                    </div>
                ))}
            </div>

            {/* skill 정보 반복 */}
            <div className={skillStyle.skillBox}>
                {skillsBOTTOM.map((skill, index) => (
                    <div key={index} className={skillStyle.skillBlockBOTTOM}>
                        <img
                            className={skillStyle.logoImg}
                            src={skill.logo}
                            alt="로고"
                        />
                        <p className={skillStyle.logoTitle}>{skill.title}</p>
                        {skill.contents.map((content, index) => (
                            <p className={skillStyle.logoContant} key={index}>
                            {content}
                            </p>
                        ))}
                    </div>
                ))}
            </div>

            <div className={pageTitleStyle.pageTitle}>
                <p>Educational History</p>
            </div>

            <div className={skillStyle.educationContent} style={{ overflowX: 'scroll' }}>
                <div className={skillStyle.educationList}>

                    <div className={skillStyle.educationBox}>
                        <div className={skillStyle.educationTitle}>
                            <div>
                                <p className={skillStyle.educationTitlePlace}>개인 스터디 기록</p>
                                <p className={skillStyle.educationTitleText}>프론트엔드 개발자가 되기 위해 공부중</p>
                                <p className={skillStyle.educationTitleDate}>2023.03 ~ </p>
                            </div>
                            <div className={skillStyle.educationImg}>
                                <img
                                    src={studyLogo}
                                    alt="스터디로고"
                                />
                            </div>
                        </div>
                        <ul>
                            <li>TypeScript와 Next.js를 활용한 프로젝트 진행중</li>
                            <li>Notion과 Velog에 배운것들을 정리하며 기록</li>
                            <li>정보처리기사 실기 합격후 필기 준비중</li>
                            <li>Swift 언어 기초 문법 독학</li>
                        </ul>
                    </div>

                    <div className={skillStyle.educationBox}>
                        <div className={skillStyle.educationTitle}>
                            <div>
                                <p className={skillStyle.educationTitlePlace}>하이미디어아카데미 인재개발원</p>
                                <p className={skillStyle.educationTitleText}>React.js 와 Springboot 를 활용한 자바 풀스택 개발자</p>
                                <p className={skillStyle.educationTitleDate}>2022.10 ~ 2023.03</p>
                            </div>
                            <div className={skillStyle.educationImg}>
                                <img
                                    src={himdiaLogo}
                                    alt="하이미디어로고"
                                />
                            </div>
                        </div>
                        <ul>
                            <li>6개월 간 진행한 k-트레이닝 풀스택 개발자 과정</li>
                            <li>스프링부트 기반의 Rest API 서버를 연동한 React.js SPA 애플리케이션 개발 및 클라우드서버 배포 프로젝트 진행</li>
                            <li>스프링부트와 마이바티스를 활용한 MVC Model2 기반 풀스택 웹 애플리케이션 프로젝트 진행</li>
                            <li>자바, 데이터베이스 기초부터 시작하여 React.js를 활용한 SPA 애플리케이션 개발</li>
                        </ul>
                    </div>

                    <div className={skillStyle.educationBox}>
                        <div className={skillStyle.educationTitle}>
                            <div>
                                <p className={skillStyle.educationTitlePlace}>그린컴퓨터아트학원</p>
                                <p className={skillStyle.educationTitleText}>[웹코딩] UIUX반응형디자인(웹표준,HTML5, CSS)프론트엔드(퍼블리셔)개발자</p>
                                <p className={skillStyle.educationTitleDate}>2022.07 ~ 2022.08</p>
                            </div>
                            <div className={skillStyle.educationImg}>
                                <img
                                    src={greenLogo}
                                    alt="그린컴퓨터로고"
                                />
                            </div>
                        </div>
                        <ul>
                            <li>웹페이지의 구조를 만들기 위한 HTML 기초 문법과 태그종류별 작성법</li>
                            <li>HTML5 표준 웹기술을 바탕으로 문서의 구조를 제작하는 방법</li>
                            <li>웹문서를 표현하기 위한 CSS의 문법을 익히고, 다양한 레이아웃기법과 디자인적인 요소들을 표현하여 동적이면서 웹표준화된 페이지를 구현</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* 맨 위로 가기 아이콘 */}
            <img
                className={skillStyle.scrollTopIcon}
                onClick={scrollToTop}
                style={{ display: isVisible ? 'block' : 'none' }}
                src={arrowIcon}
                alt='화살표 아이콘'
            />
        </div>
    );
}

export default Skills;