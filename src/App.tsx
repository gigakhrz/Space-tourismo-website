import { styled } from "styled-components";
import Header from "./Components/HeaderCoponent";
import GlobalStyles from "./GlobalStyles";
import image from "./assets/destination/background-destination-mobile.jpg";
function App() {
  return (
    <MainContainer>
      <GlobalStyles />
      <Header />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 24px 24px 0;
  position: relative;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: 100%;
`;
