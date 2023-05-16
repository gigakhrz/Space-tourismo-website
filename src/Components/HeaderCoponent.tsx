import { styled } from "styled-components";
import logo from "../assets/shared/logo.svg";
import burgerMenu from "../assets/shared/icon-hamburger.svg";
import closeImg from "../assets/shared/icon-close.svg";
import { useState } from "react";

const Header = (): JSX.Element => {
  const [burger, setBurger] = useState<boolean>(false);

  const handleClick = () => {
    setBurger(!burger);
  };

  return (
    <HeaderContainer>
      <img src={logo} alt="logo img" />
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
            <a>
              <h3>00</h3>
              <h4>Home</h4>
            </a>
            <a>
              <h3>01</h3>
              <h4>DESTINATION</h4>
            </a>
            <a>
              <h3>02</h3>
              <h4>CREW</h4>
            </a>
            <a>
              <h3>03</h3>
              <h4>TECHNOLOGY</h4>
            </a>
          </div>
        </Menu>
      </BurgerMenu>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div<{ burger?: boolean }>`
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
`;
