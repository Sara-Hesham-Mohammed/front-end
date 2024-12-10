import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Newsfeed from "./pages/Newsfeed";
import Events from "./pages/Events";
import Opinion from "./pages/Opinion";
import About from "./pages/aboutUs";
import WeatherComponent from './components/WeatherWidget';
import Footer from './components/Footer';
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
      
      <WeatherComponent/>

      <Footer/>
      </>
  );
}

export default App;
