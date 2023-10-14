import React, { createContext, useState, useEffect } from "react";
// import userActions from "../helpers/userActions";

export const UserContext = createContext();

export default ({ children }) => {
  const [permission, setPermission] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <UserContext.Provider
      value={{
        permission,
        setPermission,
        authenticated,
        setAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};