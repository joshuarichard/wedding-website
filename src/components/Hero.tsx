import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHero = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    margin: 1rem;
  }
`;

const Header = styled.div`
  font-size: 6rem;
  font-weight: 300;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    font-size: 3rem;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
`;

const MenuBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  margin: 1rem;

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    flex-direction: column;
    margin: 0.2rem;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.4rem;
`;

type Props = {
  goBack?: boolean;
};

const Hero = ({ goBack }: Props) => {
  return (
    <StyledHero>
      {goBack ? (
        <Link to="/" style={{ fontSize: "1.2rem" }}>
          GO BACK
        </Link>
      ) : (
        <Text>IT'S TIME</Text>
      )}
      <Header>Josh & Claudia</Header>
      <MenuBar>
        <LinkWrapper>
          <Link to="/q-and-a">Q & A</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link to="/rsvp">RSVP</Link>
        </LinkWrapper>
        <LinkWrapper>
          <a href="https://google.com">Registry</a>
        </LinkWrapper>
      </MenuBar>
    </StyledHero>
  );
};

export default Hero;
