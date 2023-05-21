import logo from "../../../public/assets/shared/logo.svg";
import { styled } from "styled-components";
import Burger from "./BurgerMenu";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = (): JSX.Element => {
  const [pickPage, setPickPage] = useState<string>("home");

  console.log(pickPage);

  // Function to handle link clicks and update the selected page
  const handleLinkClick = (
    page: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault(); // Prevents the default link behavior (page refresh)
    setPickPage(page);
  };

  return (
    <HeaderContainer>
      <img src={logo} alt="logo img" />
      <Burger />
      <NavBar pickPage={pickPage}>
        <Link
          className="home"
          to="/"
          onClick={(event) => handleLinkClick("home", event)}
        >
          <h4>00</h4> Home
          <div className="hoverDiv"></div>
        </Link>
        <Link
          className="destination"
          to="/destinations/moon"
          onClick={(event) => handleLinkClick("destination", event)}
        >
          <h4>01</h4> Destination
          <div className="hoverDiv"></div>
        </Link>
        <Link
          className="crew"
          to=""
          onClick={(event) => handleLinkClick("crew", event)}
        >
          <h4>02</h4> Crew
          <div className="hoverDiv"></div>
        </Link>
        <Link
          to=""
          className="technology"
          onClick={(event) => handleLinkClick("technology", event)}
        >
          <h4>03</h4>Technology
          <div className="hoverDiv"></div>
        </Link>

        <div className="bottomDiv"></div>

        <hr />
      </NavBar>
    </HeaderContainer>
  );
};

// Remaining styled components...

export default Header;

// Styled component for the header container
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

// Styled component for the navigation bar
const NavBar = styled.div<{ pickPage: string }>`
  padding: 40px 48px;
  display: flex;
  align-items: center;
  gap: 38px;
  width: 450px;
  height: 96px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
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

  // Colored bottom bar indicating the selected page
  .bottomDiv {
    height: 3px;
    display: none;
    background-color: white;
    @media screen and (min-width: 1024px) {
      display: block;
      position: absolute;
      bottom: 0;
      width: ${(props) =>
        props.pickPage === "home"
          ? "70px"
          : props.pickPage === "destination"
          ? "127px"
          : props.pickPage === "crew"
          ? "71px"
          : "127px"};
      left: ${(props) =>
        props.pickPage === "home"
          ? "123px"
          : props.pickPage === "destination"
          ? "244px"
          : props.pickPage === "crew"
          ? "419px"
          : "538px"};
    }
  }

  //on hover indicating hovered tag

  .hoverDiv {
    height: 5px;
    display: none;
    background-color: white;
    opacity: 0.5;
    @media screen and (min-width: 1024px) {
      position: absolute;
      bottom: -40px;
      width: 0; /* Initially set to 0 */
      transition: width 0.3s ease; /* Add transition for smooth animation */
    }
  }

  //
  a {
    position: relative;
    cursor: pointer;
  }
  a:hover .hoverDiv {
    width: 100%;
    display: block;
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
