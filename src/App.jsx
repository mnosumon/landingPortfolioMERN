import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Service from "./components/service/Service";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Service />
      <Resume />
      <Portfolio />
    </div>
  );
};

export default App;
