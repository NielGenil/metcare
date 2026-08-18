import Container from "../ui/Container";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import aboutImage from "../../assets/images/about-us.webp";

function CompanyIntroduction() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              badge="About Us"
              title="Trusted Biomedical Engineering Partner"
              description="Since establishment in 2015, METCARE Biomedical Corporation has been providing biomedical services such as calibration, preventive maintenance and repair of medical dental and laboratory equipment."
              center={false}
            />
          </motion.div>

          {/* Right */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={aboutImage}
              alt="About MetCare"
              className="w-full"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default CompanyIntroduction;
