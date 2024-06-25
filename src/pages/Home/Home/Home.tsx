import Slider from "../Slider/Slider";
import TabDescription from "../TabDescription/TabDescription";
import GreetingsSection from "../GreetingsSection/GreetingsSection";
import SubscriptionBox from "../SubscriptionBox/SubscriptionBox";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <GreetingsSection />
      <SubscriptionBox></SubscriptionBox>
      <TabDescription />
    </div>
  );
};

export default Home;
