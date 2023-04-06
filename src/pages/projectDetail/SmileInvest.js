import smileStyle from '../../resources/css/pages/projectDetail/smileInvest.module.css';
import { useState, useEffect } from 'react';

import arrowIcon from '../../resources/images/icon/arrow_icon.png';
import theTitanMainGif from '../../resources/images/gif/the_titan/the_titan_main.gif';
import semiProjectImg from '../../resources/images/project_img/semi_project.png';
import finalProjectImg from '../../resources/images/project_img/final_project.png';
import monitorImg from '../../resources/images/project_img/monitor.png';

function SmileInvestProject() {

     /* 스클로 인터렉션 */
     const [scrollPosition, setScrollPosition] = useState(0);

     const handleScroll = () => {
         const position = window.pageYOffset;
         setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /* 아이콘 애니메이션 */

    return (
        <div>
            <div className={smileStyle.smileContent}>
                <div className={smileStyle.arrowIcon}>
                    <p>scroll</p>
                    <img src={arrowIcon} alt="화살표 아이콘" />
                </div>
                <div className={smileStyle.smileMain}>
                    <div 
                        className={smileStyle.smileDetailTitle} 
                        style={(scrollPosition < 400) ? {transform: `translateY(${scrollPosition}px)`} : {transform: `translateY(400px)`}}
                    >
                        <p>smile invest(크라우드 펀딩 사이트):{scrollPosition}</p>
                        <p>22년 12월 5일 ~ 23년 01월 13일</p>
                        <div>
                            <p>- Introduction</p>
                            <p>1~2인 소규모 가구 증가와 코로나19로 인해 반려동물을 키우는 가정이</p>
                            <p>많아짐에 따라 성장한 온라인 반려동물 시장을 겨냥하여</p>
                            <p>반려동물을 주제로 한 클라우드 펀딩 사이트입니다.</p>
                        </div>
                        <div>
                            <ul>
                                <li>유사 사이트 분석 및 사이트 기획</li>
                                <li>피그마를 이용한 사이트 내 헤더 및 푸터, 회원가입, 마이페이지, 관리자페이지, 상품 등록페이지 등등 디자인 제작 </li>
                                <li>부트스트랩을 활용하여 HTML / CSS 로 페이지 구현</li>
                                <li>스프링 시큐리티 구현
                                    <ul>
                                        <li>로그인 기능 제작</li>
                                        <li>관리자페이지 권한 처리</li>
                                        <li>페이지 이동 및 비밀글 기능 구현</li>
                                    </ul>
                                </li>
                                <li>마이페이지 개인정보 수정페이지(UPDATE) 구현</li>
                                <li>마일리지 충전페이지 - 비동기처리로 버튼 기능 구현</li>
                                <li>회원가입 페이지 구현
                                    <ul>
                                        <li>ajax를 이용한 아이디 중복체크, 비밀번호 확인</li>
                                        <li>비밀번호 암호화 처리</li>
                                        <li>이메일 인증(구글 이메일 앱 토큰 방식)</li>
                                    </ul>
                                </li>
                                <li>게시판 형식 페이지 게시물 검색 및 페이징 처리 구현</li>
                                <li>상품 등록 페이지(INSERT) 및 파일 업로드 구현</li>
                            </ul>
                        </div>
                    </div>
                    <div 
                        className={smileStyle.theTitanGif} 
                        style={(scrollPosition <= 2775) ? {transform: `translateX(-${scrollPosition}px)`} : {transform: `translateX(-2775px)`}}
                    >

                    </div>

                    <div className={smileStyle.smileProjectDiv} style={{transform: `translateX(-${scrollPosition}px)`}}>
                        
                    </div>
                </div>
                <div style={{ height: '1500vh' }}></div>
            </div>
        </div>
    );
}

export default SmileInvestProject;