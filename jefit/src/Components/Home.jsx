import Footer from "./footer"

import DisplayCard from "./DisplayCard"
import Workoutneed from './Workoutneed';
import SmartWatch from './SmartWatch';
import ProgressTracker from './ProgressTracker';
import Cards from './Cards';
import Plans from './Plans';
import Slider from './Slider';

function Home() {
  return (
    <div >
      
      <DisplayCard/>
      <Slider/>
      <Workoutneed/>
      <SmartWatch/>
      <ProgressTracker/>
      <Cards/>
      <br/>
      <Plans/>
      <br/>
      <Footer/>
      
    </div>
  );
}
export default Home