import { useReducer } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import { ACCESS_TOKEN } from "./types";
import { AppContext } from "./contexts";
import { PrivateRoute } from "./components";
import { Home, Signin, NotFound } from "./pages";
import { AccountReducer, initialAccountState } from "./contexts/account";

const App = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);

  const [accountState, accountDispatch] = useReducer(
    AccountReducer,
    initialAccountState
  );

  return (
    <AppContext.Provider value={{ accountState, accountDispatch }}>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route
            path="/signin"
            element={token ? <Navigate to="/home" /> : <Signin />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
