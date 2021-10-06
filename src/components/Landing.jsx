import React from "react";

import styled from "styled-components"

// Componetns
import Navbar from "./Navbar";
import Header from "./Header";
import Services from "./Services";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <HR />
    </div>
  );
};

const HR = styled.hr`
  width: 85%;
  margin: 50px auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

export default Landing;
