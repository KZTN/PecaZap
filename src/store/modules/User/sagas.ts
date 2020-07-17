import { call, put, takeLatest, all } from "redux-saga/effects";
import { UserActions } from "./types";
import api from "../../../services/api";
import {
  UserLoadFailure,
  UserLoadSucess,
  UserAuthSuccess,
  UserAuthFailure,
} from "./actions";

function* request(): object {
  try {
    const response = yield call(api.get, "user");
    yield put(UserLoadSucess(response.data));
  } catch (error) {
    yield put(UserLoadFailure(error));
  }
}

function* auth({ payload }: any): object {
  try {
    const response = yield call(api.get, "user");
    if (
      response.data.password === payload.password &&
      response.data.user === payload.user
    ) {
      yield put(UserAuthSuccess());
    } else {
      console.log("usuario ou senha invalidos");
      yield put(UserAuthFailure());
    }
  } catch (error) {
    yield put(UserAuthFailure());
  }
}

export default all([
  takeLatest(UserActions.LOAD_REQUEST, request),
  takeLatest(UserActions.AUTH_REQUEST, auth),
]);
