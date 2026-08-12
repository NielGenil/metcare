import Container from "../ui/Container";
import services from "../../data/services";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

function Services() {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge="Our Services"
            title="Complete biomedical care maintenance, calibration, and support to keep your equipment reliable."
            description="We provide preventive maintenance, calibration, repair, and installation to help healthcare facilities keep their medical equipment operating safely and efficiently."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {services.slice(0, 3).map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl bg-white border border-gray-200 p-8 transition hover:-translate-y-2 hover:shadow-xl"
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

          <div className="w-full flex justify-center">
            <Button to="/services">Learn more</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Services;
