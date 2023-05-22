import skillStyle from '../resources/css/pages/Skills.module.css';

import reactLogo from '../resources/images/logos/reactLogo.png';
import HTMLogo from '../resources/images/logos/HTMLLogo.png';
import CSSLogo from '../resources/images/logos/CSSLogo.png';
import bootstrapLogo from '../resources/images/logos/bootstrapLogo.png';
import githubLogo from '../resources/images/logos/githubLogo.png';
import javascriptLogo from '../resources/images/logos/javascriptLogo.png';

import { useState } from 'react';

function Skills() {

    const [logoBounce, setLogoBounce] = useState(false);

    const logoBounceEnterHandler = () => {
        setLogoBounce(true);
    };
    
    const logoBounceLeaveHandler = () => {
        setTimeout(() => setLogoBounce(false), 2000);
    };

    return (
        <div className={skillStyle.skillMain}>
            <div className={skillStyle.skillTopBox}> 
                <div className={skillStyle.skillBlock}>
                    <img
                        className={`${skillStyle.logoImg} ${
                            logoBounce ? skillStyle.bounceLogo : ""
                            }`}
                        src={reactLogo}
                        alt="로고"
                        onMouseEnter={logoBounceEnterHandler}
                        onMouseLeave={logoBounceLeaveHandler}
                    />
                    <p className={skillStyle.logoTitle}>React</p>
                    <p className={skillStyle.logoContant}>Component, JSX, props, state 개념 이해,</p>
                    <p className={skillStyle.logoContant}>React Router, SPA 이해,</p>
                    <p className={skillStyle.logoContant}>Hooks 함수형 컴포넌트 상태관리</p>
                </div>
                <div className={skillStyle.skillBlock}>
                    <img
                        className={`${skillStyle.logoImg} ${
                            logoBounce ? skillStyle.bounceLogo : ""
                          }`}
                        src={HTMLogo}
                        alt="로고"
                        onMouseEnter={logoBounceEnterHandler}
                        onMouseLeave={logoBounceLeaveHandler}
                    />
                    <p className={skillStyle.logoTitle}>HTML</p>
                    <p className={skillStyle.logoContant}>마크업, 페이지 구조화, 폼요소, 테이블</p>
                </div>
                <div className={skillStyle.skillBlock}>
                    <img
                        className={`${skillStyle.logoImg} ${
                            logoBounce ? skillStyle.bounceLogo : ""
                          }`}
                        src={CSSLogo}
                        alt="로고"
                        onMouseEnter={logoBounceEnterHandler}
                        onMouseLeave={logoBounceLeaveHandler}
                    />
                    <p className={skillStyle.logoTitle}>CSS</p>
                    <p className={skillStyle.logoContant}>Layout, 배경 스타일링,</p>
                    <p className={skillStyle.logoContant}>텍스트 스타일링, 애니메이션</p>
                </div>
            </div>
            <div className={skillStyle.skillTopBox}>
                <div className={skillStyle.skillBlock}>
                    <img
                        className={`${skillStyle.logoImg} ${
                            logoBounce ? skillStyle.bounceLogo : ""
                          }`}
                        src={javascriptLogo}
                        alt="로고"
                        onMouseEnter={logoBounceEnterHandler}
                        onMouseLeave={logoBounceLeaveHandler}
                    />
                    <p className={skillStyle.logoTitle}>Javascript</p>
                    <p className={skillStyle.logoContant}>ES6 추가 문법, babel,</p>
                    <p className={skillStyle.logoContant}>Document Object Model, 비동기처리</p>
                </div>
                <div className={skillStyle.skillBlock}>
                    <img
                        className={`${skillStyle.logoImg} ${
                            logoBounce ? skillStyle.bounceLogo : ""
                          }`}
                        src={bootstrapLogo}
                        alt="로고"
                        onMouseEnter={logoBounceEnterHandler}
                        onMouseLeave={logoBounceLeaveHandler}
                    />
                    <p className={skillStyle.logoTitle}>Bootstrap</p>
                    <p className={skillStyle.logoContant}>레이아웃, 버튼, 입력창, 테이블 등 디자인 사용</p>
                </div>
                <div className={skillStyle.skillBlock}>
                    <img
                        className={`${skillStyle.logoImg} ${
                            logoBounce ? skillStyle.bounceLogo : ""
                          }`}
                        src={githubLogo}
                        alt="로고"
                        onMouseEnter={logoBounceEnterHandler}
                        onMouseLeave={logoBounceLeaveHandler}
                    />
                    <p className={skillStyle.logoTitle}>Github</p>
                    <p className={skillStyle.logoContant}>마일스톤 및 이슈 관리, 프로젝트 코드 관리,</p>
                    <p className={skillStyle.logoContant}>기본사용법(commit/push/fetch/put) 사용</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;