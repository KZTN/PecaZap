import { Reducer } from "redux";
import { CustomersState, CustomersActions } from "./types";
const INITIAL_STATE: CustomersState = {
  customers: [],
  customerSelected: -1,
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
      console.log(action.payload);
      return state;
    }
    case CustomersActions.SELECT_CUSTOMER:
      return {
        ...state,
        customerSelected: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
