import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import aboutImage from "../../assets/images/about.jpg";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import { MdQuickreply, MdHealthAndSafety } from "react-icons/md";

function BiomedicalSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 mb-16">
          {/* Left */}
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

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              title="Biomedical Engineering Services"
              description="We are dedicated to keeping healthcare technology safe, accurate, and dependable. Our biomedical engineering services cover equipment testing, calibration, repair, and preventive maintenance—ensuring hospitals and clinics can provide uninterrupted, high-quality care to patients."
              center={false}
            />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-4 gap-10">
          <div className="space-y-3 border rounded-md p-3 border-slate-300">
            <div className="flex gap-2 items-center">
              <div className="inline-flex rounded-xl bg-teal-100 p-3 text-lg text-teal-600">
                <FaScrewdriverWrench />
              </div>
              <h2 className="font-semibold text-slate-900">
                Comprehensive Equipment Maintenance
              </h2>
            </div>

            <p className="text-slate-600">
              Regular preventive maintenance and servicing to keep medical
              devices operating safely, efficiently, and in compliance with
              healthcare standards.
            </p>
          </div>
          <div className="space-y-3 border rounded-md p-3 border-slate-300">
            <div className="flex gap-2 items-center">
              <div className="inline-flex rounded-xl bg-teal-100 p-3 text-lg text-teal-600">
                <FaUserCheck />
              </div>
              <h2 className="font-semibold text-slate-900">
                Certified Technicians
              </h2>
            </div>
            <p className="text-slate-600">
              Our technicians are trained directly by many leading manufacturers
              and follow manufacturers guidelines and repair procedures.
            </p>
          </div>
          <div className="space-y-3 border rounded-md p-3 border-slate-300">
            <div className="flex gap-2 items-center">
              <div className="inline-flex rounded-xl bg-teal-100 p-3 text-lg text-teal-600">
                <MdQuickreply />
              </div>
              <h2 className="font-semibold text-slate-900">
                Quick Response Time
              </h2>
            </div>
            <p className="text-slate-600">
              We want to reduce down-time as much as we can. Our trained
              professionals will respond to your call within 24 hours.
            </p>
          </div>
          <div className="space-y-3 border rounded-md p-3 border-slate-300">
            <div className="flex gap-2 items-center">
              <div className="inline-flex rounded-xl bg-teal-100 p-3 text-lg text-teal-600">
                <MdHealthAndSafety />
              </div>
              <h2 className="font-semibold text-slate-900">
                Compliant with Safety Standards
              </h2>
            </div>
            <p className="text-slate-600">
              Electrical safety inspections are performed to ensure equipment
              complies with electrical safety standards always.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BiomedicalSection;
