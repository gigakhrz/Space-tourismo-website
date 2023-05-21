import logo from "../../../public/assets/shared/logo.svg";
import { styled } from "styled-components";
import Burger from "./BurgerMenu";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo img" />
      <Burger />
      <NavBar>
        <Link to="/">
          <h4>00</h4> Home
        </Link>
        <Link to="/destinations/moon">
          <h4>01</h4> Destination
        </Link>
        <Link to="">
          <h4>02</h4> Crew
        </Link>
        <Link to="">
          <h4>03</h4>Technology
        </Link>
        <hr />
      </NavBar>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    @media screen and (min-width: 768px) {
      margin: 24px 0 0 39px;
    }
    @media screen and (min-width: 1024px) {
      margin: 0;
    }
  }
`;

const NavBar = styled.div`
  padding: 40px 48px;
  display: flex;
  align-items: center;
  gap: 38px;
  width: 450px;
  height: 96px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
  aspect-ratio: 1.7;
  display: none;
  @media screen and (min-width: 1024px) {
    width: 830px;
    position: relative;
    padding: 38px 0 38px 123px;
    gap: 50px;
  }

  hr {
    width: 473px;
    height: 1px;
    border: none;
    position: absolute;

    background: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.25;
    display: none;

    @media screen and (min-width: 1440px) {
      display: block;
      right: 800px;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-family: Barlow Condensed;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 2.36px;
    text-align: left;
    color: white;

    h4 {
      display: none;
    }
    @media screen and (min-width: 1024px) {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
      display: flex;
      align-items: center;
      gap: 11px;

      h4 {
        display: block;
      }
    }
  }
`;

export default Header;
