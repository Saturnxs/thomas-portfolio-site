import { useEffect, useState } from "react";
import { LeftSideBar } from "./Components/LeftSideBar/LeftSideBar";

function App() {

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
    </>
  );
}

export { App };
