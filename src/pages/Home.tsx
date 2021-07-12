import styled from "styled-components";

import { Hero } from "../components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1.2em;
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
      <Text>OCTOBER 09 2021</Text>
      <Text>50 ADAMS STREET</Text>
      <Text>GARDNER, MASSACHUSETTS</Text>
    </Wrapper>
  );
};

export default Home;
