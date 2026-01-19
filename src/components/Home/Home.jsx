import './Home.scss'
import Hero from './Hero/Hero';
import Second from './Second/Second';
import Third from './Third/Third';
import Stats from './Stats/Stats';
import Last from './Last/Last';


function Home(){
  return(
    <main className='main'>
      <Hero />
      <Second />
      <Third />
      <Stats />
      <Last />
    </main>
  );
}

export default Home;