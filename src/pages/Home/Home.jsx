import React from "react";
import Header from "../../components/Header/Header";
import Work from "../../components/Works/Work";
import Hello from "../../components/Hello/Hello";
import Experience from "../../components/Experience/Experience";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Work />
      <Hello />
      <Experience />
      <Footer />
    </div>
  );
};

export default Home;
