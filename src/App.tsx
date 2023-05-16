import { styled } from "styled-components";

import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <MainContainer>
      <GlobalStyles />
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
`;
