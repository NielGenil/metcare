import FeaturedProducts from "../components/homeSections/FeaturedProducts";
import Hero from "../components/homeSections/Hero";
import Services from "../components/homeSections/Services";
import WhyChooseUs from "../components/homeSections/WhyChooseUs";
import CompanyIntroduction from "../components/homeSections/CompanyIntroduction";

function Home() {
  return (
    <>
      <Hero />
      <CompanyIntroduction />
      <Services />
      <FeaturedProducts />
      <WhyChooseUs />
      {/* <Process /> */}
    </>
  );
}

export default Home;
