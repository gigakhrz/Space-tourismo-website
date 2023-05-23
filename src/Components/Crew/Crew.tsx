import { styled } from "styled-components";
import Header from "../Header/Header";
import bgMobile from "../../../public/assets/crew/background-crew-mobile.jpg";
import bgTablet from "../../../public/assets/crew/background-crew-tablet.jpg";
import CrewInfo from "./CrewInfo";
import { useParams } from "react-router-dom";
import data from "../../../data.json";

const Crew = (): JSX.Element => {
  const params = useParams();
  const personInfo = data.crew.find(
    (item) => item.name.split(" ")[0].toLowerCase() === params.person
  );
  return (
    <CrewContainer>
      <HeaderDiv>
        <Header />
        <span>
          <h4 className="opacit">02</h4>
          <h4>Meet your crew</h4>
        </span>
      </HeaderDiv>
      <CrewInfo
        name={personInfo?.name}
        photo={personInfo?.images.webp}
        role={personInfo?.role}
        bio={personInfo?.bio}
      />
    </CrewContainer>
  );
};
export default Crew;

const CrewContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  padding: 24px 24px 104px;

  @media screen and (min-width: 768px) {
    padding: 0;
    background-image: url(${bgTablet});
  }
`;

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

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
    }
  }
  span .opacit {
    opacity: 0.25;
  }
`;
