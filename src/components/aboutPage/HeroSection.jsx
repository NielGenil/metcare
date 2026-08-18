import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";
import aboutImage from "/images/about/building.webp";

function HeroSection() {
  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat py-20 lg:py-15">
      <div
        className="absolute inset-0
      bg-[url('/images/about/bg.webp')]
      bg-cover bg-center bg-no-repeat
      opacity-80
      [mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_100%)]"
      />
      <div className="relative z-10">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader
                badge="About Us"
                title="Your Trusted Biomedical Engineering Partner"
                description="MetCare provides biomedical engineering solutions for hospitals, clinics, laboratories, and healthcare facilities. Our commitment is to ensure medical equipment remains safe, reliable, and compliant with industry standards."
                center={false}
              />

              <p className="mt-6 sm:text-lg leading-8 text-slate-600">
                We specialize in preventive maintenance, calibration, repair,
                installation, and technical support for a wide range of medical
                devices. Our experienced team is dedicated to delivering quality
                service that supports better patient care.
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src={aboutImage}
                alt="About MetCare"
                className="w-auto sm:h-120"
              />
            </motion.div>
          </div>
          <div className="mt-6 sm:text-lg leading-8 text-slate-600">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p>
                Since establishment in 2015, METCARE Biomedical Corporation has
                been providing biomedical services such as calibration,
                preventive maintenance and repair of medical dental and
                laboratory equipment.
              </p>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default HeroSection;
