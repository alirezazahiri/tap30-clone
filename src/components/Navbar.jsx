import React, { useState } from "react";

// style
import styled from "styled-components";
import palette from "../constants/palette";

// icons
import tap30 from "../assets/logo/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleHamburger = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Container>
      <Nav>
        <a href="#">
          <img src={tap30} alt="logo" />
        </a>
        <NavLinkContainer>
          <NavLinks className={open && "nav-links-active"}>
            <li>
              <Link>وبلاگ</Link>
            </li>
            <li>
              <Link>فرصت‌های شغلی</Link>
            </li>
            <li>
              <Link>خدمات کسب‌وکارها</Link>
            </li>
            <li>
              <Link>پشتیبانی</Link>
            </li>
          </NavLinks>
          <JoinTapsi>
            <a href="#">دانلود تپسی</a>
          </JoinTapsi>
        </NavLinkContainer>
        <Hamburger
          className={open && "burger-active"}
          onClick={toggleHamburger}
        >
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </Hamburger>
      </Nav>
    </Container>
  );
};

const Container = styled.header`
  height: 60px;
  display: block;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  background-color: ${palette["white"]};
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 60px;
  padding: 0 10%;
  border-bottom: 1px solid ${palette["grayish-white"]};

  .burger-active {
    .bar2 {
      opacity: 0;
    }

    .bar1 {
      transform: rotate(-45deg) translate(-9px, 6px);
      margin: 8px 0;
    }

    .bar3 {
      transform: rotate(45deg) translate(-8px, -8px);
      margin: 8px 0;
    }
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  box-align: center;
  align-items: center;

  .nav-links-active {
    display: flex;
    li {
      margin-left: 30px;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  box-align: center;
  align-items: center;

  box-orient: horizontal;
  box-direction: reverse;
  flex-direction: row-reverse;
  box-pack: justify;
  justify-content: space-between;
  font-size: 16px;

  li {
    padding: 0 10px;
  }

  @media (max-width: 767px) {
    position: fixed;
    top: 40px;
    left: 0;
    display: none;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    background-color: ${palette["white"]};
    width: 100%;
    -webkit-box-shadow: 0 10px 27px rgb(0 0 0 / 5%);
    box-shadow: 0 10px 27px rgb(0 0 0 / 5%);
  }
`;

const Link = styled.a`
  font-size: 15px;
  line-height: 30px;
  color: ${palette["dark-gray"]};
`;

const JoinTapsi = styled.div`
  background: ${palette["orange"]};
  border-radius: 8px;
  padding: 8px 40px;
  margin-right: 25px;
  top: 7px;
  display: block;
  a {
    color: ${palette["white"]};
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;

  span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    background-color: ${palette["dark"]};
  }

  @media (max-width: 767px) {
    display: block;
  }
`;

export default Navbar;
