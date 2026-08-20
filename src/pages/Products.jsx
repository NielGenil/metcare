import DiagnosticSection from "../components/productPage/DiagnosticSection";
import DigitalHealthSection from "../components/productPage/DigitalHealthSection";
import HeroSection from "../components/productPage/HeroSection";
import IcuCriticalSection from "../components/productPage/IcuCriticalSection";
import MaternalCalibrationSection from "../components/productPage/MaternalCalibrationSection";
import SterilazationSection from "../components/productPage/SterilazationSection";
import SurgicalOperatingSection from "../components/productPage/SurgicalOperatingSection";

function Products() {
    return(
        <>
        <HeroSection />
        <DiagnosticSection/>
        <SurgicalOperatingSection />
        <IcuCriticalSection />
        <MaternalCalibrationSection />
        <SterilazationSection />
        <DigitalHealthSection />
        </>
    )
}

export default Products;