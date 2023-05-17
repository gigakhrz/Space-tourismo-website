import logo from "../../assets/shared/logo.svg";
import { styled } from "styled-components";
import Burger from "./BurgerMenu";

const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo img" />
      <Burger />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
