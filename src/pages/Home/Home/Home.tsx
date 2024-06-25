import Slider from "../Slider/Slider";

import GreetingsSection from "./GreetingsSection/GreetingsSection";
import SubscriptionBox from "./SubscriptionBox/SubscriptionBox";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <GreetingsSection />
      <SubscriptionBox></SubscriptionBox>
    </div>
  );
};

export default Home;
