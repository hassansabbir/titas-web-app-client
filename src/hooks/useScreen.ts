import { useEffect, useState } from "react";

const useScreen = (): number => {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  const handleSet = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    handleSet();
    window.addEventListener("resize", handleSet);
    return () => window.removeEventListener("resize", handleSet);
  }, []);
  return screenSize;
};

export default useScreen;
