import { all } from "redux-saga/effects";

import Customers from "./Customers/sagas";
import User from "./User/sagas";
import Contacts from "./Contacts/sagas";

export default function* rootSaga() {
  return yield all([Customers, User, Contacts]);
}
