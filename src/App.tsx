import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import ReactGA from 'react-ga';

import { Head, Hero } from './components';
import { Home, Pics, QAndA, Registry, RSVP } from './pages';
import { Pages } from './types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh);
  min-width: 100%;

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

const App = () => {
  const [ga, setGa] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== undefined && !ga) {
      console.log('setting ga');
      ReactGA.initialize('UA-131070858-1');
      setGa(true);
    }
  }, [ga]);

  return (
    <BrowserRouter>
      <Head />
      <Hero />
      <Wrapper>
        <Switch>
          <Route exact path={Pages.HOME} component={Home} />
          <Route exact path={Pages.Q_AND_A} component={QAndA} />
          <Route exact path={Pages.RSVP} component={RSVP} />
          <Route exact path={Pages.REGISTRY} component={Registry} />
          <Route exact path={Pages.PICS} component={Pics} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
