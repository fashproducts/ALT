import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./assets/LandingPage";
import IndividualPage from "./assets/IndividualPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/individual" element={<IndividualPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
