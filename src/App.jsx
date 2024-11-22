import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Brands from "./components/Brands/Brands.jsx";
import Services from "./components/Services/Services.jsx";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brands />
      <Services />
    </main>
  );
};

export default App;
