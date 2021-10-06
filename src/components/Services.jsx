import React from "react";

// style
import styled from "styled-components";
import ScrollerTabs from "./ScrollerTabs";

const Services = () => {
  return (
    <Container>
      <h1>سرویس‌های تپسی</h1>
      <ScrollerTabs setIdx={setIdx} />
    </Container>
  );
};

const Container = styled.section`
  margin: 40px 60px 0;
  h1 {
    font-size: 40px;
  }
`;

export default Services;
