import { styled } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Destination from "./Components/Destination";
function App() {
  return (
    <Router>
      <GlobalStyles />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destinations/:planets" element={<Destination />} />
        </Routes>
      </MainContainer>
    </Router>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;
