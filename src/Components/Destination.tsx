import { styled } from "styled-components";
import { Link, useParams } from "react-router-dom";
import data from "../../data.json";
import Header from "./Header/Header";
import bgMobile from "../../public/assets/destination/background-destination-mobile.jpg";

const Destination = (): JSX.Element => {
  const params = useParams();
  const planetInfo = data.destinations.find(
    (item) => item.name.toLowerCase() === params.planets
  );

  const imgPath = `.${planetInfo?.images.webp}`;

  const path = params.planets;

  return (
    <DestinationContianer>
      <HeaderDiv>
        <Header />
        <span>
          <h4 className="opacit">01</h4>
          <h4>Pick your destination</h4>
        </span>
      </HeaderDiv>

      <img className="planetImg" src={imgPath} alt="planet" />
      <ChoosePlanet path={path}>
        <nav>
          <Link to="/destinations/moon">Moon</Link>
          <Link to="/destinations/mars">Mars</Link>
          <Link to="/destinations/europa">Europa</Link>
          <Link to="/destinations/titan">Titan</Link>

          <div className="bottomDiv"></div>
        </nav>
      </ChoosePlanet>

      <PlanetInfo>
        <h1>{planetInfo?.name}</h1>
        <p>{planetInfo?.description}</p>
      </PlanetInfo>

      <hr />
      <DivCon>
        <Container>
          <h5>AVG. DISTANCE</h5>
          <h2>{planetInfo?.distance}</h2>
        </Container>

        <Container>
          <h5>Est. travel time</h5>
          <h2>{planetInfo?.travel}</h2>
        </Container>
      </DivCon>
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
    gap: 50px;
  }
  @media screen and (min-width: 1024px) {
    padding: 40px 0 0 55px;
  }

  .planetImg {
    width: 170px;
    height: 170px;
    margin-bottom: -6px;
    @media screen and (min-width: 768px) {
      width: 300px;
      height: 300px;
    }
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

  @media screen and (min-width: 768px) {
    gap: 40px;
    margin-bottom: 10px;
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
  }
  span .opacit {
    opacity: 0.25;
  }
`;

const ChoosePlanet = styled.nav<{ path: string | undefined }>`
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
      props.path === "moon"
        ? "-2px"
        : props.path === "mars"
        ? "60px"
        : props.path === "europa"
        ? "128px"
        : "202px"};

    bottom: -12px;

    @media screen and (min-width: 768px) {
      left: ${(props) =>
        props.path === "moon"
          ? "-2px"
          : props.path === "mars"
          ? "74px"
          : props.path === "europa"
          ? "158px"
          : "245px"};
    }
  }

  nav {
    width: 240px;
    display: flex;
    gap: 27px;
    align-items: center;
    justify-content: center;
    position: relative;

    @media screen and (min-width: 768px) {
      width: 285px;
      gap: 35px;
    }

    a {
      font-family: Barlow Condensed;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 2.36px;
      color: #d0d6f9;
      text-decoration: none;
      text-transform: uppercase;
      @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
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
  @media screen and (min-width: 768px) {
    gap: 8px;
  }

  h1 {
    color: white;
    text-transform: uppercase;
    font-family: Bellefair;
    font-size: 56px;
    font-weight: 400;
    line-height: 64px;
    text-align: center;
    @media screen and (min-width: 768px) {
      font-size: 80px;
      line-height: 92px;
    }
  }

  p {
    font-family: Barlow;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    color: #d0d6f9;
    text-align: center;
    @media screen and (min-width: 768px) {
      max-width: 580px;
      font-size: 16px;
      line-height: 28px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 12px;
  @media screen and (min-width: 768px) {
    width: 216px;
  }

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

const DivCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 573px;
    gap: 11px;
    margin-bottom: 62px;
  }
`;
