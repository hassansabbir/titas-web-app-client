import Slider from "../Slider/Slider";
import TabDescription from "../TabDescription/TabDescription";
import GreetingsSection from "../GreetingsSection/GreetingsSection";
import SubscriptionBox from "../SubscriptionBox/SubscriptionBox";
import LandingParallax from "../LandingParallax/LandingParallax";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <GreetingsSection />
      <SubscriptionBox></SubscriptionBox>
      <LandingParallax />
      <TabDescription />
    </div>
  );
};

export default Home;
