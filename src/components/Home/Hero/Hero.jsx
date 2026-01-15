import { useEffect, useRef } from 'react';
import './Hero.scss'


function Hero(){
  
  const heroRef = useRef(null);

  useEffect(() => {
    if(window.innerWidth <= 768) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const size = Math.min(120, 100 + scrollY * 0.01);
      const position = Math.min(50, 30 + scrollY * 0.01)

      if(heroRef.current){
        heroRef.current.style.backgroundSize = `${size}%`;
        heroRef.current.style.backgroundPositionY = `${position}%`
      }
    
    };

    
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
    
  }, [])

  return (
    <section className="hero">
      <div ref={heroRef} className='hero__main-container'>
        <div className='hero__text-container'>
          <h1 className='hero__heading fade-up'>The New Standard in Data Analysis</h1>
          <p className='hero__content fade-up'>Use Data to Get a 360-Degree View of Your Business</p>
          <button className='hero__learn-button fade-up'>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;