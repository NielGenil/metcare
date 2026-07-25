import FeaturedProducts from "../components/homeSections/FeaturedProducts";
import Hero from "../components/homeSections/Hero";
import Process from "../components/homeSections/Process";
import Services from "../components/homeSections/Services";
import WhyChooseUs from "../components/homeSections/WhyChooseUs";

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