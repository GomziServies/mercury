import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import WheyProteinSixty from "./pages/whey-protein-sixty";
import WheyProteinThirty from "./pages/whey-protein-thirty";
import MassGainerProtein from "./pages/mass-gainer";
import WheyProteinIsolate from "./pages/whey-protein-isolate";
import PreWorkoutPowder from "./pages/pre-workout";
import CreatinePowder from "./pages/creatine";
import EAAPowder from "./pages/eaa";
import PeanutButter from "./pages/peanut-butter";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/whey-protein-sixty" element={<WheyProteinSixty />} />
          <Route path="/whey-protein-thirty" element={<WheyProteinThirty />} />
          <Route path="/mass-gainer" element={<MassGainerProtein />} />
          <Route path="/whey-protein-isolate" element={<WheyProteinIsolate />} />
          <Route path="/pre-workout" element={<PreWorkoutPowder />} />
          <Route path="/creatine" element={<CreatinePowder />} />
          <Route path="/eaa" element={<EAAPowder />} />
          <Route path="/peanut-butter" element={<PeanutButter />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
