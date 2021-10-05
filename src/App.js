/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import Docs from "./documentation";
import routes from "./documentation/routes.js";

import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <Switch>
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-in" component={SignIn} />
        {pathname.includes("docs") ? (
          <Docs>
            {routes.map(({ path, component }) => (
              <Route
                exact
                key={path}
                path={`/docs${path}`}
                component={component}
              />
            ))}
            <Redirect from="*" to="/docs/overview" />
          </Docs>
        ) : (
          <>
            <Main>
              <Route exact path="/dashboard" component={Home} />
              <Route exact path="/tables" component={Tables} />
              <Route exact path="/billing" component={Billing} />
              <Route exact path="/rtl" component={Rtl} />
              <Route exact path="/profile" component={Profile} />
              <Redirect from="*" to="/dashboard" />
            </Main>
          </>
        )}
      </Switch>
    </div>
  );
}

export default App;
