import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import SermonDetail from "./pages/SermonDetail";
import Media from "./pages/Media";
import Ministries from "./pages/Ministries";
import Booking from "./pages/Booking";
import Outreach from "./pages/Outreach";
import Contact from "./pages/Contact";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/sermons/:slug" element={<SermonDetail />} />
          <Route path="/media" element={<Media />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;