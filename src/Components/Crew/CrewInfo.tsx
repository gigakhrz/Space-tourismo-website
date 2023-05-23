import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";

interface CrewType {
  name: string | undefined;
  photo: string | undefined;
  role: string | undefined;
  bio: string | undefined;
}

const CrewInfo = ({ name, photo, role, bio }: CrewType): JSX.Element => {
  const imgSrc = `.${photo}`;
  const [person, setPerson] = useState<string>("douglas");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const currentPage = path.split("/")[2]; // Extract the page name from the URL path

    setPerson(currentPage);
  }, [location]);

  return (
    <Container>
      <div className="imgContainer">
        <img src={imgSrc} alt="" />
        <hr />
      </div>
      <InfoContainer person={person}>
        <NavBar person={person}>
          <Link to="/crew/douglas" className="douglas" />
          <Link to="/crew/mark" className="mark" />
          <Link to="/crew/victor" className="victor" />
          <Link to="/crew/anousheh" className="anousheh" />
        </NavBar>
        <div className="personDescription">
          <div className="personInfo">
            <h5>{role}</h5>
            <h3>{name}</h3>
          </div>
          <p>{bio}</p>
        </div>
      </InfoContainer>
    </Container>
  );
};
export default CrewInfo;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
  }

  .imgContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 177px;
      height: 222px;

      @media screen and (min-width: 768px) {
        width: 436.37px;
        height: 542px;
      }
    }

    hr {
      width: 100%;
      border: none;
      height: 1px;
      background: #383b4b;
      @media screen and (min-width: 768px) {
        display: none;
      }
    }
  }
`;

//person info and nav bar
const InfoContainer = styled.div<{ person: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  .personDescription {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    order: 2;
    @media screen and (min-width: 768px) {
      order: 1;
    }

    //role and full name
    .personInfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      h5 {
        font-family: Bellefair;
        font-size: 16px;
        font-weight: 400;
        line-height: 18px;
        text-align: center;
        color: white;
        opacity: 0.5;
        text-transform: uppercase;
        @media screen and (min-width: 768px) {
          font-size: 24px;
          line-height: 27.5px;
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
      }
    }
    //description
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
        max-width: ${(props) =>
          props.person === "douglas"
            ? "458px"
            : props.person === "mark"
            ? "520px"
            : props.person === "victor"
            ? "592px"
            : "536px"};
      }
      @media screen and (min-width: 1024px) {
        text-align: left;
      }
    }
  }
`;
//nav bar which is in InfoConateier
const NavBar = styled.nav<{ person: string }>`
  display: flex;
  gap: 16px;
  align-items: center;
  order: 1;
  @media screen and (min-width: 768px) {
    order: 2;
  }

  a {
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
  }
  // indicates which one is selected,the selected one has opacity 0.5s
  .douglas {
    opacity: ${(props) => (props.person === "douglas" ? "0.5" : "")};
  }

  .mark {
    opacity: ${(props) => (props.person === "mark" ? "0.5" : "")};
  }

  .victor {
    opacity: ${(props) => (props.person === "victor" ? "0.5" : "")};
  }

  .anousheh {
    opacity: ${(props) => (props.person === "anousheh" ? "0.5" : "")};
  }
`;
