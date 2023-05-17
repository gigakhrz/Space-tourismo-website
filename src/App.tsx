import { styled } from "styled-components";
import Header from "./Components/Header/Header";
import GlobalStyles from "./GlobalStyles";
import image from "./assets/destination/background-destination-mobile.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
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
