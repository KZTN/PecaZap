import { Reducer } from "redux";
import { UserState, UserActions } from "./types";
const INITIAL_STATE: UserState = {
  name: "",
  user: "",
  password: "",
  company: "",
  photo: "",
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActions.LOAD_REQUEST:
      return {
        ...state,
      };
    case UserActions.LOAD_SUCCESS:
      return {
        ...action.payload,
      };
    case UserActions.LOAD_FAILURE: {
      console.log(action.error);
      return state;
    }

    default:
      return state;
  }
};

export default reducer;
