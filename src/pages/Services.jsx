import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import { motion } from "framer-motion";
import aboutImage from "../assets/images/about.jpg";
import services from "../data/services";

function Services() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 mb-20 sm:mb-40">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              badge="Our Services"
              title="Complete biomedical care-maintenance, calibration, and support to keep your equipment reliable."
              description="Founded in 2015, METCARE Biomedical Corporation specializes in comprehensive biomedical services, offering expert calibration, preventive maintenance, and repair for medical, dental, and laboratory equipment."
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
