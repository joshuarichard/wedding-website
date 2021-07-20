import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Pages } from '../types';
import { colors } from '../styles';

const StyledHero = styled.div`
  margin: 3rem 3rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: calc(100vw);

  @media only screen and (max-width: 768px) {
    margin: 2rem 2rem 1rem 2rem;
    min-width: 0;
  }
`;

const Header = styled.div`
  font-size: 6rem;
  font-weight: 300;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    font-size: 2.4rem;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MenuBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem;

  @media only screen and (max-width: 768px) {
    margin: 0.2rem;
  }
`;

const LinkWrapper = styled.div<{ clicked: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.6rem;
  border-bottom: ${({ clicked }) => (clicked ? `solid thin ${colors.text.regular}` : 'none')};

  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

type Props = {
  goBack?: boolean;
};

// https://stackoverflow.com/a/54297863
function searchEnumByValue<T extends { [index: string]: string }>(
  myEnum: T,
  enumValue: string,
): keyof T | null {
  let keys = Object.keys(myEnum).filter((x) => myEnum[x] === enumValue);
  return keys.length > 0 ? keys[0] : null;
}

const Hero = ({ goBack }: Props) => {
  const [clicked, setClicked] = useState<Pages | null>(null);
  const location = useLocation<string>();

  const handleClick = (page: Pages) => setClicked(page);

  useEffect(() => {
    if (clicked == null && Object.values(Pages).some((p) => p === location.pathname)) {
      const page = Pages[searchEnumByValue(Pages, location.pathname) as keyof typeof Pages];
      setClicked(page);
    }
  }, [clicked, location.pathname]);

  return (
    <StyledHero>
      {goBack ? (
        <Link to="/" style={{ fontSize: '1.2rem' }}>
          GO BACK
        </Link>
      ) : (
        <Text>IT'S TIME</Text>
      )}
      <Header>Josh & Claudia</Header>
      <MenuBar>
        <LinkWrapper clicked={clicked === Pages.HOME}>
          <Link to={Pages.HOME} onClick={() => handleClick(Pages.HOME)}>
            Home
          </Link>
        </LinkWrapper>
        <LinkWrapper clicked={clicked === Pages.Q_AND_A}>
          <Link to={Pages.Q_AND_A} onClick={() => handleClick(Pages.Q_AND_A)}>
            Q & A
          </Link>
        </LinkWrapper>
        <LinkWrapper clicked={clicked === Pages.RSVP}>
          <Link to={Pages.RSVP} onClick={() => handleClick(Pages.RSVP)}>
            RSVP
          </Link>
        </LinkWrapper>
        <LinkWrapper clicked={clicked === Pages.REGISTRY}>
          <Link to={Pages.REGISTRY} onClick={() => handleClick(Pages.REGISTRY)}>
            Registry
          </Link>
        </LinkWrapper>
        <LinkWrapper clicked={clicked === Pages.PICS}>
          <Link to={Pages.PICS} onClick={() => handleClick(Pages.PICS)}>
            Pics of our Happy Family
          </Link>
        </LinkWrapper>
      </MenuBar>
    </StyledHero>
  );
};

export default Hero;
