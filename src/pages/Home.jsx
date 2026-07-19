import FeaturedProducts from "../components/sections/FeaturedProducts";
import Hero from "../components/sections/Hero";
import Process from "../components/sections/Process";
import Services from "../components/sections/Services";
import WhyChooseUs from "../components/sections/WhyChooseUs";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <FeaturedProducts />
      <Process />
    </>
  );
}

export default Home;