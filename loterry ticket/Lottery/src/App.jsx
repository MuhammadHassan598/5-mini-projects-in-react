import Lottery from './Lottery'
import { useState } from 'react';
import './App.css'
import Background from "/src/assets/Background.mp4";
import Background1 from "/src/assets/Background1.mp4";
function App() {

  const [isWin, setIsWin] = useState(false);
  const handleWin = () => {
    setIsWin(true);
  };
  const resetWin = () => {
    setIsWin(false);
  };


  return (
    <>
      <div className="background-video">
        <video autoPlay muted loop id="background-video" className={isWin ? 'hidden' : ''}>
          <source src={Background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video autoPlay muted loop id="background-video" className={isWin ? '' : 'hidden'}>
          <source src={Background1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Lottery n={3} winSum={15} onWin={handleWin} onReset={resetWin} />
      </div>
    </>
  )
}

export default App
