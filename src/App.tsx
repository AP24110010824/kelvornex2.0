import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhySection from "./components/WhySection";
import Destinations from "./components/Destinations";
import BookingSteps from "./components/BookingSteps";
import SubBrands from "./components/SubBrands";
import GadgetsPage from "./components/GadgetsPage";
import SoftwarePage from "./components/SoftwarePage";
import EducationPage from "./components/EducationPage";
import ProgramDetail from "./components/ProgramDetail";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [page, setPage] = useState<"home" | "gadgets" | "software" | "education" | "details">("home");
  const [blinkEdu, setBlinkEdu] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showSplash, setShowSplash] = useState(true);

  // scroll to top when switching pages
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  const handleCourseClick = () => {
    setPage("education");
  };

  const handleViewMoreClick = () => {
    // Scroll down to the sub-brands section
    const target = document.getElementById("our-brands-strip");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback
      window.scrollTo({ top: document.body.scrollHeight - 1000, behavior: "smooth" });
    }

    // Trigger blinking border highlight on the Education sub-brand
    setBlinkEdu(true);
    setTimeout(() => {
      setBlinkEdu(false);
    }, 4500); // Blink for 4.5 seconds
  };

  if (page === "gadgets") {
    return <GadgetsPage onBack={() => setPage("home")} />;
  }

  if (page === "software") {
    return <SoftwarePage onBack={() => setPage("home")} />;
  }

  if (page === "education") {
    return (
      <EducationPage 
        onBack={() => setPage("home")} 
        onProgramClick={(program: any) => {
          setSelectedItem(program);
          setPage("details");
        }}
      />
    );
  }

  if (page === "details" && selectedItem) {
    return (
      <ProgramDetail 
        item={selectedItem} 
        onBack={() => setPage("education")}
        onNavigate={(program: any) => {
          setSelectedItem(program);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        brandName="KELVORNEX Education"
        accentColor="#00ccff"
      />
    );
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className="min-h-screen animate-fade-in" style={{ opacity: showSplash ? 0 : 1, transition: "opacity 0.4s ease" }}>
      <Navbar />
      <main className="space-y-4">
        <Hero />
        <BookingSteps showOnlyHireTalents={true} />
        <div className="hover-lift">
          <WhySection />
        </div>
        <div className="hover-lift">
          <Destinations
            onCourseClick={() => setPage("education")}
            onViewMoreClick={handleViewMoreClick}
          />
        </div>
        <BookingSteps showOnlyHireTalents={false} />
        <div id="our-brands-strip" className="hover-lift">
          <SubBrands
            onOpenGadgets={() => setPage("gadgets")}
            onOpenSoftware={() => setPage("software")}
            onOpenEducation={() => setPage("education")}
            highlightEducation={blinkEdu}
          />
        </div>
      </main>
      <Footer />
      </div>
    </>
  );
}
