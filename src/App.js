import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/sections/Header";
import MainPage from "./components/pages/MainPage";
import CasaNovaPage from "./components/pages/CasaNovaPage";
import NavBar from "./components/sections/NavBar";
import Footer from "./components/sections/Footer";

function App() {
  const location = useLocation();
  const [title, setTitle] = useState("Housing & Hosting");
  const [tagLine, setTagLine] = useState("Enjoy what Portugal has to offer");

  useEffect(() => {
    // Set title and tagline based on the current route
    switch (location.pathname) {
      case "/":
        setTitle("Housing & Hosting");
        setTagLine("Enjoy what Portugal has to offer");
        break;
      case "/casa-nova":
        setTitle("Casa Nova");
        setTagLine("Experience luxury and comfort");
        break;
      default:
        setTitle("Housing & Hosting");
        setTagLine("Welcome to our platform");
    }
  }, [location.pathname]); // Depend on pathname to update on route change

  return (
    <div className="App">
      <NavBar />
      <Header title={title} tagLine={tagLine} />
      <Routes>
        <Route path="/" exact component={<MainPage />} />
        <Route path="/casa-nova" component={<CasaNovaPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
