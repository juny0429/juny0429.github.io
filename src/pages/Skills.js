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
                    <div className={skillStyle.logoImg2}>
                        <img
                            className={`${skillStyle.logoImg} ${
                                logoBounce ? skillStyle.bounceLogo : ""
                              }`}
                            src={reactLogo}
                            alt="로고"
                            onMouseEnter={logoBounceEnterHandler}
                            onMouseLeave={logoBounceLeaveHandler}
                        />
                    </div>
                    <p className={skillStyle.logoTitle}>React</p>
                    <p className={skillStyle.logoContant}>기본사용법</p>
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
                    <p className={skillStyle.logoContant}>마크업, 페이지 구조화, 폼요소, 테이블 등등</p>
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
                    <p className={skillStyle.logoContant}>배경 스타일링, 텍스트 스타일링, 애니메이션 등</p>
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
                    <p className={skillStyle.logoContant}>네비게이션 구성, 탭메뉴 구현, 비동기 처리 등</p>
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