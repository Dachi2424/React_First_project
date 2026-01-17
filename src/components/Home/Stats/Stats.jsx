import { useEffect, useRef } from 'react';
import { useIntersection } from '../../../useIntersection';
import './Stats.scss'

function Stats(){

  const heading = useIntersection({threshold: 0},"stats__move-up-animation")
  const card1 = useIntersection({threshold: 0}, "stats__move-right-animation")
  const card2 = useIntersection({threshold: 0}, "stats__move-right-animation")
  const card3 = useIntersection({threshold: 0}, "stats__move-right-animation")
  const card4 = useIntersection({threshold: 0}, "stats__move-right-animation")
  const card5 = useIntersection({threshold: 0}, "stats__move-right-animation")
  const num1 = useIntersection({threshold: 0}, "stats__move-right-animation")
  const num2 = useIntersection({threshold: 0}, "stats__move-right-animation")
  const num3 = useIntersection({threshold: 0}, "stats__move-right-animation")
  const num4 = useIntersection({threshold: 0}, "stats__move-right-animation")
  const num5 = useIntersection({threshold: 0}, "stats__move-right-animation")
  const par1 = useIntersection({threshold: 0}, "stats__move-right-animation")
  const par2 = useIntersection({threshold: 0}, "stats__move-right-animation")
  const par3 = useIntersection({threshold: 0}, "stats__move-right-animation")
  const par4 = useIntersection({threshold: 0}, "stats__move-right-animation")
  const par5 = useIntersection({threshold: 0}, "stats__move-right-animation")
  const strip1 = useIntersection({threshold: 0}, "stats__strip-animation")
  const strip2 = useIntersection({threshold: 0}, "stats__strip-animation")
  const strip3 = useIntersection({threshold: 0}, "stats__strip-animation")
  const strip4 = useIntersection({threshold: 0}, "stats__strip-animation")
  const strip5 = useIntersection({threshold: 0}, "stats__strip-animation")




  const imageRef = useRef(null);

  useEffect(() => {
    if(window.innerWidth <= 768) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking){
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const positionX = Math.min(300, -400 + scrollY * 0.12);
          if(imageRef.current){
            imageRef.current.style.backgroundPosition = `${positionX}px center`;
          }
          ticking = false;
        });

        ticking = true
      } 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  },[])

  return(
    <section className="stats">
      <h1 ref={heading} className='stats__heading'><span className='stats__heading-span'>We Take Pride in </span><span className='stats__heading-span'>Our Numbers</span></h1>
      <div className='stats__upper-container'>
        <div ref={card1} className="stats__card stats__card--first">
          <h1 ref={num1} className='stats__number stats__number--first'>15</h1>
          <p ref={par1} className='stats__paragraph stats__paragraph--first'>Years of Experience</p>
          <div ref={strip1} className='stats__strip stats__strip--first'></div>
        </div>
        <div ref={card2} className="stats__card stats__card--second">
          <h1 ref={num2} className='stats__number stats__number--second'>10K</h1>
          <p ref={par2} className='stats__paragraph stats__paragraph--second'>Business Partners</p>
          <div ref={strip2} className='stats__strip stats__strip--second'></div>
        </div>
        <div ref={card3} className="stats__card stats__card--third">
          <h1 ref={num3} className='stats__number stats__number--third'>25M</h1>
          <p ref={par3} className='stats__paragraph stats__paragraph--third'>Products Installed</p>
          <div ref={strip3} className='stats__strip stats__strip--third'></div>
        </div>
        <div ref={card4} className="stats__card stats__card--fourth">
          <h1 ref={num4} className='stats__number stats__number--fourth'>22</h1>
          <p ref={par4} className='stats__paragraph stats__paragraph--fourth'>Countries World Wide</p>
          <div ref={strip4} className='stats__strip stats__strip--fourth'></div>
        </div>
        <div ref={card5} className="stats__card stats__card--last">
          <h1 ref={num5} className='stats__number stats__number--last'>5</h1>
          <p ref={par5} className='stats__paragraph stats__paragraph--last'>Industry Awards</p>
          <div ref={strip5} className='stats__strip stats__strip--last'></div>
        </div>
      </div>
      
      <div ref={imageRef} className='stats__lower-container'></div>
    </section>
  );
}

export default Stats;