import Container from "../ui/Container";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";


function BusinessCompetitiveSection() {
  return (
    <section className="py-20 bg-slate-50/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge="Business Competitiveness"
            title="Partnering for Better Healthcare"
            description="Metcare Biomedical Corporation offers competitive rates and unparalled service. Its high level of equality, convenience, and the exceptional customer service experience are what it brings to its customers. Metcare aims to be your partner in quality healthcare delivery."
          />
        </motion.div>
      </Container>
    </section>
  );
}

export default BusinessCompetitiveSection;
