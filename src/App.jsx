import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import VogueaCollection from "./components/VogueaCollection";
import About from "./components/VogueaAbout";
import Contact from "./components/VogueaContact";
import Products from "./components/VogueaShop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<VogueaCollection />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collections" element={<Products />} />
      <Route path="/button" element={<VogueaCollection />} />
    </Routes>
  );
}

export default App;
