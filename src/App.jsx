import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import Partners from "./pages/Partners";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const Heritage = lazy(() => import("./pages/Heritage"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Blogs = lazy(() => import("./pages/Blogs"));


function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          {/* <Route path="/create-account" component={CreateAccount} /> */}
          {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
          <Route path="/heritage" component={Heritage} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/partners" component={Partners} />

          {/* Place new routes over this */}
          <Route path="/app" component={Layout} />
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/" to="/login" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
