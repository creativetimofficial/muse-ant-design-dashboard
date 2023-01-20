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
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Sites from "./pages/Sites";
import Building from "./pages/Building";
import Meter from "./pages/Meter";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Config from "./pages/Config";
import Alert from "./pages/Alert";
import BuildingPerformance from "./pages/BuildingPerformance";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/sites" component={Sites} />
          <Route exact path="/building" component={Building} />
          <Route exact path="/meter" component={Meter} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/config" component={Config} />
          <Route exact path="/alert" component={Alert} />
          <Route exact path="/buildingPerformance" component={BuildingPerformance} />

          <Redirect from="*" to="/dashboard" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
