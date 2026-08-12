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
import { BsFillClipboard2CheckFill } from "react-icons/bs";


const services = [
  {
    title: "Biomedical Engineering",
    description:
      "Expert engineering solutions covering the installation, preventive maintenance, and repair of medical, dental, and laboratory equipment to ensure optimal performance and safety.",
    icon: IoMdSettings,
  },
  {
    title: "Calibration Services",
    description:
      "Precision testing and adjustment of medical devices and tools to guarantee accurate readings, reliable operation, and strict regulatory compliance.",
    icon: FaDraftingCompass,
  },
  {
    title: "Training Consultancy",
    description:
      "Professional guidance and hands-on training to empower hospital staff in operating, maintaining, and managing biomedical equipment efficiently and safely.",
    icon: BsFillClipboard2CheckFill ,
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