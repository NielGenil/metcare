import Button from "../ui/Button";
import Container from "../ui/Container";
import products from "../../data/products";
import SectionHeader from "../ui/SectionHeader";

function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeader
          badge="Featured Products"
          title="Medical Equipment"
          description="Explore some of the quality medical equipment we provide to hospitals, clinics, and healthcare facilities."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
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
                <h3 className="text-xl font-semibold">{product.name}</h3>

                <Button to="/products" className="mt-6 w-full">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProducts;
