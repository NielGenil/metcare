import FeaturedProducts from "../components/homePage/FeaturedProducts";
import Hero from "../components/homePage/Hero";
import Services from "../components/homePage/Services";
import WhyChooseUs from "../components/homePage/WhyChooseUs";
import CompanyIntroduction from "../components/homePage/CompanyIntroduction";
import LatestUpdatesSection from "../components/homePage/LatestUpdatesSection";

function Home() {
  return (
    <>
      <Hero />
      <CompanyIntroduction />
      <Services />
      <FeaturedProducts />
      <WhyChooseUs />
      <LatestUpdatesSection />
      {/* <Process /> */}
    </>
  );
}

export default Home;
