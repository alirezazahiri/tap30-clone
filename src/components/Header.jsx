import React from "react";

// style
import styled from "styled-components";

// assets
import headerBg from "../assets/banner/banner.webp";
import phone from "../assets/other/mockup-phone.webp";

//icons
import ic_pass_dl from "../assets/icons/ic-passenger-dl.svg";
import ic_driver_dl from "../assets/icons/ic-driver-dl.svg";
import pwa from "../assets/icons/pwa.svg";
import driver_join from "../assets/icons/driver-join.svg";

const Header = () => {
  return (
    <Container>
      <Content>
        <img
          type="image/webp"
          src={headerBg}
          alt="header bg"
          className="main-bg"
        />
      </Content>
      <BoxContainer>
        <Title>
          <h1>تپسی</h1>
          <h2>اپلیکیشن درخواست خودرو و پیک</h2>
        </Title>
        <Buttons>
          <div className="download-btn">
            <a href="#" target="_blank">
              <p>دانلود اپلیکیشن مسافران</p>
              <img src={ic_pass_dl} alt="ic_pass_dl" />
            </a>
          </div>
          <div className="download-btn">
            <a href="#" target="_blank">
              <p>وب اپلیکیشن مسافران</p>
              <img src={pwa} alt="pwa" />
            </a>
          </div>
          <div className="driver-btn">
            <a href="#" target="_blank">
              <p>دانلود اپلیکیشن رانندگان</p>
              <img src={ic_driver_dl} alt="ic_driver_dl" />
            </a>
          </div>
          <div className="driver-btn">
            <a href="#" target="_blank">
              <p>ثبت&zwnj;نام راننده</p>
              <img src={driver_join} alt="driver_join" />
            </a>
          </div>
        </Buttons>
      </BoxContainer>
      <Phone src={phone} alt="phone" />
    </Container>
  );
};

const Container = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100vh - 61px);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

const Phone = styled.img`
  height: 100%;
  position: absolute;
  left: 10%;
  bottom: -15%;
  @media (max-width: 990px) {
    display: none;
  }
`;

const Content = styled.div`
  .main-bg {
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(100vh - 61px - 220px);
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

const BoxContainer = styled.div`
  box-shadow: 0 0 15px rgba(0, 0, 255, 0.2);
  border: 1px solid rgba(0, 0, 255, 0.2);
  padding-bottom: 20px;
  width: 40%;
  height: auto;
  background-color: rgba(0, 0, 40, 0.4);
  border-radius: 20px;
  margin-right: 20px;
  h1 {
    font-size: 50px;
    font-weight: 500;
    color: white;
  }
  h2 {
    font-size: 18px;
    color: white;
  }

  @media (max-width: 990px) {
    margin: 50px auto;
  }
`;

const Title = styled.div`
  padding: 50px;
`;

const Buttons = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  font-size: 16px;

  div {
    margin: 0 20px;
    border: 1px solid white;
    padding: 20px;
    border-radius: 14px;
    font-size: 20px;
    a {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
    p {
      align-items: center;
    }
  }

  .download-btn {
    background: #fff;
    a {
      color: #000;
    }
  }
  .driver-btn {
    background: #000;
    a {
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Header;
