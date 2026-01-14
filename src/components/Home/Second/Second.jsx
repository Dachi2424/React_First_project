import FirstLogo from '../../../assets/first-card-logo.png'
import SecondLogo from '../../../assets/second-card-logo.png'
import ThirdLogo from '../../../assets/third-card-logo.png'
import FourthLogo from '../../../assets/fourth-card-logo.png'
import { useIntersection } from '../../../useIntersection'
import './Second.scss'

function Second(){

  const heading = useIntersection({threshold: .5}, "second__move-up-animation");
  const paragraph = useIntersection({threshold: .3}, "second__move-up-animation");
  const card1 = useIntersection({rootMargin: "90px"}, "second__move-up-animation");
  const card2 = useIntersection({rootMargin: "90px"}, "second__move-up-animation");
  const card3 = useIntersection({rootMargin: "90px"}, "second__move-up-animation");
  const card4 = useIntersection({rootMargin: "90px"}, "second__move-up-animation");
  const card1Logo = useIntersection({threshold: 0}, "second__move-right-animation");
  const card2Logo = useIntersection({threshold: 0}, "second__move-right-animation");
  const card3Logo = useIntersection({threshold: 0}, "second__move-right-animation");
  const card4Logo = useIntersection({threshold: 0}, "second__move-right-animation");
  const card1Heading = useIntersection({threshold: 0}, "second__move-right-animation");
  const card2Heading = useIntersection({threshold: 0}, "second__move-right-animation");
  const card3Heading = useIntersection({threshold: 0}, "second__move-right-animation");
  const card4Heading = useIntersection({threshold: 0}, "second__move-right-animation");
  const card1P = useIntersection({threshold: 0}, "second__move-right-animation");
  const card2P = useIntersection({threshold: 0}, "second__move-right-animation");
  const card3P = useIntersection({threshold: 0}, "second__move-right-animation");
  const card4P = useIntersection({threshold: 0}, "second__move-right-animation");



  return (
    <section className="second">
      <div className="second__main-container">
        <div className='second__first-container'>
          <div className='second__heading-container'>
            <h2 ref={heading} className='second__heading'>Let Your Data Take Your Business to Higher Grounds</h2>
            <p ref={paragraph} className='second__paragraph'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
          </div>
        </div>

        <div className='second__second-container'>
          <div className="second__cards-container">
            <div ref={card1} className="second__card second__card--first">
              <div className="second__card-upper-side">
                <img ref={card1Logo} className='second__card-image' src={FirstLogo} alt="Cloud Analytics Modernization" />
                <h2 ref={card1Heading} className='second__card-heading'>Cloud Analytics Modernization</h2>
              </div>
              <div className='second__card-lower-side'>
                <p ref={card1P} className='second__card-paragraph'>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
              </div>
            </div>
            <div ref={card2} className="second__card second__card--second">
              <div className="second__card-upper-side">
                <img ref={card2Logo} className='second__card-image' src={SecondLogo} alt="Cloud Analytics Modernization" />
                <h2 ref={card2Heading} className='second__card-heading'>Versatility in Application</h2>
              </div>
              <div className='second__card-lower-side'>
                <p ref={card2P} className='second__card-paragraph'>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
              </div>
            </div>
            <div ref={card3} className="second__card second__card--third">
              <div className="second__card-upper-side">
                <img ref={card3Logo} className='second__card-image' src={ThirdLogo} alt="Cloud Analytics Modernization" />
                <h2 ref={card3Heading} className='second__card-heading'>Data Science Acceleration</h2>
              </div>
              <div className='second__card-lower-side'>
                <p ref={card3P} className='second__card-paragraph'>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
              </div>
            </div>
            <div ref={card4} className="second__card second__card--fourth">
              <div className="second__card-upper-side">
                <img ref={card4Logo} className='second__card-image' src={FourthLogo} alt="Cloud Analytics Modernization" />
                <h2 ref={card4Heading} className='second__card-heading'>Full Customer Experience Service</h2>
              </div>
              <div className='second__card-lower-side'>
                <p ref={card4P} className='second__card-paragraph'>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Second;