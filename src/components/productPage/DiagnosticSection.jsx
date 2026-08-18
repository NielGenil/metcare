import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { diagnosticImaging } from "../../data/products";

function DiagnosticSection() {
  return (
    <section className="py-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader title="Diagnostic Imaging Systems" />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {diagnosticImaging.map((product) => {
              return (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{product.title}</h3>

                    <p className="mt-3 text-slate-600">{product.description}</p>
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

export default DiagnosticSection;
