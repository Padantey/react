import React from "react";
import SignIn from "./signInUp/SignIn";
import SignUp from "./signInUp/SignUp";
import HomePage from "./Home/HomePage";
import Error from "../Components/Navigation/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    appState: <SignIn />
  };
  componentDidMount() {
    const newAppState = (
      <Router>
        <Switch>
          <Route path="/signin" component={SignIn} exact />
          <Route path="/signup" component={SignUp} exact />
          <Route path="/homepage" component={HomePage} exact />
          <Route component={Error} />
        </Switch>
      </Router>
    );

    this.setState({
      appState: newAppState
    });
  }
  render() {
    return this.state.appState;
  }
}
export default App;
