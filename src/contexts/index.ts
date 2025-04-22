import { createContext } from "react";

import { initialAccountState } from "./account";

export type TAction = {
  type: string;
  payload: any;
};

const AppContext = createContext({
  accountState: initialAccountState,
  accountDispatch: (action: TAction) => {},
});

export { AppContext };
