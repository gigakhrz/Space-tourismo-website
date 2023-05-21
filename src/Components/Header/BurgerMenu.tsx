import { styled } from "styled-components";
import burgerMenu from "../../../public/assets/shared/icon-hamburger.svg";
import closeImg from "../../../public/assets/shared/icon-close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Burger = (): JSX.Element => {
  const [burger, setBurger] = useState<boolean>(false);

  const handleClick = () => {
    setBurger(!burger);
  };

  return (
    <BurgerMenu>
      <img onClick={handleClick} src={burgerMenu} alt="burger menu" />
      <Menu burger={burger}>
        <img
          className="close"
          onClick={handleClick}
          src={closeImg}
          alt="Close icon"
        />
        <div className="menu">
          <Link to="/">
            <h3>00</h3>
            <h4>Home</h4>
          </Link>
          <Link to="/destinations/moon">
            <h3>01</h3>
            <h4>DESTINATION</h4>
          </Link>

          <Link to="/crew">
            <h3>02</h3>
            <h4>CREW</h4>
          </Link>
          <Link to="../../App">
            <h3>03</h3>
            <h4>TECHNOLOGY</h4>
          </Link>
        </div>
      </Menu>
    </BurgerMenu>
  );
};

export default Burger;

const Menu = styled.div<{ burger: boolean }>`
  width: 67.7%;
  height: 100%;
  padding: 34px 27px 0 32px;
  display: flex;
  gap: 65px;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
  position: ${(props) => (props.burger ? "absolute" : "fixed")};
  right: ${(props) => (props.burger ? "0" : "-300%")};
  top: 0;

  .close {
    width: 19px;
    height: 19px;
    align-self: flex-end;
  }

  .menu {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 32px;

    a {
      display: flex;
      align-items: start;
      gap: 11px;
      text-decoration: none;
      h3 {
        font-family: Barlow Condensed;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 2.7px;
        text-align: left;
        color: white;
      }
      h4 {
        font-family: Barlow Condensed;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 2.7px;
        text-align: left;
        color: white;
      }
    }
  }
`;

const BurgerMenu = styled.div`
  width: 24px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
