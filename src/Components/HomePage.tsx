import { styled } from "styled-components";

const HomePage = (): JSX.Element => {
  return <HomeContainer></HomeContainer>;
};

export default HomePage;

const HomeContainer = styled.div`
  width: 100%;
  background-color: #0b0d17;
  display: flex;
  flex-direction: column;
  gap: 81;
`;
