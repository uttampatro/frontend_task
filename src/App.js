import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProfileDetails from "./pages/profileDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profileDetails" element={<ProfileDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
