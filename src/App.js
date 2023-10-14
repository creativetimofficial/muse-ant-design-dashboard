import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import MakeTable from "./pages/MakeTable";
import ModelTable from "./pages/ModelTable";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import UserProvider from "./context/UserContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import ViewUser from "./pages/Users/ViewUser";
import AddUser from "./pages/Users/AddUser";
import ViewRole from "./pages/Roles/ViewRole"; 
import AddRole from "./pages/Roles/AddRole";   
import ViewMake from "./pages/Make/ViewMake";
import AddMake from "./pages/Make/AddMake";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Main>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/makeTable" component={MakeTable} />
            <Route exact path="/modelTable" component={ModelTable} />

            <Route exact path="/users" component={ViewUser} />
            <Route exact path="/Addusers" component={AddUser} />
            {/* <ProtectedRoute exact path="/users" Component={ViewUser} /> */}
            {/* <ProtectedRoute exact path="/Adduser" Component={AddUser} /> */}
            <Route exact path="/Edituser/:applicationUserId" render={(props) => <AddUser {...props} isEditable={true} />} />

            <ProtectedRoute exact path="/roles" Component={ViewRole} />
            <ProtectedRoute exact path="/Addrole" Component={AddRole} />
            <Route exact path="/Editrole/:applicationRoleId" render={(props) => <AddRole {...props} isEditable={true} />} />

            <ProtectedRoute exact path="/makes" Component={ViewMake} />
            <ProtectedRoute exact path="/Addmake" Component={AddMake} />
            <Route exact path="/Editmake/:makeId" render={(props) => <AddMake {...props} isEditable={true} />} />

            <Route exact path="/billing" component={Billing} />
            <Route exact path="/rtl" component={Rtl} />
            <Route exact path="/profile" component={Profile} />
          </Main>
        </Switch>
      </UserProvider>
    </div>
  );
}

export default App;
