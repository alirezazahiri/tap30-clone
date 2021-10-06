import React from "react";

import styled from "styled-components";

// assets
import imac from "../assets/middle/i-mac.webp";
import leftArrow from "../assets/icons/left-arrow.svg";
import palette from "../constants/palette";

const BusinessServices = () => {
  return (
    <Container>
      <IMac src={imac} alt="i mac" />
      <div>
        <h1>خدمات تپسی ویژه کسب‌وکارها</h1>
        <p>
          پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست
          هم‌زمان تعداد نامحدودی خودرو و پیک را برای کسب‌وکارها و سازمان‌ها
          فراهم می‌کند. و با استفاده از آن می‌توانید ماموریت های درون‌شهری و
          ارسال کالاهای خود را به سادگی مدیریت کنید.
        </p>
        <div className="more-info">
          <a href="#">اطلاعات بیشتر سرویس سازمانی</a>
          <img src={leftArrow} alt="left-arrow" />
        </div>
        <div className="join-panel">
          <p>ورود و ثبت نام پنل سازمانی</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 40px 60px 0;
  h1 {
    font-size: 40px;
  }
  display: flex;
  div {
    width: 50%;
  }
  p {
    font-size: 18px;
  }

  .more-info {
    a {
      color: ${palette["orange"]};
    }
    display: flex;
    align-items: center;
  }

  .join-panel {
    background: ${palette["orange"] + "f4"};
    transform: scale(1.01);
    border-radius: 8px;
    padding: 0 5px;
    font-size: 20px;
    width: fit-content;
    p {
      padding: 10px 4px;
      color: ${palette["white"]};
    }
    &:hover {
      transform: scale(1);
      background: ${palette["orange"]};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    div {
      width: 100%;
    }
  }
`;

const IMac = styled.img`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default BusinessServices;
