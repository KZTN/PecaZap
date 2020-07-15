import { Reducer } from "redux";
import { CustomersState, CustomersActions } from "./types";
const INITIAL_STATE: CustomersState = {
  customers: [],
};

const reducer: Reducer<CustomersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CustomersActions.LOAD_REQUEST:
      return {
        ...state,
      };
    case CustomersActions.LOAD_SUCCESS:
      return {
        ...state,
        customers: [...action.payload],
      };
    case CustomersActions.LOAD_FAILURE: {
      console.log(action.error);
      return state;
    }

    default:
      return state;
  }
};

export default reducer;
