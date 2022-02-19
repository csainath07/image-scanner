import { Routes, Route } from "react-router-dom";
import Home from "Home/Home";
import Scan from "Scan/Scan";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h4>Image Scanner</h4>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan" element={<Scan />} />
      </Routes>
    </div>
  );
}

export default App;
