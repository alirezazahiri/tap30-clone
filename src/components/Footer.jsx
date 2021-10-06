import React from "react";
import styled from "styled-components";

import logo from "../assets/logo/logo-alt.svg";
import palette from "../constants/palette";

// photos
import etehadiye from "../assets/other/etehadiye.png";
import etemad from "../assets/other/etemad.png";

// icons
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import linkedin from "../assets/icons/linkedin.svg";
import telegram from "../assets/icons/telegram.svg";
import twitter from "../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <Container>
      <Content>
        <Title>
          <img src={logo} alt="logo" />
          <h3>اپلیکیشن درخواست خودرو و پیک</h3>
          <p>تمام حقوق مادی و معنوی این وبسایت متعلق به تپسی است.</p>
        </Title>
        <Group>
          <h1>تپسی</h1>
          <a href="#">وبلاگ تپسی</a>
          <a href="#">فرصت شغلی</a>
          <a href="#">تماس با ما</a>
          <a href="#">لوگو و هویت سازمانی</a>
        </Group>
        <Group>
          <h1>مسافران</h1>
          <a href="#">دانلود اپ مسافر</a>
          <a href="#">نسخه وب تپسی</a>
          <a href="#">پرسش‌های متداول مسافران</a>
          <a href="#">باشگاه مشتریان</a>
        </Group>
        <Group>
          <h1>رانندگان</h1>
          <a href="#">ثبت نام راننده تاکسی اینترنتی</a>
          <a href="#">دانلود اپ سفیر</a>
          <a href="#">پرسش‌های متداول سفیران</a>
          <a href="#">باشگاه سفیران</a>
        </Group>
        <Group>
          <h1>کسب و کارها</h1>
          <a href="#">پنل سازمانی تپسی</a>
          <a href="#">خرید کد اعتبار و تخفیف</a>
          <a href="#">دریافت API</a>
          <a href="#">شرایط و قوانین</a>
        </Group>
        <Images>
          <img src={etehadiye} alt="f img1" />
          <img className="logo" src={logo} alt="f img2" />
          <img src={etemad} alt="f img3" />
        </Images>
      </Content>
      <SocialLinks>
        <h2>تپسی در شبکه‌های اجتماعی</h2>
        <p>تمام حقوق مادی و معنوی این وبسایت متعلق به تپسی است.</p>
        <div>
          <img src={telegram} alt="telegram" />
          <img src={linkedin} alt="linkedin" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
        </div>
      </SocialLinks>
    </Container>
  );
};

const Container = styled.div`
  background: #000;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  img {
    width: 150px;
  }
  color: white;
  h3 {
    font-size: 20px;
  }
  p {
    color: #ffffff9f;
  }

  @media (max-width: 990px) {
    p {
      display: none;
    }
  }
`;

const SocialLinks = styled.div`
  color: #ffffff9f;
  p {
    display: none;
  }
  div {
    padding-right: 20px;
    img {
      margin-left: 20px;
    }
    @media (max-width: 990px) {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
    }
  }
  img {
    width: 20px;
    height: 20px;
    &:hover {
      stroke: ${palette["orange"]};
    }
  }

  @media (max-width: 990px) {
    margin-top: 20px;
    h2 {
      display: none;
    }
    p {
      display: unset;
    }
  }
`;

const Group = styled.div`
  color: #fff;
  h1 {
    font-size: 24px;
  }
  a {
    font-size: 18px;
    color: white;
    &:hover {
      color: ${palette["orange"]};
    }
  }
  display: flex;
  flex-direction: column;
  line-height: 30px;
`;

const Images = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    background: #fff;
    border-radius: 16px;
    width: 32%;
    height: auto;
  }

  .logo {
    background: #000;
  }
  @media (max-width: 990px) {
    img {
      margin-top: 20px;
      width: 20%;
    }
  }
`;

export default Footer;
