// ProtectedRoute.js
import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect, useLocation } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import Cookies from 'universal-cookie';
import { checkPermission } from '../apis/authentication';
import {
  Spin
} from "antd";
import Main from '../components/layout/Main';

export const ProtectedRoute = ({ Component: Component, isEditable = false, page = null, ...rest }) => {
  const cookies = new Cookies();
  const token = cookies.get('token');
  const { pathname } = useLocation();
  const [permission, setPermission] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("pathname", pathname);
    console.log("rest.path", rest.path);
    console.log("page", page);
    console.log('token', token);
    ReCheckAuth();
  }, [pathname]);
  const ReCheckAuth = () => {
    if (page == null) return;
    checkPermission(page).then((res) => {
      setPermission(res);
      setLoading(false); // set loading to false once we have the response

    });
  };

  // if (!token) {
  //   return <Redirect exact to="/sign-in" state={{ from: pathname }} replace />;
  // }

  // if(page == null) return () => <Route {...rest} render={(props) => <Component isEditable exact {...props} />} />;

  if (loading && page != null) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>
      <Spin size="large" />
    </div>;
  } else {

    return (
      <Route
        {...rest}
        render={(props) => {
          if (page == null) {
            return <Component exact isEditable {...props} />;
          }
          if(page != null && permission !=null){
            if (permission?.data?.canView) {
              return <Component exact isEditable permissions={permission?.data} {...props} />;
            } else {
              setLoading(false);
              setPermission({});
              return <Redirect exact to="/un-authorized" state={{ from: pathname }} replace />;
            }
          }
        }}
      />
    );
  }

};


export default ProtectedRoute;
