import { call, put, takeLatest, all } from "redux-saga/effects";
import { UserActions } from "./types";
import api from "../../../services/api";
import { UserLoadFailure, UserLoadSucess } from "./actions";

function* request(): object {
  try {
    const response = yield call(api.get, "user");
    yield put(UserLoadSucess(response.data));
  } catch (error) {
    yield put(UserLoadFailure(error));
  }
}

export default all([takeLatest(UserActions.LOAD_REQUEST, request)]);
