import styled from "styled-components";

import { Hero } from "../components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  margin: 1rem;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    font-size: 1rem;
  }
`;

const Img = styled.img`
  width: 70%;
  height: auto;
  border-radius: 10px;
  margin: 1rem;
`;

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <Img src="josh_and_claudia_header_pic.jpeg"></Img>
      <TextWrapper>
        <p>OCTOBER 09 2021</p>
        <p>50 ADAMS STREET</p>
        <p>GARDNER, MASSACHUSETTS</p>
      </TextWrapper>
    </Wrapper>
  );
};

export default Home;
