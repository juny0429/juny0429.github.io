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
import springLogo from '../resources/images/logos/springLogo.png'

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
        </div>
    );
}

export default Skills;