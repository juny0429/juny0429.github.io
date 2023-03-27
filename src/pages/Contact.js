import React, { useState } from "react";
import contactStyle from "../resources/css/pages/Contact.module.css";
import { Link } from "react-router-dom";

import kakaoLogo from '../resources/images/logos/kakaoLogo.png';
import velogLogo from '../resources/images/logos/velogLogo.jpg';
import notionLogo from '../resources/images/logos/notionLogo.png';
import kakaoQR from '../resources/images/kakaoQR.jpg';

function Contact() {

    const [contactInfo, setContactInfo] = useState([
        { title: "PHONE", info: "010-4195-1928", isHovering: false },
        { title: "EMAIL", info: "juny_0429@naver.com", isHovering: false },
        { title: "VELOG", info: "velog.io/@juny_0429" },
        { title: "GITHUB", info: "github.com/juny0429" },
        { title: "NOTION", info: "노션 보러가기" },
    ]);

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

    const createLink = (title, info) => {
        if (title === "VELOG") {
            return <Link className={contactStyle.linkText} to={`https://${info}`} target="_blank" rel="noreferrer">{info}</Link>;
        }
        if (title === "GITHUB") {
            return <Link className={contactStyle.linkText} to={`https://${info}`} target="_blank" rel="noreferrer">{info}</Link>;
        }
        if (title === "NOTION") {
            return <Link className={contactStyle.linkText} to={`https://elastic-network-b5d.notion.site/Park-s-DevNote-cfb53ea770cc4828a2aad5e97b5fd968`} target="_blank">{info}</Link>
        }
        return <span>{info}</span>;
    };

    /* kakaoQR */
    const [kakaoQRView, setKakaoQRView] = useState(false);

    const QREnterHandler = () => {
        setKakaoQRView(true);
    };
    
    const QRLeaveHandler = () => {
        setKakaoQRView(false);
    };

    return (
        <div className={contactStyle.contactMain}>
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
                    item.isHovering ? contactStyle.hideText : ""
                    }`}
                >
                    {item.title}
                </span>
                <span
                    className={`${contactStyle.secondText} ${
                    item.isHovering ? contactStyle.showText : ""
                    }`}
                >
                    {createLink(item.title, item.info)}
                </span>
                </div>
            ))}
            </div>
            <div className={contactStyle.footer}>
                <div className={contactStyle.footerText}>
                    저의 포트폴리오는 계속해서 업데이트 하고 있습니다. 많은 의견 남겨주시면 감사하겠습니다.
                </div>
                <div className={contactStyle.footerImg}>
                    <Link to="https://elastic-network-b5d.notion.site/Park-s-DevNote-cfb53ea770cc4828a2aad5e97b5fd968">
                        <img src={notionLogo} alt="notion logo"/>
                    </Link>
                    <Link to="https://velog.io/@juny_0429">
                        <img src={velogLogo} alt="velog logo"/>
                    </Link>
                    <img 
                        src={kakaoLogo} 
                        alt="Kakao logo"
                        onClick={QREnterHandler}
                        onMouseLeave={QRLeaveHandler}
                    />
                    <img className={`${contactStyle.kakaoQR} ${kakaoQRView ? contactStyle.kakaoQRShow : ""}`} src={kakaoQR} alt="kakaoQR img" />
                </div>
            </div>
        </div>
    );
}

export default Contact;
