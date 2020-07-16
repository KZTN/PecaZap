import { combineReducers } from "redux";

import Customers from "./Customers";
import User from "./User";
import Contacts from "./Contacts";

export default combineReducers({ Customers, User, Contacts });
