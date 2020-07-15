import { call, put, takeLatest, all } from "redux-saga/effects";
import { CustomersActions } from "./types";
import api from "../../../services/api";
import { LoadFailure, LoadSucess } from "./actions";

interface Action {
  type: string;
  payload: number;
}

function* request({ payload }: Action): object {
  try {
    const response = yield call(api.get, "customers");
    yield put(LoadSucess([payload, response.data]));
  } catch (error) {
    yield put(LoadFailure(error));
  }
}

export default all([takeLatest(CustomersActions.LOAD_REQUEST, request)]);
