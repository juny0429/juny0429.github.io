import aboutStyle from '../resources/css/pages/About.module.css';
import pageTitleStyle from '../resources/css/components/PageTitle.module.css';

import junyoungImg from '../resources/images/junyoung.JPG';

function About() {

    return (
        <div className={aboutStyle.aboutMain}>
            <div className={pageTitleStyle.pageTitle}>
                <p>About</p>
            </div>
            <div className={aboutStyle.aboutContant}>
                <div className={aboutStyle.pjyImg}>
                    <img
                        src={junyoungImg} 
                        alt="박준영 사진"
                    />
                </div>
                <div className={aboutStyle.aboutContantMain}>
                    <div className={aboutStyle.aboutContantTitle}>
                        <p className={aboutStyle.aboutContantName}>박준영</p>
                        <p className={aboutStyle.aboutContantfield}>Front-End Developer</p>
                    </div>

                    <div className={aboutStyle.aboutContantMBTI}>
                        <span>뭐든지 분석하는 습관</span>
                        <span>준비가 철저함</span>
                        <span>효율과 사랑에 빠짐</span>
                        <span>자기애가 강함</span>
                    </div>
                        
                    <div className={aboutStyle.aboutContantMBTI}>
                        <span>시야가 넓음</span>
                        <span>리더십 있음</span>
                        <span>공사구분 철저함</span>
                        <span>한다면 무조건함</span>
                        <span>사교적인</span>
                    </div>

                    <div className={aboutStyle.aboutBottomText}>
                        <p>"잠은 죽어서 자자!"라는 좌우명으로 노션과 벨로그를 운영하며 매일 성장하려고 노력하고 있습니다.</p>
                        <p>
                            개발은 9번의 어려움을 겪은 끝에 1번의 성공을 이끌어내는 과정이라고 저는 생각합니다. 처음 프로젝트를 진행할 때 수많은 오류에 마주치며 힘들었지만, 
                            그 어려움을 극복하고 완벽한 동작을 이루었을 때 얻는 성취감은 잊을 수 없습니다. 이러한 성취감이 저를 지속적인 발전으로 이끌어주고 있습니다. 
                            저는 앞으로도 개발자로써 끊임없이 역량을 쌓아나가고, 지식과 기술을 업데이트하여 더 나은 프론트엔드 개발자로 성장하고자 합니다. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;