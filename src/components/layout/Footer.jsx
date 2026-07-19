import { Link } from "react-router-dom";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

import Container from "../ui/Container";

function Footer() {
  return (
    <footer className="bg-emerald-950 text-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              MetCare
            </h2>

            <p className="mt-2 text-teal-400">
              Healthcare Solutions
            </p>

            <p className="mt-6 leading-7">
              Keeping healthcare equipment reliable,
              accurate, and ready for patient care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-3">
              <li>Preventive Maintenance</li>
              <li>Calibration</li>
              <li>Equipment Repair</li>
              <li>Equipment Supply</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <FaLocationDot className="mt-1 text-teal-400" />
                <span>Santa Rosa, Laguna</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-teal-400" />
                <span>+63 912 345 6789</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-teal-400" />
                <span>info@metcare.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 py-6 text-center text-sm">
          © {new Date().getFullYear()} MetCare. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;