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
    yield put(
      ChatsLoadSucess(response.data, notseen, Object.keys(notseen).length)
    );
  } catch (error) {
    console.log(error);
    yield put(ChatsLoadFailure(error));
  }
}

export default all([takeLatest(ChatActions.LOAD_REQUEST, request)]);
