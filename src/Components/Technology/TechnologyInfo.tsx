import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";

interface techType {
  name: string | undefined;
  photo: string | undefined;
  description: string | undefined;
}

const TechnologyInfo = ({
  name,
  photo,
  description,
}: techType): JSX.Element => {
  const photoUrl = `.${photo}`;
  const [tech, setTech] = useState<string>("vehicle");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const currentPage = path.split("/")[2]; // Extract the page name from the URL path

    setTech(currentPage);
  }, [location]);
  return (
    <TechContainer>
      <img src={photoUrl} alt="" />

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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;

  img {
    width: 100%;
    height: 170px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;
  width: 100%;
  padding: 0 24px;

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
          letter-spacing: 2.7pxs;
        }
        @media screen and (min-width: 1200px) {
          font-size: 56px;
          line-height: 64.18px;
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
        @media screen and (min-width: 1200px) {
          font-size: 56px;
          line-height: 64.18px;
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
  a {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: 50%;
    cursor: pointer;

    font-family: Bellefair;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 1px;
    text-align: center;
  }

  .vehicle {
    background-color: ${(props) => (props.tech === "vehicle" ? "white" : "")};
    color: ${(props) => (props.tech === "vehicle" ? "black" : "white")};
    border: ${(props) => (props.tech === "vehicle" ? "" : "1px solid #FFFFFF")};
  }

  .spaceport {
    background-color: ${(props) => (props.tech === "spaceport" ? "white" : "")};
    color: ${(props) => (props.tech === "spaceport" ? "black" : "white")};
    border: ${(props) =>
      props.tech === "spaceport" ? "" : "1px solid #FFFFFF"};
  }

  .capsule {
    background-color: ${(props) => (props.tech === "capsule" ? "white" : "")};
    color: ${(props) => (props.tech === "capsule" ? "black" : "white")};
    border: ${(props) => (props.tech === "capsule" ? "" : "1px solid #FFFFFF")};
  }
`;
