import Slider from "../Slider/Slider";
// import TabDescription from "../TabDescription/TabDescription";
import GreetingsSection from "../GreetingsSection/GreetingsSection";
import SubscriptionBox from "../SubscriptionBox/SubscriptionBox";
import LandingParallax from "../LandingParallax/LandingParallax";
import AuthoritySection from "../AuthoritySection/AuthoritySection";
import GallerySection from "../GallerySection/GallerySection";
import { Helmet } from "react-helmet-async";
import { motion, useScroll } from "framer-motion";
import AlumniMarquee from "../AlumniMarquee/AlumniMarquee";
import ButtonGroups from "../HomeScreenNavigation/ButtonGroups.tsx";

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="h-2 md:mt-12 mt-16 w-full mx-auto fixed top-0 bg-gradient-to-r from-indigo-800 via-purple-800 to-sky-900 z-50"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <Helmet>
        <title>TGAHS | Home</title>
      </Helmet>
      <Slider></Slider>
      <ButtonGroups></ButtonGroups>
      <div className="px-3 md:px-0">
        <AuthoritySection></AuthoritySection>
        <GreetingsSection />
        <LandingParallax />
        {/* <TabDescription /> */}
      </div>
      <GallerySection />

      <AlumniMarquee />
      <SubscriptionBox></SubscriptionBox>
    </>
  );
};

export default Home;
