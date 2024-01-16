import './home.css'

import UseStateBox from './components/useState/useState';
import HoistState from './components/hoistState/hoistState';
import Image from './components/image';
import TickTackToe from '../../components/tick-tack-toe/game/ticktacktoe';


function Home(){

  let html = (
    <div className='home-container'>

        <div className='home-image-container'>
          <div className='home-title'>
            React
          </div>
          <a href='https://react.dev/learn' className='home-page-button ref'>
            Learn
          </a>
          <Image/>
        </div>
        
        <div className='row-a row'>
          <UseStateBox/>
          <HoistState/>
        </div>
        <div className='row-b row row'>
          <div className='tic-tac-toe-container'>
            <TickTackToe/>
          </div>
        </div>
      
    </div>
  );
  return html;
}

export default Home