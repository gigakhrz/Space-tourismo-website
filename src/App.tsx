import { styled } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Destination from "./Components/Destination";
import Crew from "./Components/Crew/Crew";
import Technology from "./Components/Technology/Technology";
function App() {
  return (
    <Router>
      <GlobalStyles />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destinations/:planets" element={<Destination />} />
          <Route path="crew/:person" element={<Crew />} />
          <Route path="technology/:tech" element={<Technology />} />
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
