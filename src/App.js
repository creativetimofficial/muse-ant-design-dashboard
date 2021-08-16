import "antd/dist/antd.css";
import "./App.css";
import "./responsive.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./component/pages/Home";
import Tables from "./component/pages/Tables";
import SignUp from "./component/pages/SignUp";
import SignIn from "./component/pages/SignIn";
import Billing from "./component/pages/Billing";
import Profile from "./component/pages/Profile";
import Rtl from "./component/pages/Rtl";
import Main from "./component/layout/main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/dashboard" exact component={Home} /> */}
          {/* <Route path="/tables" exact component={Tables} /> */}
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />
          {/* <Route path="/rtl" exact component={Rtl} /> */}
          <Route path="/:id" component={Main} />
          {/* <Route path="/billing" exact component={Billing} /> */}
          {/* <Route path="/profile" exact component={Profile} /> */}
          <Redirect
            to={{
              pathname: "/dashboard",
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
