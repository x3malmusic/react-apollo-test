import React from "react";
import { Route, Switch } from "react-router-dom";
import Container from '@material-ui/core/Container';

import Header from "./components/Header";
import GetPlanPage from './pages/GetPlan'

function App() {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={GetPlanPage} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
