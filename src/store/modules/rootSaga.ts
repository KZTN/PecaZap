import { all } from "redux-saga/effects";
import customers from "./Customers/sagas";

export default function* rootSaga() {
  return yield all([customers]);
}
