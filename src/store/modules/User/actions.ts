import { action } from "typesafe-actions";
import { UserActions, UserState } from "./types";
import { AxiosError } from "axios";
export const UserLoadRequest = () => action(UserActions.LOAD_REQUEST);
export const UserLoadSucess = (user: UserState) =>
  action(UserActions.LOAD_SUCCESS, user);
export const UserLoadFailure = (error: AxiosError) =>
  action(UserActions.LOAD_FAILURE, error);
