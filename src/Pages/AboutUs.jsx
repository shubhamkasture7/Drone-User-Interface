import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Krishak Drone"}
        imageUrl={"/testing.jpg"}
      />
      <Biography imageUrl={"/about.jpg"} />
    </>
  );
};

export default AboutUs;
