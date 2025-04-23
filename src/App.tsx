import { useRef, useEffect, useReducer } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import "./App.scss";
import { ACCESS_TOKEN } from "./types";
import { AppContext } from "./contexts";
import { PrivateRoute } from "./components";
import { Home, Signin, NotFound } from "./pages";
import { AccountReducer, initialAccountState } from "./contexts/account";

const App = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const [accountState, accountDispatch] = useReducer(
    AccountReducer,
    initialAccountState
  );

  useEffect(() => {
    if (wrapperRef.current) {
      const widthByDesign = 960;
      const { innerWidth } = window;

      const proportion = Math.floor((innerWidth * 10) / widthByDesign) / 10;

      wrapperRef.current.style.setProperty("--proportion", `${proportion}`);
    }
  }, []);

  return (
    <div ref={wrapperRef} className="app-wrapper">
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
    </div>
  );
};

export default App;
