import AboutHeroSection from "../components/About/AboutHeroSection";
import CompanyOverviewSection from "../components/About/CompanyOverviewSection";
import MissionValuesSection from "../components/About/MissionValuesSection";
import TeamSection from "../components/About/TeamSection";
import AboutCTASection from "../components/About/AboutCTASection";
import ChatbotSection from "../components/Sections/ChatbotSection";
import "../components/About/About.css";

const Sobre = () => {
  return (
    <main>
      {/* Hero Section */}
      <AboutHeroSection />

      {/* Company Overview Section */}
      <CompanyOverviewSection />

      {/* Mission and Values Section */}
      <MissionValuesSection />

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <AboutCTASection />

      {/* Chatbot Section */}
      <ChatbotSection />
    </main>
  );
};

export default Sobre;
