import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PopularCity from "./components/PopularCity";
import PopularProfiles from "./components/PopularProfile";
import PrivateTripSection from "./components/PrivateTripSection";
import Articles from "./components/Articles";
import Slider from "./components/Slider";
import Testimoni from "./components/Testimoni";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Slider />
        <PopularProfiles />
        <PrivateTripSection />
        <PopularCity />
        <Testimoni />
        <Articles />
      </div>
      <Footer />

      {/* Global CSS */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #ccc;
        }

        .swiper-pagination-bullet-active {
          background-color: #c00;
        }
      `}</style>
    </>
  );
}

export default App;
