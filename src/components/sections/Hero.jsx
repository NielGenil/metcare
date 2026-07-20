import heroImage from "../../assets/images/hero-image.jpg";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Container from "../ui/Container";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              Trusted Biomedical Engineering Solutions
            </span>

            <h1 className="mt-6 text-3xl font-bold leading-tight text-slate-900 lg:text-6xl">
              Keeping Healthcare Equipment Reliable and Ready
            </h1>

            <p className="mt-6 sm:text-lg leading-8 text-slate-600">
              MetCare provides preventive maintenance, calibration, repair, and
              medical equipment solutions for hospitals, clinics, and healthcare
              facilities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact">Contact Us</Button>

              <Button to="/services" variant="secondary">
                Our Services
              </Button>
            </div>

            {/* <div className="mt-10 space-y-3">
              <p>✔ Preventive Maintenance</p>
              <p>✔ Calibration Services</p>
              <p>✔ Equipment Repair</p>
            </div> */}
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={heroImage}
                alt="Biomedical Engineer"
                className="w-full max-w-lg rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
