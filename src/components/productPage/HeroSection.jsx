import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

function HeroSection() {
  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat py-20 lg:py-15">
      <div
        className="absolute inset-0
      bg-[url('/images/services/bg.webp')]
      bg-cover bg-center bg-no-repeat
      opacity-80
      [mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_95%,transparent_100%)]"
      />
      <div className="relative z-10">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[4fr_2fr]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              badge="Our Products"
              title="Sales of medical, dental and laboratory equipment and consumables."
              description="METCARE Biomedical Corporation is a trusted provider of innovative and reliable healthcare solutions. We specialize in the supply, installation, and servicing of high-quality medical, dental, and laboratory equipment, as well as consumables sourced from leading global and local manufacturers. Our commitments is to support healthcare institutions with safe, efficient, and technologically advanced equipment that enhance patient care and operation efficiency."
              center={false}
            />

            {/* <p className="mt-6 leading-8 text-slate-600">
              We specialize in preventive maintenance, calibration, repair,
              installation, and technical support for a wide range of medical
              devices. Our experienced team is dedicated to delivering quality
              service that supports better patient care.
            </p> */}
          </motion.div>

          {/* Right */}
          {/* <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={aboutImage}
              alt="About MetCare"
              className="w-full rounded-3xl shadow-xl"
            />
          </motion.div> */}
        </div>
      </Container>
      </div>
    </section>
  );
}

export default HeroSection;
