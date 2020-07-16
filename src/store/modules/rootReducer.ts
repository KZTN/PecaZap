import { combineReducers } from "redux";

import Customers from "./Customers";
import User from "./User";
import Contacts from "./Contacts";
import Chats from "./Chats";

export default combineReducers({ Customers, User, Contacts, Chats });
