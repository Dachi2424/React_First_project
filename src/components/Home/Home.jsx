import './Home.scss'
import Hero from './Hero/Hero';
import Second from './Second/Second';
import Third from './Third/Third';
import Stats from './Stats/Stats';


function Home(){
  return(
    <>
      <Hero />
      <Second />
      <Third />
      <Stats />
    </>
  );
}

export default Home;