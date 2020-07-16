export enum ChatActions {
  LOAD_REQUEST = "@chats/LOAD_REQUEST",
  LOAD_SUCCESS = "@chats/LOAD_SUCCESS",
  LOAD_FAILURE = "@chats/LOAD_FAILURE",
}

export interface Message {
  readonly seen: boolean;
  readonly timestamp: number;
  readonly body: string;
  readonly type: string;
}

export interface Chat {
  readonly messages: Message[];
  readonly id: number;
  readonly customer: number;
  readonly channel: number;
  readonly subject: "";
  readonly start: number;
}

export interface ChatsState {
  readonly chats: Chat[];
  readonly unseenChats: Chat[];
  readonly unseen: number;
}
