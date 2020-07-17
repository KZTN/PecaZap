import { Reducer } from "redux";
import { UserState, UserActions } from "./types";
const INITIAL_STATE: UserState = {
  name: "",
  user: "",
  password: "",
  company: "",
  photo: "",
  auth: false,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActions.AUTH_SUCCESS:
      return {
        ...state,
        auth: true,
      };
    case UserActions.AUTH_FAILURE:
      return state;
    case UserActions.LOAD_SUCCESS:
      return { ...state, ...action.payload };
    case UserActions.LOAD_FAILURE: {
      console.log(action.payload);
      return state;
    }

    default:
      return state;
  }
};

export default reducer;
