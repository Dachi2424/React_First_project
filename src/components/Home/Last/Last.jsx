import './Last.scss'
import logo1 from "../../../assets/sponsors_images/mikron.png"
import logo2 from "../../../assets/sponsors_images/pomeGranate.png"
import logo3 from "../../../assets/sponsors_images/garMoosh.png"
import logo4 from "../../../assets/sponsors_images/veloCity.png"
import Video from "../../../assets/capcut.mp4"
import { useIntersection } from "../../../useIntersection"
import { useEffect, useRef } from 'react'


function Last(){
  const heading = useIntersection({rootMargin: "40px"}, "last__move-up-animation");
  const mikron = useIntersection({rootMargin: "40px"}, "last__move-up-animation");
  const pomeGranate = useIntersection({rootMargin: "40px"}, "last__move-up-animation");
  const garMoosh = useIntersection({rootMargin: "40px"}, "last__move-up-animation");
  const veloCity = useIntersection({rootMargin: "40px"}, "last__move-up-animation");
  const circle = useIntersection({rootMargin: "40px"}, "last__move-up-animation");
  const circleText = useIntersection({rootMargin: "40px"}, "last__move-up-animation");
  const paragraph = useIntersection({rootMargin: "40px"}, "last__move-up-animation");
  const startButton = useIntersection({rootMargin: "40px"}, "last__move-up-animation");


  //background image sizing logic
  const backgroundImage = useRef(null)

  useEffect(() => {
    if(window.innerWidth <= 768) return;

    let ticking = false;

    const handleScroll = () => {
      if(!ticking){
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const size = Math.max(70, 210 - scrollY * 0.03);
          if(backgroundImage.current){
            backgroundImage.current.style.backgroundSize = `${size}%`;            
          }
          ticking = false
        });
        ticking = true
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  return (
    <section className='last'>
      <div className="last__main-container">
        <div className="last__first-container">
          <div className="last__grid-child last__grid-child--first">            
            <h1 ref={heading} className='last__heading'><span className="last__heading-piece">Our </span><span className="last__heading-piece">Partners</span></h1>
          </div>
          <div className="last__grid-child">            
            <img ref={mikron} className='last__sponsor-image' src={logo1} alt="" />
          </div>
          <div className="last__grid-child">            
            <img ref={pomeGranate} className='last__sponsor-image last__sponsor-image--second' src={logo2} alt="" />
          </div>
          <div className="last__grid-child">            
            <img ref={garMoosh} className='last__sponsor-image' src={logo3} alt="" />
          </div>
          <div className="last__grid-child">            
            <img ref={veloCity} className='last__sponsor-image' src={logo4} alt="" />
          </div>
        </div>

        <div className="last__second-container">
          <div ref={backgroundImage} className='last__video-container'>
            <div className='last__video-crop'>
              <video ref={circle} className='last__video' src={Video} autoPlay muted loop></video>
            </div>
            <div className='last__overlay-text-container'>
              <h1 ref={circleText} className='last__overlay-text'><span className='last__overlay-text-piece'>Are You Ready to </span><span className='last__overlay-text-piece'>Accelerate Your Business?</span></h1>
            </div>
          </div>

          <div className='last__content-container'>
            <p ref={paragraph} className='last__paragraph'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
            <button ref={startButton} className='last__start-button'>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Last;