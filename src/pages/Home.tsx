import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin 0 6rem 4rem 6rem;

  @media only screen and (max-width: 768px) {
    margin 0 0.25rem;
  }
`;

const TextWrapper = styled.div`
  margin: 2rem;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Img = styled.img`
  border-radius: 10px;
  height: auto;
  width: auto;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
`;

const Home = () => {
  return (
    <Wrapper>
      <Img src="header_compressed.gif" />
      <TextWrapper>
        <Text>3PM · OCTOBER 09 2021</Text>
        <Text>50 ADAMS STREET</Text>
        <Text>GARDNER, MASSACHUSETTS</Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default Home;
