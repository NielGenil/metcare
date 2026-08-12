import { FaCircleCheck, FaScrewdriverWrench } from "react-icons/fa6";
import { motion } from "framer-motion";
import Container from "../ui/Container";

import whyChooseUs from "../../data/whyChooseUs";
import whyImage from "../../assets/images/why-choose-us.jpg";
import SectionHeader from "../ui/SectionHeader";
import { FaUserCheck } from "react-icons/fa";
import { MdHealthAndSafety, MdQuickreply } from "react-icons/md";


function WhyChooseUs() {
  return (
    <section className="bg-slate-100 py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
                badge="Why Choose Us"
                title="Trusted Healthcare Engineering Partner"
                description="We help hospitals, laboratories, and healthcare facilities maintain safe, accurate, and reliable medical equipment through professional biomedical engineering solutions."
                // center={false}
              />




          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-10">
            {whyChooseUs.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-3 border rounded-md p-5 border-slate-300 bg-white"
                >
                  <div className="flex gap-2 items-center">
                  <div className="inline-flex rounded-xl bg-teal-100 p-3 text-lg text-teal-600">
                    <Icon />
                  </div>

                  <h3 className="font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  </div>

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

export default WhyChooseUs;
