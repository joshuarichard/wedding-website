import styled from 'styled-components';

import { colors } from '../styles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  iframe {
    height: calc(100vh);
    width: calc(100vw);
    margin: 4rem;
    box-sizing: border-box;
    background-color: ${colors.home};
  }
`;

const QAndA = () => {
  return (
    <Wrapper>
      <iframe
        title="RSVP Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScsJTHMxwxB1wWKj9UDY1tNmMxQ-gaUxNFZP6MZgJQ2PyiHtQ/viewform?embedded=true"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </Wrapper>
  );
};

export default QAndA;
