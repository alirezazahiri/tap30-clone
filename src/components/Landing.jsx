import React from "react";

import styled from "styled-components"

// Componetns
import Navbar from "./Navbar";
import Header from "./Header";
import Services from "./Services";
import BusinessServices from "./BusinessServices";
import BuyCard from "./BuyCard";
import Parallax from "./Parallax";
import Advantages from "./Advantages";
import Cities from "./Cities";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <HR />
      <BusinessServices />
      <HR />
      <BuyCard />
      <Parallax />
      <Advantages />
      <Cities />
      <Footer />
    </div>
  );
};

const HR = styled.hr`
  width: 85%;
  margin: 50px auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

export default Landing;
