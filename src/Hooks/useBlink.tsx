import { useState, useEffect } from 'react';

const useBlink = (): [boolean, () => void] => {
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
  
    const toggleIsLit = () => {
      setIsLit(prevIsLit => !prevIsLit);
      setBlinkCounter(prevCounter => prevCounter + 1);
    }
  
    return [isLit, toggleIsLit];
  }

export { useBlink };