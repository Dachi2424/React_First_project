import './Footer.scss'
import Logo2 from '../../assets/logo2.png'


function Footer(){
  return (
    <footer className="footer">
      <div className="footer__grid-container">
        <div className="footer__grid-child">
          <div className="footer__logo-container">
            <img className='footer__logo-image' src={Logo2} alt="" />
            <span className='footer__logo-name'>VISTA.IO</span>
          </div>
          <ul className='footer__address-ul'>
            <li className='footer__address-li'>123-456-7890</li>
            <li className='footer__address-li'>Info@mysite.com</li>
            <li className='footer__address-li'>500 Terry Francine St</li>
            <li className='footer__address-li'>San Francisco, CA 94158</li>
          </ul>
        </div>
        <div className='footer__grid-child'>
          <nav className='footer__nav'>
            <ul className='footer__navigation-ul'>
              <li className='footer__navigation-li'>Solutions</li>
              <li className='footer__navigation-li'>Vision</li>
              <li className='footer__navigation-li'>Programs</li>
              <li className='footer__navigation-li'>Blog</li>
              <button className='footer__start-button'>Get Started</button>
            </ul>
          </nav>
        </div>
        <div className="footer__grid-child">
          <form className='footer__form'>
            <p className='footer__form-heading'>Subscribe to Our Newsletter</p>
            <div className='footer__input-container'>
              <label className='footer__label'>Email*</label>
              <input className='footer__input' type="email" />
            </div>
            <div className='footer__checkbox-container'>
              <input className='footer__checkbox' type="checkbox" />
              <label className='footer__label'>Yes, subscribe me to your newsletter.*</label>
            </div>
            <button className='footer__submit-button'>Submit</button>
          </form>
        </div>
        <div className='footer__grid-child footer__grid-child--last'>
          <div className='footer__links-outer-container'>
            <span className='footer__follow-text'>Follow Us On:</span>
            <div className='footer__links-inner-container'>
              <a className='footer__link' href="https://www.linkedin.com/company/wix-com/" target='_blank'><i class="fa-brands fa-linkedin-in footer__link-icon"></i></a>
              <a className='footer__link' href="https://www.facebook.com/wix" target='_blank'><i class="fa-brands fa-facebook-f footer__link-icon"></i></a>
              <a className='footer__link' href="https://x.com/wix" target='_blank'><i class="fa-brands fa-twitter footer__link-icon"></i></a>
            </div>
          </div>
          <div className='footer__last-div'>
            <span className='footer__last-text'>&copy; 2035 by Vista.io. Powered and secured by <a className='footer__last-link' href="https://www.wix.com/?utm_campaign=vir_created_with" target='_blank'>Wix</a></span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;