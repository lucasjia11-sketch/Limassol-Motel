import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
