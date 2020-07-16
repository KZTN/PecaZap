import { all } from "redux-saga/effects";

import Customers from "./Customers/sagas";
import User from "./User/sagas";
import Contacts from "./Contacts/sagas";
import Chats from "./Chats/sagas";

export default function* rootSaga() {
  return yield all([Customers, User, Contacts, Chats]);
}
