// ProtectedRoute.js
import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect, useLocation } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import Cookies from 'universal-cookie';
import { checkPermission } from '../apis/authentication';
const PermissionsMap = {
    '/users': {permisionName:"Users", RequiredPermission:"canView"},
    '/Adduser': {permisionName:"Users", RequiredPermission:"canAdd"},
    '/Edituser/:applicationUserId': {permisionName:"Users", RequiredPermission:"canEdit"},
};
export const ProtectedRoute = ({ Component: Component, ...rest }) => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const { pathname } = useLocation();
    const [permission, setPermission] = useState({});
    useEffect(() => {
        ReCheckAuth();
    }, [pathname]);
    
    if (!token) {
        return <Redirect to="/sign-in" state={{ from: pathname }} replace />;
    }
    return (
      <Route
        {...rest}
        render={(props) => {
          console.log("user  is " , permission);
        //   ReCheckAuth();
          if (!PermissionsMap[pathname]) {
            return <Component {...props} />;
        }
          else if (permission?.data?.canView) {
            return <Component permissions={permission.data} {...props} />;
          } else {
            return <Redirect to="/dashboard" />;
          }
        }}
      />
    );
  
    function ReCheckAuth() {
        if(PermissionsMap[pathname]?.permisionName == undefined) return;
      checkPermission(PermissionsMap[pathname]?.permisionName).then((res) => {setPermission(res);});
    }
  };

  
  export default ProtectedRoute;

  // const ProtectedRoute = ({ children }) => {
  
  
  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }
  
    
  
  //   if (!PermissionsMap[pathname]) {
  //     return children;
  //   }
  
  //   if (error || !permissions[PermissionsMap[pathname]?.RequiredPermission]) {
  //     return <Redirect to="/dashboard" state={{ from: pathname }} replace />;
  //   }
  
  //   return children;
  // };
