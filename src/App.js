import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Newsfeed from "./pages/Newsfeed";
import Events from "./pages/Events";
import Opinion from "./pages/Opinion";
import About from "./pages/aboutUs";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Newsfeed />} />
          <Route path="/events" element={<Events />} />
          <Route path="/opinion" element={<Opinion />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
