import Container from "../ui/Container";
import services from "../../data/services";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

function Services() {
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
            badge="Our Services"
            title="Comprehensive Biomedical Engineering Solutions"
            description="We provide preventive maintenance, calibration, repair, installation, and technical support to help healthcare facilities keep their medical equipment operating safely and efficiently."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl border border-gray-200 p-8 transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-xl bg-teal-100 p-4 text-2xl text-teal-600">
                    <Icon />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-slate-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Services;
