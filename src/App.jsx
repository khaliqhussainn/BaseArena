import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import BottomHeader from "./components/BottomHeader";
import main2 from "../src/assets/hero/hero.jpg";
import FAQSection from "./components/FAQSection";
// import HeroSec from "./components/HeroSec";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <BottomHeader />
        <Hero />
        {/* <HeroSec /> */}
        <Benefits />
        {/* <Collaboration /> */}
        {/* <Services /> */}
        {/* <Pricing /> */}
        <Roadmap />
        <FAQSection />
        <Footer />
      </div>
      <ButtonGradient />
      {/* <Mouse /> */}
    </>
  );
};

export default App;
