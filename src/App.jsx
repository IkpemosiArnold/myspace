import "./App.css";
import Home from "./pages/Home";
import Pmportfolio from "./pages/Pmportfolio";
import { Route, Routes, useLocation } from "react-router-dom";
const App = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/pm" element={<Pmportfolio />} />
    </Routes>
  );
};

export default App;
