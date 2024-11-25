import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Service from "./components/service/Service";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Service />
    </div>
  );
};

export default App;
