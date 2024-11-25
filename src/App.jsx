import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Service from "./components/service/Service";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Service />
      <Resume />
      <Portfolio />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
