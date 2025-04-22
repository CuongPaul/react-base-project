import { Outlet, Navigate } from "react-router-dom";

import { ACCESS_TOKEN } from "../../types";

const PrivateRoute = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  return accessToken ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
