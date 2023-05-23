import { styled } from "styled-components";
import Header from "../Header/Header";
import bgMobile from "../../../public/assets/technology/background-technology-mobile.jpg";
import bgTablet from "../../../public/assets/technology/background-technology-tablet.jpg";
import bgDesktop from "../../../public/assets/technology/background-technology-desktop.jpg";
import { useParams } from "react-router-dom";
import data from "../../../data.json";
import TechnologyInfo from "./TechnologyInfo";

interface type {
  name?: string;
  images?: {
    portrait?: string;
    landscape?: string;
  };
  description?: string;
}

let personInfo: type | undefined;

const Technology = (): JSX.Element => {
  const params = useParams();
  if (params.tech === "vehicle") {
    personInfo = data.technology.find((item) => item.name === "Launch vehicle");
  } else if (params.tech === "spaceport") {
    personInfo = data.technology.find((item) => item.name === "Spaceport");
  } else if (params.tech === "capsule") {
    personInfo = data.technology.find((item) => item.name === "Space capsule");
  }
  return (
    <TechnologyCont>
      <HeaderDiv>
        <Header />
        <span>
          <h4 className="opacit">03</h4>
          <h4>SPACE LAUNCH 101</h4>
        </span>
      </HeaderDiv>
      <TechnologyInfo
        name={personInfo?.name}
        photo={personInfo?.images?.landscape}
        portrait={personInfo?.images?.portrait}
        description={personInfo?.description}
      />
    </TechnologyCont>
  );
};

export default Technology;
const TechnologyCont = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 26px;
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  padding-bottom: 56.33px;
  @media screen and (min-width: 768px) {
    gap: 50px;
    background-image: url(${bgTablet});
    padding-bottom: 97px;
  }
  @media screen and (min-width: 1024px) {
    gap: 26px;
    background-image: url(${bgDesktop});
  }
`;

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  padding: 24px 24px 0;
  @media screen and (min-width: 768px) {
    gap: 40px;
    padding: 0;
  }
  @media screen and (min-width: 1024px) {
    gap: 76px;
    padding: 40px 0 0 55px;
  }

  span {
    display: flex;
    align-items: center;
    gap: 18px;

    color: white;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-align: center;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      align-self: flex-start;
      margin-left: 39px;
      font-size: 20px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 3.375px;
    }

    @media screen and (min-width: 1024px) {
      margin-left: 126.5px;
      font-size: 28px;
      line-height: 33.6px;
      letter-spacing: 4.72px;
    }
  }
  span .opacit {
    opacity: 0.25;
  }
`;
