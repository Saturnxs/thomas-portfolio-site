import { useEffect, useState } from "react";
import { SideNavbar } from "./Components/SideNavbar";
import { SnapContent } from "./Components/SnapContent";
import { MobileNavbar } from "./Components/MobileNavbar";

const App: React.FC = () => {

  const [isResponsive, setIsResponsive] = useState(false);

  const handleResize = () => {
    window.innerWidth < 768 ? setIsResponsive(true) : setIsResponsive(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  return (
    <>
      {isResponsive ? <MobileNavbar /> : <SideNavbar />}
      <SnapContent />
    </>
  );
}

export { App };
