import './Header.scss'
import Logo from '../../assets/logo.png'
import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Header(){

  const menu = useRef(null)
  function showMenu(){
    menu.current.classList.add('header__mobile-menu--active')
  }
  function hideMenu(){
    menu.current.classList.remove('header__mobile-menu--active')
  }


  //navigation logic
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    if(window.innerWidth <= 768){
      
      hideMenu();
      
      setTimeout(() => {
        navigate(path)
      }, 200);

    } else {
      setTimeout(() => {
        navigate(path)
      }, 250)
    }
    

    

    
  }

  const isActive = (path) => location.pathname === path;


  return(
    <header className="header">
      <div onClick={() => handleNavigate("/")} className="header__logo-container">
        <img className='header__logo-image' src={Logo} alt="" />
        <span className='header__logo-name'>VISTA.IO</span>
      </div>
      <div className='header__right-container'>
        <nav className='header__desktop-nav'>
          <ul className='header__desktop-ul'>
            <li className='header__desktop-li'><span onClick={() => handleNavigate("/solutions")} className={isActive("/solutions") ? "header__desktop-link header__desktop-link--active" : "header__desktop-link"}>Solutions</span></li>
            <li className='header__desktop-li'><span onClick={() => handleNavigate("/vision")} className={isActive("/vision") ? "header__desktop-link header__desktop-link--active" : "header__desktop-link"}>Vision</span></li>
            <li className='header__desktop-li'><span onClick={() => handleNavigate("/programs")} className={isActive("/programs") ? "header__desktop-link header__desktop-link--active" : "header__desktop-link"}>Programs</span></li>
            <li className='header__desktop-li'><span onClick={() => handleNavigate("/blog")} className={isActive("/blog") ? "header__desktop-link header__desktop-link--active" : "header__desktop-link"}>Blog</span></li>
          </ul>
        </nav>
        <div className="header__login-container header__login-container--desktop">
          <i className="fa-solid fa-circle-user header__user-icon"></i>
          <span className='header__login-text'>Log In</span>
        </div>
        <button className='header__start-button'>Get Started</button>
        <i onClick={showMenu} className="fa-solid fa-bars header__bars"></i>
      </div>
      <div ref={menu} className='header__mobile-menu'>
        <i onClick={hideMenu} className="fa-solid fa-xmark header__xmark"></i>
        <div className="header__login-container">
          <i className="fa-solid fa-circle-user header__user-icon"></i>
          <span className='header__login-text'>Log In</span>
        </div>
        <nav className='header__mobile-nav'>
          <ul className='header__mobile-ul'>
            <li className='header__mobile-li'><span onClick={() => handleNavigate("/solutions")} className={isActive("/solutions") ? "header__mobile-link header__mobile-link--active" : "header__mobile-link"}>Solutions</span></li>
            <li className='header__mobile-li'><span onClick={() => handleNavigate("/vision")} className={isActive("/vision") ? "header__mobile-link header__mobile-link--active" : "header__mobile-link"}>Vision</span></li>
            <li className='header__mobile-li'><span onClick={() => handleNavigate("/programs")} className={isActive("/programs") ? "header__mobile-link header__mobile-link--active" : "header__mobile-link"}>Programs</span></li>
            <li className='header__mobile-li'><span onClick={() => handleNavigate("/blog")} className={isActive("/blog") ? "header__mobile-link header__mobile-link--active" : "header__mobile-link"}>Blog</span></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;