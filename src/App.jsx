import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Service from "./components/service/Service";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Service />
      <Resume />
    </div>
  );
};

export default App;
