import './Header.scss'
import Logo from '../../assets/logo.png'
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Header(){

  const menu = useRef(null)
  function showMenu(){
    menu.current.classList.add('header__mobile-menu--active')
  }
  function hideMenu(){
    menu.current.classList.remove('header__mobile-menu--active')
  }

  return(
    <header className="header">
      <div className="header__logo-container">
        <img className='header__logo-image' src={Logo} alt="" />
        <span className='header__logo-name'>VISTA.IO</span>
      </div>
      <div className='header__right-container'>
        <nav className='header__desktop-nav'>
          <ul className='header__desktop-ul'>
            <li className='header__desktop-li'>Solutions</li>
            <li className='header__desktop-li'>Vision</li>
            <li className='header__desktop-li'>Programs</li>
            <li className='header__desktop-li'>Blog</li>
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
            <li className='header__mobile-li'><NavLink to="/solutions" className={({isActive}) => isActive ? "header__mobile-link header__mobile-link--active" : "header__mobile-link"}>Solutions</NavLink></li>
            <li className='header__mobile-li'><NavLink to="/vision" className={({isActive}) => isActive ? "header__mobile-link header__mobile-link--active" : "header__mobile-link"}>Vision</NavLink></li>
            <li className='header__mobile-li'><NavLink to="/programs" className={({isActive}) => isActive ? "header__mobile-link header__mobile-link--active" : "header__mobile-link"}>Programs</NavLink></li>
            <li className='header__mobile-li'><NavLink to="/blog" className={({isActive}) => isActive ? "header__mobile-link header__mobile-link--active" : "header__mobile-link"}>Blog</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;