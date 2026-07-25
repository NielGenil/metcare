import { FaCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
import Container from "../ui/Container";

import whyChooseUs from "../../data/whyChooseUs";
import whyImage from "../../assets/images/why-choose-us.jpg";
import SectionHeader from "../ui/SectionHeader";

function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image */}

            <div>
              <img
                src={whyImage}
                alt="Biomedical Engineer"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div>
              <SectionHeader
                badge="Why Choose Us"
                title="Trusted Healthcare Engineering Partner"
                description="We help hospitals, laboratories, and healthcare facilities maintain safe, accurate, and reliable medical equipment through professional biomedical engineering solutions."
                center={false}
              />

              <div className="mt-10 space-y-5">
                {whyChooseUs.map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <FaCircleCheck className="text-2xl text-teal-600" />

                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
