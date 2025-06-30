import { BrowserRouter, Routes, Route } from "react-router-dom";
HomeWithIntro
import About from './Pages/About';
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Tools from "./Pages/Tools";
import HomeWithIntro from "./Components/HomeWithIntro";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeWithIntro />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
