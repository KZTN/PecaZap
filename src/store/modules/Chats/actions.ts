import { action } from "typesafe-actions";
import { ChatActions, ChatsState } from "./types";
import { AxiosError } from "axios";

export const ChatsLoadRequest = () => action(ChatActions.LOAD_REQUEST);
export const ChatsLoadSucess = (customers: ChatsState[]) =>
  action(ChatActions.LOAD_SUCCESS, customers);
export const ChatsLoadFailure = (error: AxiosError) =>
  action(ChatActions.LOAD_FAILURE, error);
