import React from "react";

// react-tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// style
import styled from "styled-components";
import tabs from "../constants/tabs";

const ScrollerTabs = () => {
  return (
    <Tabs width="100%">
      <TL>
        {tabs.map((tab) => (
          <Tab key={tab.id}>
            <img src={tab.tabImg} alt={tab.title} />
          </Tab>
        ))}
      </TL>

      {tabs.map((tab) => (
        <TP>
          <div>
            <h2>{tab.title}</h2>
            <p>{tab.text}</p>
          </div>
          <img src={tab.tabContent} alt={tab.title} />
        </TP>
      ))}
    </Tabs>
  );
};

const TL = styled(TabList)`
  padding: 0 auto;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  img {
    opacity: 0.35;
    width: 130px;
    &:hover {
      opacity: 1;
    }
  }

  .react-tabs__tab--selected {
    border: none;
    outline: none;
    img {
      opacity: 1;
    }
  }
`;

const TP = styled(TabPanel)`
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 18px;
    }
  }
  img {
    background-size: cover;
    width: 40%;
  }
  @media (max-width: 768px) {
    div {
      width: 100%;
    }
    img {
      display: none;
    }
  }
`;

export default ScrollerTabs;
