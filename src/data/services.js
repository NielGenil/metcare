import {
  FaScrewdriverWrench,
  // FaStethoscope,
  FaHeartPulse,
  FaHospital,
  FaTruckMedical,
  FaUserDoctor,
} from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaDraftingCompass } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";


const services = [
  {
    title: "Biomedical Engineering",
    description:
      "Our engineers use calibrated tools and expert training to deliver reliable, high-quality service.",
    icon: IoMdSettings,
  },
  {
    title: "Calibration Services",
    description:
      "We provide accurate, expert-driven calibration to keep your equipment performing at its best.",
    icon: FaDraftingCompass,
  },
  {
    title: "Asset Management",
    description:
      "We support your hospital in managing equipment use and maintenance every day with our on-site services.",
    icon: MdManageAccounts,
  },
  // {
  //   title: "Installation & Commissioning",
  //   description:
  //     "Professional installation and testing of medical equipment before operation.",
  //   icon: FaHospital,
  // },
  // {
  //   title: "Medical Equipment Supply",
  //   description:
  //     "Supply of quality medical devices and healthcare equipment for hospitals and clinics.",
  //   icon: FaTruckMedical,
  // },
  // {
  //   title: "Technical Support",
  //   description:
  //     "Responsive technical assistance and consultation for healthcare facilities.",
  //   icon: FaUserDoctor,
  // },
];

export default services;