import { call, put, takeLatest, all } from "redux-saga/effects";
import { ChatActions } from "./types";
import api from "../../../services/api";
import { ChatsLoadFailure, ChatsLoadSucess } from "./actions";
import { Chat } from "./types";
function* request(): object {
  try {
    const response = yield call(api.get, "chats");

    const notseen = response.data.filter(
      (seen: Chat) => seen.messages[seen.messages.length - 1].seen === false
    );

    const processedResponse = response.data.map((chat: Chat) => {
      if (chat.messages[chat.messages.length - 1].seen === false) {
        return { ...chat, lastSeen: false };
      } else {
        return { ...chat, lastSeen: true };
      }
    });

    yield put(
      ChatsLoadSucess(processedResponse, notseen, Object.keys(notseen).length)
    );
  } catch (error) {
    console.log(error);
    yield put(ChatsLoadFailure(error));
  }
}

export default all([takeLatest(ChatActions.LOAD_REQUEST, request)]);
