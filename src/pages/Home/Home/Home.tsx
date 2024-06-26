import Slider from "../Slider/Slider";
import TabDescription from "../TabDescription/TabDescription";
import GreetingsSection from "../GreetingsSection/GreetingsSection";
import SubscriptionBox from "../SubscriptionBox/SubscriptionBox";
import LandingParallax from "../LandingParallax/LandingParallax";
import AuthoritySection from "../AuthoritySection/AuthoritySection";

const Home = () => {
  return (
    <>
      <Slider></Slider>
      <div className="px-3">
        {" "}
        <AuthoritySection></AuthoritySection>
        <GreetingsSection />
        <SubscriptionBox></SubscriptionBox>
        <LandingParallax />
        <TabDescription />
      </div>
    </>
  );
};

export default Home;
