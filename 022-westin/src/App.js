import React from "react";
import Header from "./compenents/Header";
import Preloader from "./compenents/Preloader";
import Banner from "./compenents/Banner";
import About from "./compenents/About";
import Services from "./compenents/Services";
import Portfolio from "./compenents/Portfolio";
import Testimonal from "./compenents/Testimonal";
import Blog from "./compenents/Blog";
import Contact from "./compenents/Contact";
import Footer from "./compenents/Footer";

const App = () => {
  return (
    <div>
      <Preloader />
      <Header />
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Testimonal />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
