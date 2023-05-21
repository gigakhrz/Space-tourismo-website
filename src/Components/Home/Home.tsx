import { styled } from "styled-components";
import Header from "../Header/Header";
import homeBgMobile from "../../../public/assets/home/background-home-mobile.jpg";
import bgTablet from "../../../public/assets/home/background-home-tablet.jpg";
import bgDesktop from "../../../public/assets/home/background-home-desktop.jpg";

const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <Header />

      <div className="cont">
        <div className="description">
          <h3>SO, YOU WANT TO TRAVEL TO</h3>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="circle">
          EXPLORE <div className="hover"></div>
        </div>
      </div>
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
  @media screen and (min-width: 1024px) {
    padding: 40px 0 0 55px;
    gap: 251px;
    background-image: url(${bgDesktop});
  }

  .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 81px;

    @media screen and (min-width: 768px) {
      gap: 156px;
    }
    @media screen and (min-width: 1024px) {
      flex-direction: row;
      width: 100%;
    }
    @media screen and (min-width: 1200px) {
      padding: 0 165px 0 125px;
      gap: 0;
      justify-content: space-between;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    @media screen and (min-width: 768px) {
      gap: 24px;
      width: 450px;
    }
    @media screen and (min-width: 1024px) {
      align-items: flex-start;
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
      @media screen and (min-width: 1024px) {
        line-height: 33.6px;
        font-size: 28px;
        letter-spacing: 4.72px;
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
      @media screen and (min-width: 1024px) {
        line-height: 172px;
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
      @media screen and (min-width: 1024px) {
        line-height: 32px;
        font-size: 18px;
        text-align: left;
      }
    }
  }

  .circle {
    width: 150px;
    height: 150px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

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
      margin-bottom: 90px;
    }
    @media screen and (min-width: 1024px) {
      margin-bottom: 0;
      align-self: flex-end;
      width: 274px;
      height: 274px;
      position: relative;
    }

    .hover {
      position: absolute;
      width: 450px;
      height: 450px;
      background-color: white;
      opacity: 0.1;
      mix-blend-mode: normal;
      border-radius: 50%;
      display: none;
    }
  }

  .circle:hover .hover {
    display: block;
  }
`;

export default Home;
