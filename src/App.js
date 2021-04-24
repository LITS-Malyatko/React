import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Page404 from "./components/Page404";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <Router>
        <div>
          {/* temp nav menu*/}
          <nav>
            <ul style={{display: "flex"}}>
              <li style={{marginRight: "10px"}}>
                <Link to="/">Home</Link>
              </li>
              <li style={{marginRight: "10px"}}>
                <Link to="/login">Login</Link>
              </li>
              <li style={{marginRight: "10px"}}>
                <Link to="/w">empty page</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
          <Route exact path="/">
            <Home />
          </Route>
            <Route>
              <Page404 />
            </Route>

        </Switch>
        </div>
      </Router>
    </>
  );
}