import contactStyle from "../resources/css/pages/Contact.module.css";
import pageTitleStyle from '../resources/css/components/PageTitle.module.css';
import contactData from '../resources/data/Contact.json';

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {

    const [contactInfo, setContactInfo] = useState(contactData.contect);

    /* 마우스 오버 이벤트 */
    const handleMouseOver = (index) => {
        const newContactInfo = [...contactInfo];
        newContactInfo[index].isHovering = true;
        setContactInfo(newContactInfo);
    };

    const handleMouseLeave = (index) => {
        const newContactInfo = [...contactInfo];
        newContactInfo[index].isHovering = false;
        setContactInfo(newContactInfo);
    };

    return (
        <div className={contactStyle.contactMain}>
            <div className={pageTitleStyle.pageTitle}>
                <p>Contact</p>
            </div>
            <div className={contactStyle.textMain}>
            {contactInfo.map((item, index) => (
                <div
                key={index}
                className={contactStyle.myinfoText}
                onMouseOver={() => handleMouseOver(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                >
                <span
                    className={`${contactStyle.firstText} ${
                    item.isHovering ? contactStyle.hideContactText : ""
                    }`}
                >
                    {item.title}
                </span>
                <Link
                    to={item.title === "PHONE" || item.title === "EMAIL" ? null : item.link}
                    className={`${contactStyle.secondText} ${
                    item.isHovering ? contactStyle.showContectText : ""
                    }`}
                >
                    {item.info}
                    {item.title !== "PHONE" && item.title !== "EMAIL" && (
                        <span className={contactStyle.clickText}>click</span>
                    )}
                </Link>
                </div>
            ))}
            </div>
            <div className={contactStyle.footer}>
                <div className={contactStyle.footerText}>
                    저의 포트폴리오는 계속해서 업데이트 하고 있습니다.  
                    <Link 
                        to="https://asked.kr/juny0429"
                        style={{color:"#C18FFF"}}    
                    >많은 의견 남겨주시면 감사하겠습니다.</Link>
                </div>
                    <span className={contactStyle.footerText} style={{float:"right"}}>[ 본 포트폴리오는 1920 * 1080에 최적화되어 있습니다 ]</span>
            </div>
        </div>
    );
}

export default Contact;
