import React from "react";
import styled from "styled-components";

import map_bg from "../assets/icons/map.svg";
import cities from "../constants/cities";

const Cities = () => {
  return (
    <Container>
      <h1>تپسی در ایران</h1>
      <div className="cities">
        {cities.map((city) => (
          <div key={city.id}>
            <p>{city.ir}</p>
            <p>{city.en}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: url(${map_bg});
  background-size: cover;
  padding: 50px;
  width: calc(100% - 100px);
  background-position: absolute;

  .cities {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    p {
      font-size: 20px;
    }
    @media (max-width: 990px) {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Cities;
