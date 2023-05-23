import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";

interface techType {
  name: string | undefined;
  photo: string | undefined;
  description: string | undefined;
  portrait: string | undefined;
}

const TechnologyInfo = ({
  name,
  photo,
  description,
  portrait,
}: techType): JSX.Element => {
  const photoUrl = `.${photo}`;
  const portraitUrl = `.${portrait}`;
  const [tech, setTech] = useState<string>("vehicle");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const currentPage = path.split("/")[2]; // Extract the page name from the URL path

    setTech(currentPage);
  }, [location]);
  return (
    <TechContainer>
      <img className="landscape" src={photoUrl} alt="" />
      <img className="portrait" src={portraitUrl} alt="" />

      <Container>
        <NavBar tech={tech}>
          <Link to="/technology/vehicle" className="vehicle">
            1
          </Link>
          <Link to="/technology/spaceport" className="spaceport">
            2
          </Link>
          <Link to="/technology/capsule" className="capsule">
            3
          </Link>
        </NavBar>
        <div className="techDescription">
          <div className="techInfo">
            <h5>THE TERMINOLOGY…</h5>
            <h3>{name}</h3>
          </div>
          <p>{description}</p>
        </div>
      </Container>
    </TechContainer>
  );
};

export default TechnologyInfo;

const TechContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  @media screen and (min-width: 768px) {
    gap: 56px;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
  }
  @media screen and (min-width: 1024px) {
    justify-content: space-between;
  }

  .landscape {
    width: 100vw;
    height: 170px;
    @media screen and (min-width: 768px) {
      height: 310px;
    }
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
  .portrait {
    display: none;
    width: 515px;
    height: 527px;
    @media screen and (min-width: 1024px) {
      display: block;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  @media screen and (min-width: 768px) {
    gap: 44px;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin-left: 145px;
    padding: 0;
  }

  .techDescription {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    .techInfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 9px;
      @media screen and (min-width: 768px) {
        gap: 16px;
      }
      @media screen and (min-width: 1024px) {
        gap: 11px;
        align-items: flex-start;
      }

      h5 {
        font-family: Barlow Condensed;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 2.36px;
        text-align: center;
        text-transform: uppercase;
        color: #d0d6f9;
        @media screen and (min-width: 768px) {
          font-size: 16px;
          line-height: 19.2px;
          letter-spacing: 2.7px;
        }
      }

      h3 {
        font-family: Bellefair;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        text-align: center;
        color: white;
        text-transform: uppercase;
        @media screen and (min-width: 768px) {
          font-size: 40px;
          line-height: 45.84px;
        }
        @media screen and (min-width: 1024px) {
          font-size: 56px;
          line-height: 64.18px;
          text-align: left;
        }
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
        font-size: 16px;
        line-height: 28px;
        max-width: 458px;
      }
      @media screen and (min-width: 1024px) {
        text-align: left;
        font-size: 18px;
        line-height: 32px;
        max-width: 444px;
      }
    }
  }
`;

const NavBar = styled.div<{ tech: string }>`
  display: flex;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: 1024px) {
    flex-direction: column;
    gap: 32px;
  }
  a {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: 50%;
    cursor: pointer;
    @media screen and (min-width: 768px) {
      width: 60px;
      height: 60px;
    }

    font-family: Bellefair;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 1px;
    text-align: center;
  }

  a:hover {
    border: 1px solid rgba(255, 255, 255, 1);
  }

  .vehicle {
    background-color: ${(props) => (props.tech === "vehicle" ? "white" : "")};
    color: ${(props) => (props.tech === "vehicle" ? "black" : "white")};
    border: ${(props) =>
      props.tech === "vehicle" ? "" : "1px solid rgba(255, 255, 255, 0.25)"};
  }

  .spaceport {
    background-color: ${(props) => (props.tech === "spaceport" ? "white" : "")};
    color: ${(props) => (props.tech === "spaceport" ? "black" : "white")};
    border: ${(props) =>
      props.tech === "spaceport" ? "" : "1px solid rgba(255, 255, 255, 0.25)"};
  }

  .capsule {
    background-color: ${(props) => (props.tech === "capsule" ? "white" : "")};
    color: ${(props) => (props.tech === "capsule" ? "black" : "white")};
    border: ${(props) =>
      props.tech === "capsule" ? "" : "1px solid rgba(255, 255, 255, 0.25)"};
  }
`;
