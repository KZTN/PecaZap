import { call, put, takeLatest, all } from "redux-saga/effects";
import { ChatActions } from "./types";
import api from "../../../services/api";
import { ChatsLoadFailure, ChatsLoadSucess } from "./actions";

function* request(): object {
  try {
    const response = yield call(api.get, "chats");
    yield put(ChatsLoadSucess(response.data));
  } catch (error) {
    yield put(ChatsLoadFailure(error));
  }
}

export default all([takeLatest(ChatActions.LOAD_REQUEST, request)]);
