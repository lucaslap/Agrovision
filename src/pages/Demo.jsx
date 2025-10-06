import { useEffect } from 'react';
import DemoHeroSection from '../components/Demo/DemoHeroSection';
import DashboardDemo from '../components/Demo/DashboardDemo';
import SatelliteDemo from '../components/Demo/SatelliteDemo';
import AnalyticsDemo from '../components/Demo/AnalyticsDemo';
import DroneDemo from '../components/Demo/DroneDemo';
import FeatureToggle from '../components/Demo/FeatureToggle';
import DemoCTASection from '../components/Demo/DemoCTASection';
import '../components/Demo/Demo.css';

const Demo = () => {
  useEffect(() => {
    document.title = "AgroVision - Demonstração da Plataforma";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <DemoHeroSection />

      {/* Dashboard Overview */}
      <DashboardDemo />

      {/* Feature Toggle */}
      <FeatureToggle />

      {/* Satellite Monitoring Demo */}
      <SatelliteDemo />

      {/* Data Analytics Demo */}
      <AnalyticsDemo />

      {/* Drone Operations Demo */}
      <DroneDemo />

      {/* CTA Section */}
      <DemoCTASection />
    </main>
  );
};

export default Demo;
