import { action } from "typesafe-actions";
import { ContactsActions, ContactsState } from "./types";
import { AxiosError } from "axios";
export const ContactLoadRequest = () => action(ContactsActions.LOAD_REQUEST);
export const ContactLoadSucess = (user: ContactsState) =>
  action(ContactsActions.LOAD_SUCCESS, user);
export const ContactLoadFailure = (error: AxiosError) =>
  action(ContactsActions.LOAD_FAILURE, error);
