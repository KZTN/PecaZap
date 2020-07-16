import { action } from "typesafe-actions";
import { ChatActions, ChatsState } from "./types";
import { AxiosError } from "axios";

export const ChatsLoadRequest = () => action(ChatActions.LOAD_REQUEST);
export const ChatsLoadSucess = (
  chats: ChatsState[],
  unseenChats: ChatsState[],
  unseen: number
) => action(ChatActions.LOAD_SUCCESS, { chats, unseenChats, unseen });

export const ChatsLoadFailure = (error: AxiosError) =>
  action(ChatActions.LOAD_FAILURE, error);

export const ChatsSelectMail = (id: number) =>
  action(ChatActions.SELECT_MAIL, id);
