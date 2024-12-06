import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Relevantskills from "./pages/Relevantskills";
import Carrer from "./pages/Carrer";
import WhyMe from "./pages/WhyMe";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/RelevantSkills" element={<Relevantskills/>} />
        <Route path="/CarrerAchievements" element={<Carrer/>} />
        <Route path="/WhyME" element={<WhyMe/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
