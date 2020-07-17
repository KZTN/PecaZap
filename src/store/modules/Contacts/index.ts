import { Reducer } from "redux";
import { ContactsState, ContactsActions } from "./types";
const INITIAL_STATE: ContactsState = {
  contacts: [],
  channelSelected: -1,
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
      console.log(action.payload);
      return state;
    }
    case ContactsActions.SELECT_CHANNEL:
      return {
        ...state,
        channelSelected: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
