import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { maternal, calibration } from "../../data/products";

function MaternalCalibrationSection() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid items-stretch gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex h-full flex-col items-center"
          >
            <SectionHeader title="Maternal & NICU Care" />

            <div className="mt-14 flex w-full flex-1">
              {maternal.map((product) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex h-[520px] sm:h-[450px] w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full shrink-0 object-cover"
                  />

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold">{product.title}</h3>

                    <p className="mt-3 text-slate-600">{product.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex h-full flex-col items-center"
          >
            <SectionHeader title="Calibration & Testing Equipment" />

            <div className="mt-14 flex w-full flex-1">
              {calibration.map((product) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex h-[520px] sm:h-[450px] w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full shrink-0 object-cover"
                  />

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold">{product.title}</h3>

                    <p className="mt-3 text-slate-600">{product.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default MaternalCalibrationSection;
