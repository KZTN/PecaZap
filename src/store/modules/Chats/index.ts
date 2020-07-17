import { Reducer } from "redux";
import { ChatsState, ChatActions, Chat } from "./types";
import produce from "immer";

const INITIAL_STATE: ChatsState = {
  chats: [],
  unseenChats: [],
  unseen: 0,
  selectedMail: -1,
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
        chats: [...action.payload.chats],
        unseenChats: [...action.payload.unseenChats],
        unseen: action.payload.unseen,
      };
    case ChatActions.LOAD_FAILURE: {
      console.log(action.payload);
      return state;
    }
    case ChatActions.REMOVE_CHAT_NOTIFICATION:
      return produce(state, (draft) => {
        const selectedChat = draft.unseenChats.filter((chat: Chat) =>
          chat.customer === action.payload.customer
            ? chat.id !== action.payload.id
            : { ...chat }
        );
        draft.unseenChats = selectedChat;
      });
    case ChatActions.SELECT_MAIL:
      return {
        ...state,
        selectedMail: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
