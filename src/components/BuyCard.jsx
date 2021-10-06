import React from "react";

import styled from "styled-components";

// assets
import macbook from "../assets/other/macbook.webp";
import leftArrow from "../assets/icons/left-arrow.svg";
import palette from "../constants/palette";

const BuyCard = () => {
  return (
    <Container>
      <Macbook src={macbook} alt="i mac" />
      <div>
        <h1>خرید کد اعتبار تپسی</h1>
        <p>
          کاربران، کسب‌وکارها و سازمان‌ها می‌توانند به تعداد و مبلغ مورد نظرشان،
          کد اعتبار یا کد تخفیف تپسی تهیه کرده، برای خود، پرسنل و یا مشتریانشان
          استفاده کنند و از تخفیف‌های ویژه تپسی نیز بهره‌مند شوند. این کدها
          امکان سفارشی‌سازی بر اساس مبدا، مقصد، زمان، درصد و مبلغ را دارند.
        </p>

        <div className="join-panel">
          <p>خرید کد اعتبار و تخفیف</p>
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

const Macbook = styled.img`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default BuyCard;
