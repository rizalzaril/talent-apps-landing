import React from "react";
import Hero from "../components/hero";
import About from "./About";
import Feature from "./Feature";
import Services from "./Services";
import Contact from "./Contact";
function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Feature />
      <Services />
      <Contact />
    </div>
  );
}

export default Home;
