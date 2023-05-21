import { styled } from "styled-components";

const CrewInfo = (): JSX.Element => {
  return (
    <Container>
      <div className="imgContainer">
        <img src="" alt="" />
        <hr />
      </div>
    </Container>
  );
};
export default CrewInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;

  .imgContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 177px;
      height: 222px;
    }

    hr {
    }
  }
`;
