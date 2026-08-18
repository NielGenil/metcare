import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import services from "../../data/services";

function BiomedicalSection() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge="Services"
            title="Biomedical Services"
            description="We provide preventive maintenance, calibration, repair, installation, and training to help healthcare facilities keep their medical equipment operating safely and efficiently."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {services.map((service) => {
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-64 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{service.title}</h3>

                    <p className="mt-3 text-slate-600">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default BiomedicalSection;
