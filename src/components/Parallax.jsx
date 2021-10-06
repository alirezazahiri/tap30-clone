import React from "react";

//
import styled from "styled-components";

// assets
import parallax from "../assets/other/parallax.jpeg";

const Parallax = () => {
  return (
    <Container>
      <div>
        <h3>امکانات هوشمند</h3>
        <p>
          سهولت استفاده از اپلیکیشن با پیشنهاد مبدا و مقصد سفر، مقاصد منتخب و
          پیشنهادهای ویژه شما
        </p>
      </div>
      <div>
        <h3>بسته امنیت سفر</h3>
        <p>
          امکانات ویژه امنیت سفر، شامل اشتراک سفر و پشتیبانی ۲۴ ساعته تیم
          متخصصین امنیت تپسی
        </p>
      </div>
      <div>
        <h3>درخواست تلفنی</h3>
        <p>
          امکان درخواست خودرو بدون نیاز به اینترنت و اپلیکیشن، از طریق تماس با
          شماره ۱۶۳۰
        </p>
      </div>
      <div>
        <h3>دسترس‌پذیری برای توان‌یابان</h3>
        <p>
          امکان استفاده کاربران نابینا و ناشنوا از اپلیکیشن تپسی و عدم کسر
          کمیسیون از سفر مسافران ویلچردار
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: url(${parallax});
  background-size: cover;
  padding: 20px 10%;
  height: 180px;
  background-attachment: fixed !important;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: white;
  div {
    width: 25%;
    display: flex;
    flex-direction: column;
    text-align: center;
    display: block;
    h3 {
      font-size: 20px;
      font-weight: 700;
    }
    p {
      display: none;
      margin-top: 15px;
      font-size: 16px;
    }
    &:hover {
      p {
        display: block;
      }
    }
  }
  div:not(:first-child) {
    border-right: 3px solid white;
    @media (max-width: 768px) {
      border: none;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    height: 100%;
    flex-direction: column;
  }
`;

export default Parallax;