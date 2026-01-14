import './Third.scss'
import { useIntersection } from '../../../useIntersection'


function Third(){

  const heading = useIntersection({threshold: 0}, "third__move-up-animation")
  const paragraph1 = useIntersection({threshold: 0}, "third__move-up-animation")
  const paragraph2 = useIntersection({threshold: 0}, "third__move-up-animation")
  const button = useIntersection({threshold: 0}, "third__move-up-animation")

  return(
    <section className="third">
      <div className="third__main-container">
        <div className="third__first-container">
          <h1 ref={heading} className='third__heading'>Unprecedented Velocity. Impeccable Reliability.</h1>
        </div>

        <div className="third__second-container">
          <p ref={paragraph1} className='third__paragraph third__paragraph--first'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          <p ref={paragraph2} className='third__paragraph third__paragraph--second'>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
          <button ref={button} className='third__learn-button'>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Third;