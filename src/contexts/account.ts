import { TAction } from ".";

interface IAccountState {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export enum ACCOUNT_ACTION {
  SET_ACCOUNT = "SET_ACCOUNT",
}

const initialAccountState: IAccountState = {
  id: "",
  name: "",
  email: "",
  avatar: "",
};

const AccountReducer = (state: IAccountState, action: TAction) => {
  const { type, payload } = action;

  switch (type) {
    case ACCOUNT_ACTION.SET_ACCOUNT:
      return { ...state, ...payload };

    default:
      throw new Error(`Action type ${type} is undefined`);
  }
};

export { AccountReducer, initialAccountState };
