import { styled } from "styled-components";
import { Link, useParams } from "react-router-dom";
import data from "../../data.json";
import Header from "./Header/Header";
import bgMobile from "../../public/assets/destination/background-destination-mobile.jpg";
import bgTablet from "../../public/assets/destination/background-destination-tablet.jpg";
import bgDesktop from "../../public/assets/destination/background-destination-desktop.jpg";

const Destination = (): JSX.Element => {
  const params = useParams();
  const planetInfo = data.destinations.find(
    (item) => item.name.toLowerCase() === params.planets
  );

  const imgPath = `.${planetInfo?.images.webp}`;

  return (
    <DestinationContianer>
      <HeaderDiv>
        <Header />
        <span>
          <h4 className="opacit">01</h4>
          <h4>Pick your destination</h4>
        </span>
      </HeaderDiv>
      <div className="planetInfoContainer">
        <img className="planetImg" src={imgPath} alt="planet" />
        <ChoosePlanet>
          <nav>
            <Link to="/destinations/moon">
              Moon <div className="hoverDiv"></div>
            </Link>
            <Link to="/destinations/mars">
              Mars <div className="hoverDiv"></div>
            </Link>
            <Link to="/destinations/europa">
              Europa <div className="hoverDiv"></div>
            </Link>
            <Link to="/destinations/titan">
              Titan <div className="hoverDiv"></div>
            </Link>

            <div className="bottomDiv"></div>
          </nav>

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
        </ChoosePlanet>
      </div>
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
    background-image: url(${bgTablet});
  }
  @media screen and (min-width: 1024px) {
    padding: 40px 0 0 55px;
    gap: 64px;
    background-image: url(${bgDesktop});
    margin-left: 126.5px;
  }

  .planetImg {
    width: 170px;
    height: 170px;
    margin-bottom: -6px;
    @media screen and (min-width: 768px) {
      width: 300px;
      height: 300px;
    }
    @media screen and (min-width: 1024px) {
      width: 445px;
      height: 445px;
    }
  }

  .planetInfoContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;
    @media screen and (min-width: 768px) {
      gap: 53px;
    }
    @media screen and (min-width: 1024px) {
      flex-direction: row;
      gap: 70px;
    }
    @media screen and (min-width: 1440px) {
      flex-direction: row;
      gap: 157.5px;
    }
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
  @media screen and (min-width: 1024px) {
    gap: 76px;
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

const ChoosePlanet = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  @media screen and (min-width: 768px) {
    gap: 48px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 445px;
    align-items: flex-start;
    gap: 53px;
  }

  nav {
    width: 240px;
    display: flex;
    gap: 27px;
    align-items: center;
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
      @media screen and (min-width: 1024px) {
        position: relative;
      }
    }

    //div which appear on hover and on focus
    .hoverDiv {
      height: 3px;
      display: none;
      background-color: white;
      @media screen and (min-width: 1024px) {
        position: absolute;
        bottom: -12px;
        width: 0; /* Initially set to 0 */
        transition: width 0.3s ease; /* Add transition for smooth animation */
      }
    }

    //
    a {
      position: relative;
      cursor: pointer;
    }
    a:focus .hoverDiv {
      width: 100%;
      display: block;
    }
    a:hover .hoverDiv {
      width: 100%;
      display: block;
      opacity: 0.5;
    }
  }

  hr {
    background: #383b4b;
    width: 100%;
    height: 1px;
    border: none;

    @media screen and (min-width: 768px) {
      margin-bottom: -20px;
    }
    @media screen and (min-width: 1024px) {
      margin-bottom: -28px;
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
  @media screen and (min-width: 1024px) {
    align-items: flex-start;
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
    @media screen and (min-width: 1024px) {
      font-size: 100px;
      line-height: 114.5px;
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
    @media screen and (min-width: 1024px) {
      text-align: left;
      font-size: 18px;
      line-height: 32px;
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
  @media screen and (min-width: 1024px) {
    align-items: flex-start;
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
