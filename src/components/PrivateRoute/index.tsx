import { Outlet, Navigate } from "react-router-dom";

import { ACCESS_TOKEN } from "../../types";

const PrivateRoute = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);

  return token ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
