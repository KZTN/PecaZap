import { call, put, takeLatest, all } from "redux-saga/effects";
import { ContactsActions } from "./types";
import api from "../../../services/api";
import { ContactLoadFailure, ContactLoadSucess } from "./actions";

function* request(): object {
  try {
    const response = yield call(api.get, "contacts");
    yield put(ContactLoadSucess(response.data));
  } catch (error) {
    yield put(ContactLoadFailure(error));
  }
}

export default all([takeLatest(ContactsActions.LOAD_REQUEST, request)]);
