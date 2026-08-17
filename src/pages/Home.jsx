import FeaturedProducts from "../components/homePage/FeaturedProducts";
import Hero from "../components/homePage/Hero";
import Services from "../components/homePage/Services";
import WhyChooseUs from "../components/homePage/WhyChooseUs";
import CompanyIntroduction from "../components/homePage/CompanyIntroduction";

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
