import "./App.css";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar item1="HomePage" item2="DetailsPage" />
      <Routes>
        <Route path="/products" element={<HomePage />} />
        <Route path="/products/category/:id" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
