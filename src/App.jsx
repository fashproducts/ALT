import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./assets/LandingPage";
import IndividualPage from "./assets/IndividualPage";
import GroupPage from "./assets/Components/GroupPage";
import ErrorPage from "./assets/ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/individual" element={<IndividualPage />} />
        <Route path="/group" element={<GroupPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
