import { styled } from "styled-components";
import Header from "../Header/Header";
import homeBgMobile from "../../../public/assets/home/background-home-mobile.jpg";
import bgTablet from "../../../public/assets/home/background-home-tablet.jpg";
import bgDesktop from "../../../public/assets/home/background-home-desktop.jpg";

const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <Header />
      <div className="description">
        <h3>SO, YOU WANT TO TRAVEL TO</h3>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="circle">EXPLORE</div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding: 24px 24px 0;
  background-image: url(${homeBgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 768px) {
    padding: 0;
    gap: 106px;
    background-image: url(${bgTablet});
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    @media screen and (min-width: 768px) {
      gap: 24px;
      width: 450px;
      margin-bottom: 50px;
    }

    h3 {
      font-family: Barlow Condensed;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 2.7px;
      text-align: center;
      color: #d0d6f9;
      @media screen and (min-width: 768px) {
        line-height: 24px;
        font-size: 20px;
        letter-spacing: 3.375px;
      }
    }

    h1 {
      font-family: Bellefair;
      font-size: 80px;
      font-weight: 400;
      line-height: 100px;
      text-align: center;
      color: white;
      @media screen and (min-width: 768px) {
        line-height: 150px;
        font-size: 150px;
      }
    }

    p {
      font-family: Barlow;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      text-align: center;
      color: #d0d6f9;
      @media screen and (min-width: 768px) {
        line-height: 28px;
        font-size: 16px;
      }
    }
  }

  .circle {
    margin-top: 33px;
    width: 150px;
    height: 150px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #0b0d17;
    font-family: Bellefair;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 1.25px;
    text-align: center;

    @media screen and (min-width: 768px) {
      width: 242px;
      height: 242px;
      line-height: 36.37px;
      font-size: 32px;
      letter-spacing: 2;
      margin-top: 0;
      margin-bottom: 90px;
    }
  }
`;

export default Home;
