import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin 0 6rem;
  position: relative;

  @media only screen and (max-width: 768px) {
    margin 0 0.25rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 2rem;

  @media only screen and (max-width: 768px) {
    width: 90%;
    margin: 1rem;
  }
`;

const pics: {
  src: string;
  alt: string;
}[] = [
  {
    src: '/pictures/proposal.jpeg',
    alt: 'Our proposal picture',
  },
  {
    src: '/pictures/two_friends.jpeg',
    alt: 'Our proposal picture',
  },
];

const Pics = () => {
  return (
    <Wrapper>
      {pics.map((p, idx) => (
        <Image key={idx} src={p.src} alt={p.alt} />
      ))}
    </Wrapper>
  );
};

export default Pics;
