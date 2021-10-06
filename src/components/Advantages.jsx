import React from "react";
import styled from "styled-components";

// assets
import driver from "../assets/middle/driver.webp";
import palette from "../constants/palette";

const Advantages = () => {
  return (
    <Container>
      <Driver src={driver} alt="driver" />
      <Content>
        <h1>مزایای تپسی برای رانندگان تاکسی اینترنتی</h1>
        <p>
          رانندگان (سفیران) به‌عنوان همکاران تپسی، جایگاه ویژه‌ای برای شرکت
          دارند. به همین‌دلیل مزایای مختلفی برای آنها در نظر گرفته شده است.
        </p>
        <h3>کسب درآمد روزانه، پایدار و بدون محدودیت</h3>
        <ul>
          <li>۱. امکان تسویه&zwnj;ی اعتبار در هر ساعت از شبانه&zwnj;روز</li>
          <li>
            ۲. طرح&zwnj;های تشویقی، ماموریت&zwnj;ها&zwnj;، پاداش و اعطای
            وام&zwnj;های قرض&zwnj;الحسنه به&zwnj;طور دوره&zwnj;ای
          </li>
          <li>
            ۳. نمایش مکان&zwnj;های پردرخواست در اپلیکیشن و دریافت سفرهای طلایی
          </li>
        </ul>
        <h3>تضمین امنیت و پشتیبانی رانندگان</h3>
        <ul>
          <li>۱. پشتیبانی ۲۴ ساعته</li>
          <li>
            ۲. امکانات امنیت سفر شامل تماس اضطراری با واحد امنیت و پشتیبانی ۲۴
            ساعته تیم امنیت
          </li>
        </ul>
        <h3>واریز سهمیه بنزین ویژه رانندگان تپسی</h3>
        <ul>
          <li>۱. نمایش میزان پیمایش ماهانه درون اپلیکیشن</li>
          <li>۲. محاسبه&zwnj;ی مسافت طی شده تا مسافر در پیمایش</li>
        </ul>
        <ButtonsContainer>
          <div>ثبت نام راننده تاکسی آنلاین</div>
          <div>دانلود برنامه تپسی راننده</div>
        </ButtonsContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin: 40px 60px 0;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  width: 50%;
  h1 {
    font-size: 30px;
  }
  h3 {
    font-size: 22px;
  }
  li {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: calc(50% + 30px);
  margin: 20px;
  div {
    background: ${palette["blue"]};
    color: white;
    padding: 10px 5px;
    width: fit-content;
    border-radius: 8px;
    margin-left: 10px;
  }
  @media (max-width: 990px) {
    flex-direction: column;
    div {
      width: 80%;
      text-align: center;
      margin: 5px auto;
    }
  }
`;

const Driver = styled.img`
  border-radius: 20px;
  width: 50%;
  height: fit-content;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Advantages;
