import { Helmet } from "react-helmet";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { Home, QAndA, RSVP } from "./pages";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem;
`;

const App = () => {
  return (
    <BrowserRouter basename="">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/q-and-a" component={QAndA} />
          <Route exact path="/rsvp" component={RSVP} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
