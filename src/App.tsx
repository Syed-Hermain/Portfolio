import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App: React.FC = () => (
  <>
  
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  </>
);

export default App;