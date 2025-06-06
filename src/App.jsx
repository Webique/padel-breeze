import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen font-sans text-gray-900 bg-fixed bg-cover flex flex-col"
      style={{
        backgroundImage: "url('/wavey-fingerprint.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <Navbar />

      <main className="flex-grow pt-24 px-6 sm:px-12 md:px-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
