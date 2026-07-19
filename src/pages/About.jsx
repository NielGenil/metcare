import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import { motion } from "framer-motion";
import aboutImage from "../assets/images/about.jpg";

function About() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20 lg:py-28">
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

            <p className="mt-6 leading-8 text-slate-600">
              We specialize in preventive maintenance, calibration,
              repair, installation, and technical support for a wide
              range of medical devices. Our experienced team is
              dedicated to delivering quality service that supports
              better patient care.
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
              className="w-full rounded-3xl shadow-xl"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default About;