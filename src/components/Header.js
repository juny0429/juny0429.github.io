import { Link } from 'react-router-dom';
import headerStyle from '../resources/css/components/Header.module.css';

function Header() {

  return (
    <header>
      <div className={headerStyle.navMain}>
        <div className={headerStyle.navBlock}>
          <Link to="/home" className={headerStyle.navText}>Home</Link>
          <div className={headerStyle.underLine}></div>
        </div>
        <div className={headerStyle.navBlock}>
          <Link to="/about" className={headerStyle.navText}>About</Link>
          <div className={headerStyle.underLine}></div>
        </div>
        <div className={headerStyle.navBlock}>
          <Link to="/skills" className={headerStyle.navText}>Skills</Link>
          <div className={headerStyle.underLine}></div>
        </div>
        <div className={headerStyle.navBlock}>
          <Link to="/project" className={headerStyle.navText}>Project</Link>
          <div className={headerStyle.underLine}></div>
        </div>
        <div className={headerStyle.navBlock}>
          <Link to="/pjy-portfolio/contact" className={headerStyle.navText}>Contact</Link>
          <div className={headerStyle.underLine}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
