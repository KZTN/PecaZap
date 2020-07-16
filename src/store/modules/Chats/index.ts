import { Reducer } from "redux";
import { ChatsState, ChatActions } from "./types";

const INITIAL_STATE: ChatsState = {
  chats: [],
};

const reducer: Reducer<ChatsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ChatActions.LOAD_REQUEST:
      return {
        ...state,
      };
    case ChatActions.LOAD_SUCCESS:
      return {
        ...state,
        chats: [...action.payload],
      };
    case ChatActions.LOAD_FAILURE: {
      console.log(action.error);
      return state;
    }

    default:
      return state;
  }
};

export default reducer;
