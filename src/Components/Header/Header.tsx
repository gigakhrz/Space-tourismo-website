import logo from "../../assets/shared/logo.svg";
import { styled } from "styled-components";
import Burger from "./BurgerMenu";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo img" />
      <Burger />

      <NavBar>
        <Link to="">Home</Link>
        <Link to="">Destination</Link>
        <Link to="">Crew</Link>
        <Link to="">Technology</Link>
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
  }
`;

export default Header;
