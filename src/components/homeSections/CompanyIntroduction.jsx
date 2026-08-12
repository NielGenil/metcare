import Container from "../ui/Container";
import services from "../../data/services";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

function CompanyIntroduction() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge="About Us"
            title="Your Trusted Biomedical Partner"
            description="Since establishment in 2015, METCARE Biomedical Corporation has been providing biomedical services such as calibration, preventive maintenance and repair of medical dental and laboratory equipment."
          />

        </motion.div>
      </Container>
    </section>
  );
}

export default CompanyIntroduction;
