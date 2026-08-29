import Container from "../ui/Container";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import image from "/public/images/products/nipro.jpg";
import Button from "../ui/Button";

function NiproSection() {
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
            badge="Nipro"
              title="Nipro Medical Equipment"
              description="Metcare is an authorized distributor of Nipro Medical Europe, Download official brochures below or contact our sales team for direct product specifications and institutional quotes."
              center={false}
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/broshures/Surdial-55Plus.pdf">
                <Button>SURDIAL 55PLUS</Button>
              </a>
              <a href="/broshures/Elisio.pdf">
                <Button variant="secondary">ELISIO</Button>
              </a>
              <a href="/broshures/Elisio-HX.pdf">
                <Button>ELISIO HX</Button>
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={image}
              alt="About Metcare"
              className="sm:h-120 h-auto"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default NiproSection;
