import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CareJourneySection from "@/components/CareJourneySection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import HospitalExperienceSection from "@/components/HospitalExperienceSection";
import HealthKnowledgeSection from "@/components/HealthKnowledgeSection";
import DoctorsSection from "@/components/DoctorsSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <CareJourneySection />
      <WhyChooseUsSection />
      <HospitalExperienceSection />
      <DoctorsSection />
      <SpecialtiesSection />
      <HealthKnowledgeSection />
      <FacilitiesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
