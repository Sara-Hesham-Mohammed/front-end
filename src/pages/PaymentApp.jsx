import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import ResultPage from "./ResultPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/result/:type" component={ResultPage} />
      </Switch>
    </Router>
  );
};

export default App;
