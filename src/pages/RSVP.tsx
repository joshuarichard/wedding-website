import styled from "styled-components";

import { Hero } from "../components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QAndA = () => {
  return (
    <Wrapper>
      <Hero goBack={true} />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScsJTHMxwxB1wWKj9UDY1tNmMxQ-gaUxNFZP6MZgJQ2PyiHtQ/viewform?embedded=true"
        width="700"
        height="1200"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        style={{
          background: "#ffffff",
          borderRadius: "10px",
        }}
      >
        Loading…
      </iframe>
    </Wrapper>
  );
};

export default QAndA;
