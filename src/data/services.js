import {
  FaScrewdriverWrench,
  // FaStethoscope,
  FaHeartPulse,
  FaHospital,
  FaTruckMedical,
  FaUserDoctor,
} from "react-icons/fa6";

const services = [
  {
    title: "Preventive Maintenance",
    description:
      "Routine inspections and maintenance to ensure medical equipment performs safely and reliably.",
    icon: FaScrewdriverWrench,
  },
  {
    title: "Calibration Services",
    description:
      "Accurate calibration of medical devices following industry standards and best practices.",
    icon: FaHeartPulse,
  },
  {
    title: "Equipment Repair",
    description:
      "Fast and reliable repair services to minimize equipment downtime.",
    icon: FaScrewdriverWrench,
  },
  {
    title: "Installation & Commissioning",
    description:
      "Professional installation and testing of medical equipment before operation.",
    icon: FaHospital,
  },
  {
    title: "Medical Equipment Supply",
    description:
      "Supply of quality medical devices and healthcare equipment for hospitals and clinics.",
    icon: FaTruckMedical,
  },
  {
    title: "Technical Support",
    description:
      "Responsive technical assistance and consultation for healthcare facilities.",
    icon: FaUserDoctor,
  },
];

export default services;