import Button from "../ui/Button";
import Container from "../ui/Container";
import products from "../../data/products";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge="Featured Products"
            title="Equip Your Facility"
            description="Explore some of the quality equipment we provide to hospitals, clinics, and healthcare facilities."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.name}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-6">
                    <div className="flex items-center gap-2">
                    <div className="inline-flex rounded-xl bg-teal-100 p-2 text-2xl text-teal-600">
                      <Icon />
                    </div>
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    </div>

                    <Button to="/products" className="mt-6 w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default FeaturedProducts;
