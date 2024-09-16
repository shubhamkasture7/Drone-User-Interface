import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import AppointmentStatus from "../components/AppointmentStatus";
import ErrorBoundary from "../components/ErrorBoundary"; // Import ErrorBoundary

const Home = () => {
  return (
    <>
      <Hero title={"KRISHAK Drone"} imageUrl={"/logotry.png"} />
      <Biography imageUrl={"/testing.jpg"} />
      <MessageForm />
      <ErrorBoundary>
        <AppointmentStatus /> {/* Wrap AppointmentStatus with ErrorBoundary */}
      </ErrorBoundary>
    </>
  );
};

export default Home;
