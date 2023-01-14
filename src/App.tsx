import { useEffect, useState } from "react";
import { LeftSideBar } from "./Components/LeftSideBar/LeftSideBar";
import { RightSideBar } from "./Components/RightSideBar/RightSideBar";

const App: React.FC = () => {

  const [isLit, setIsLit] = useState(false);
  const [blinkCounter, setBlinkCounter] = useState(0);

  useEffect(() => {
      const intervalId = window.setInterval(() => {
        setIsLit(blinkCounter < 5 ? !isLit : true);
        setBlinkCounter(prevCounter => prevCounter + 1);
        if (blinkCounter >= 5) clearInterval(intervalId);
      }, blinkCounter < 5 ? 150 : 2000);
  
      return () => clearInterval(intervalId);
    }, [isLit, blinkCounter]);
    
  return (
    <>
      <LeftSideBar isLit={isLit}/>
      <div className="main-content">
        <div className="main-content-container">
          <div className="main-content-container-inner">
            <h1 className={isLit ? 'light-on' : ''}>Thomas Bermudez Mora</h1>
            <h2 className={isLit ? 'light-on' : ''}>Software Engineer</h2>
            <p className={isLit ? 'light-on' : ''}>I am a software engineer with a passion for building web applications. I am currently working as a full stack developer at where I am responsible for the development of the company's web applications.</p>
            <p className={isLit ? 'light-on' : ''}>I am also a freelance developer and I am currently working on a few projects. If you are interested in working with me, please contact me at</p>
          </div>
        </div>
      </div>
      <RightSideBar isLit={isLit}/>
    </>
  );
}

export { App };
