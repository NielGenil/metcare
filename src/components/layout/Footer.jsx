import { Link } from "react-router-dom";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import logo from "../../assets/images/logo.jpg";
import Container from "../ui/Container";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-emerald-800 to-teal-950 text-white border-t border-emerald-700">
      <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5 sm:px-40 p-10">
        {/* Company */}
        <div>
          <img src={logo} alt="MetCare" className="sm:h-10  h-9" />
          {/* <h2 className="text-2xl font-bold text-white">MetCare</h2> */}

          <p className="mt-2 text-teal-400">Biomedical Corporation</p>

          <p className="mt-6 leading-7">
            Your Partner in Quality Health Care Delivery.
          </p>
        </div>

        {/* Quick Links */}
        {/* <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div> */}

        {/* Equipment Rental */}
        <div>
          <h3 className="text-lg font-semibold text-white">Equipment Rental</h3>

          <ul className="mt-6 space-y-3">
            <li>Critical Care Equipment</li>
            <li>Infant Care Equipment</li>
            <li>Respiratory Therapy Equipment</li>
            <li>Patient Monitoring Equipment</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white">Services</h3>

          <ul className="mt-6 space-y-3">
            <li>Pulmonary Services</li>
            <li>Homecare Services</li>
            <li>Biomedical Engineering Services</li>
            <li>Asset Management Services</li>
          </ul>
        </div>

        {/* Our Products */}
        <div>
          <h3 className="text-lg font-semibold text-white">Our Products</h3>

          <ul className="mt-6 space-y-3">
            <li>Equipment</li>
            <li>Equipment Parts and Accessories</li>
            <li>Medical Supplies</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <FaLocationDot className="mt-1 text-teal-400" />
              <span>
                Blk 55 Lot 19 Athens St. Town and Country Southville, Biñan
                City, 4024 Laguna
              </span>
            </div>

            {/* <div className="flex items-center gap-3">
              <FaPhone className="text-teal-400" />
              <span>+63 000 000 0000</span>
            </div> */}

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-teal-400" />
              <span>metcare.biomedical@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-400 py-6 text-center text-sm">
        © {new Date().getFullYear()} MetCare. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
