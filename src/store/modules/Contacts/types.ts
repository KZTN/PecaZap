export enum ContactsActions {
  LOAD_REQUEST = "@contacts/LOAD_REQUEST",
  LOAD_SUCCESS = "@contacts/LOAD_SUCCESS",
  LOAD_FAILURE = "@contacts/LOAD_FAILURE",
  SELECT_CHANNEL = "@contacts/SELECT_CHANNEL",
}

export interface Type {
  readonly channel: number;
  readonly type: string;
}
export interface ContactsState {
  readonly contacts: Type[];
  readonly channelSelected: number;
}
