import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import MetricsStrip from "./components/MetricsStrip.jsx";
import GenieSection from "./components/GenieSection.jsx";
import Benchmarks from "./components/Benchmarks.jsx";
import ProjectsGrid from "./components/ProjectsGrid.jsx";
import Timeline from "./components/Timeline.jsx";
import Certs from "./components/Certs.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ChatLauncher from "./components/chat/ChatLauncher.jsx";
import SectionDivider from "./components/SectionDivider.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <MetricsStrip />
        <GenieSection />
        <SectionDivider />
        <Benchmarks />
        <SectionDivider />
        <ProjectsGrid />
        <SectionDivider />
        <Timeline />
        <SectionDivider />
        <Certs />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <ChatLauncher />
    </div>
  );
}
