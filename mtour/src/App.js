import React from "react";
import "./App.css";
import MainComponent from "./layout/main";
import EnglishComponent from "./layout/eng";
import ReactButtonComponet from "../src/components/buttonlan/lan";
import VideoComponentFromPage from "../src/components/video";

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const defaultto = "/zh";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from="/" to={defaultto}></Redirect>
          <Route path="/zh" component={MainComponent}></Route>
          <Route path="/en" component={EnglishComponent}></Route>
          <Route path="/video" component={VideoComponentFromPage}></Route>
        </Switch>
      </Router>
      <ReactButtonComponet></ReactButtonComponet>
    </div>
  );
}

export default App;
