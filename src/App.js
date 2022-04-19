
import './App.css';
import BestHost from './components/BestHost/BestHost';
import BookTicket from './components/BookTicket/BookTicket';
import Browser from './components/Browser/Browser';
import Explore from './components/Explore/Explore';
import Flamingo from './components/Flamingo/Flamingo';
import HeaderImage from './components/HeaderImage/HeaderImage';
import HowItWork from './components/HowItWork/HowItWork';
import LiveAnyWhere from './components/LiveAnyWhere/LiveAnyWhere';
import Navbar from './components/Navbar/Navbar';
import Planning from './components/Planning/Planning';
import Slider from './components/Slider/Slider';
import GoSomeWhere from './components/SoSomeWhere/GoSomeWhere';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeaderImage/>
      <Slider/>
      <Flamingo/>
      <HowItWork/>
      <LiveAnyWhere/>
      <GoSomeWhere/>
      <Planning/> 
      <Browser/>
      <Explore/>  
      <BestHost/>
      <BookTicket/>
    </div>
  );
}

export default App;
