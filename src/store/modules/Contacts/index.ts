import { Reducer } from "redux";
import { ContactsState, ContactsActions } from "./types";
const INITIAL_STATE: ContactsState = {
  contacts: [],
};

const reducer: Reducer<ContactsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContactsActions.LOAD_REQUEST:
      return {
        ...state,
      };
    case ContactsActions.LOAD_SUCCESS:
      return {
        ...action.payload,
      };
    case ContactsActions.LOAD_FAILURE: {
      console.log(action.error);
      return state;
    }

    default:
      return state;
  }
};

export default reducer;
