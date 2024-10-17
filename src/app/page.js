import FifthSection from "@/components/FifthSection";
import FirstSection from "@/components/FirstSection";
import Footer from "@/components/Footer";
import ForthSection from "@/components/ForthSection";
import SecondSection from "@/components/SecondSection";
import SixthSection from "@/components/SixthSection";
import ThirdSection from "@/components/ThirdSection";

export default function Home() {
  return (
    <body>
      <div className="container mx-auto">
        <FirstSection />
        <SecondSection />
      </div>
      <ThirdSection />
      <div className="container mx-auto">
        <ForthSection />
        <FifthSection />
      </div>
      <SixthSection />
      <Footer />
    </body>
  );
}
