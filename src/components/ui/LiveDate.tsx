import moment from "moment";
import { useState, useEffect } from "react";

const LiveDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex gap-5">
      <p>{moment(currentDate.toLocaleDateString()).format("dddd, LL")}</p>
      {/* <p>{moment().format("LTS")}</p> */}
    </div>
  );
};

export default LiveDate;
