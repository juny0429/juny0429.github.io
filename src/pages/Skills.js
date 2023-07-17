import skillStyle from '../resources/css/pages/Skills.module.scss';
import pageTitleStyle from '../resources/css/components/PageTitle.module.scss';
import SkillsData from '../resources/data/Skills.json';
import educationData from '../resources/data/Education.json';

import arrowIcon from '../resources/images/icon/arrow_icon3.png';

import React, { useState, useEffect } from 'react';

function renderSkillBlocks(skills, blockClassName) {

  return skills.map((skill, index) => (
    <div key={index} className={blockClassName}>
      <img
        className={skillStyle.logoImg}
        src={process.env.PUBLIC_URL + skill.url}
        alt={skill.title}
      />
      <p className={skillStyle.logoTitle}>{skill.title}</p>
      {skill.contents.map((content, index) => (
        <p className={skillStyle.logoContant} key={index}>
          {content}
        </p>
      ))}
    </div>
  ));
}

function renderEducationBoxes() {

  const education = educationData.educationDataList;

  return education.map((education, index) => (
    <div key={index} className={skillStyle.educationBox}>
      <div className={skillStyle.educationTitle}>
        <div>
          <p className={skillStyle.educationTitlePlace}>{education.titlePlace}</p>
          <p className={skillStyle.educationTitleText}>{education.titleText}</p>
          <p className={skillStyle.educationTitleDate}>{education.titleDate}</p>
        </div>
        <div className={skillStyle.educationImg}>
          <img 
            src={process.env.PUBLIC_URL + education.url} 
            alt={education.logo} 
          />
        </div>
      </div>
      <ul>
        {education.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  ));
}

function Skills() {

    /* 스킬 정보 배열 */
    const skillsTOP = SkillsData.skillsTOP;
    const skillsBOTTOM = SkillsData.skillsBOTTOM;

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

            <div className={skillStyle.skillBox}>
              {renderSkillBlocks(skillsTOP, skillStyle.skillBlockTOP)}
            </div>

            <div className={skillStyle.skillBox}>
              {renderSkillBlocks(skillsBOTTOM, skillStyle.skillBlockBOTTOM)}
            </div>

            <div className={pageTitleStyle.pageTitle}>
                <p>Educational History</p>
            </div>

            <div className={skillStyle.educationContent} style={{ overflowX: 'scroll' }}>
              <div className={skillStyle.educationList}>
                {renderEducationBoxes()}
              </div>
            </div>

            {/* 위로 가기 버튼 */}
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