import { styled } from "styled-components";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../../data.json";
import Header from "../Header/Header";
import bgMobile from "../../assets/destination/background-destination-mobile.jpg";

const Destination = (): JSX.Element => {
  const [planet, setplanet] = useState<string>("moon");

  const params = useParams();
  const planetInfo = data.destinations.find(
    (item) => item.name.toLowerCase() === params.planets
  );

  console.log(planetInfo?.images.png);

  return (
    <DestinationContianer>
      <HeaderDiv>
        <Header />
        <h4>Pick your destination</h4>
      </HeaderDiv>

      <ChoosePlanet planet={planet}>
        <img src={planetInfo?.images.png} alt="planet" />
        <nav>
          <Link
            onClick={() => {
              setplanet("moon");
            }}
            to="/destinations/moon"
          >
            Moon
          </Link>
          <Link
            onClick={() => {
              setplanet("mars");
            }}
            to="/destinations/mars"
          >
            Mars
          </Link>
          <Link
            onClick={() => {
              setplanet("europa");
            }}
            to="/destinations/europa"
          >
            Europa
          </Link>
          <Link
            onClick={() => {
              setplanet("titan");
            }}
            to="/destinations/titan"
          >
            Titan
          </Link>

          <div className="bottomDiv"></div>
        </nav>
      </ChoosePlanet>

      <PlanetInfo>
        <h1>{planetInfo?.name}</h1>
        <p>{planetInfo?.description}</p>
      </PlanetInfo>

      <hr />

      <Container>
        <h5>AVG. DISTANCE</h5>
        <h2>{planetInfo?.distance}</h2>
      </Container>

      <Container>
        <h5>Est. travel time</h5>
        <h2>{planetInfo?.travel}</h2>
      </Container>
    </DestinationContianer>
  );
};
export default Destination;

const DestinationContianer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  padding: 24px 24px 57px;
  @media screen and (min-width: 768px) {
    padding: 0;
  }

  hr {
    background: #383b4b;
    width: 100%;
    height: 1px;
    border: none;
  }
`;

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  h4 {
    color: white;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-align: center;
    text-transform: uppercase;
  }
`;

const ChoosePlanet = styled.div<{ planet: string }>`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 26px;

  .bottomDiv {
    position: absolute;
    width: 36px;
    height: 3px;
    background-color: white;
    left: ${(props) =>
      props.planet === "moon"
        ? "-2px"
        : props.planet === "mars"
        ? "60px"
        : props.planet === "europa"
        ? "128px"
        : "202px"};

    bottom: -12px;
  }

  img {
    width: 170px;
    height: 170px;
  }
  nav {
    width: 240px;
    display: flex;
    gap: 27px;
    align-items: center;
    justify-content: center;
    position: relative;

    a {
      font-family: Barlow Condensed;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 2.36px;
      color: #d0d6f9;
      text-decoration: none;
      text-transform: uppercase;

      :focus {
        color: white;
      }
    }
  }
`;

const PlanetInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1px;

  h1 {
    color: white;
    text-transform: uppercase;
    font-family: Bellefair;
    font-size: 56px;
    font-weight: 400;
    line-height: 64px;
    text-align: center;
  }

  p {
    font-family: Barlow;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    color: #d0d6f9;
    text-align: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 12px;

  h5 {
    font-family: Barlow Condensed;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 2.36px;
    text-align: center;
    color: #d0d6f9;
    text-transform: uppercase;
  }

  h2 {
    font-family: Bellefair;
    font-size: 28px;
    font-weight: 400;
    line-height: 32px;
    color: white;
    text-align: center;
    text-transform: uppercase;
  }
`;
