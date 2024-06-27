import Slider from "../Slider/Slider";
import TabDescription from "../TabDescription/TabDescription";
import GreetingsSection from "../GreetingsSection/GreetingsSection";
import SubscriptionBox from "../SubscriptionBox/SubscriptionBox";
import LandingParallax from "../LandingParallax/LandingParallax";
import AuthoritySection from "../AuthoritySection/AuthoritySection";
import GallerySection from "../GallerySection/GallerySection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>TGAHS | Home</title>
      </Helmet>
      <Slider></Slider>
      <div className="px-3 md:px-0">
        {" "}
        <AuthoritySection></AuthoritySection>
        <GreetingsSection />
        <SubscriptionBox></SubscriptionBox>
        <LandingParallax />
        <TabDescription />
      </div>
      <GallerySection />
    </>
  );
};

export default Home;
