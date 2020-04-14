import React from "react";
import "./App.css";
import MainComponent from "./layout/main";
import EnglishComponent from "./layout/eng";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const defaultto = "/chi";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from="/" to={defaultto}></Redirect>
          <Route path="/chi" component={MainComponent}></Route>
          <Route path="/eng" component={EnglishComponent}></Route>
        </Switch>
      </Router>
      {/* <ButtonComponent></ButtonComponent> */}
    </div>
  );
}

export default App;
