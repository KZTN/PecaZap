export enum ChatActions {
  LOAD_REQUEST = "@chats/LOAD_REQUEST",
  LOAD_SUCCESS = "@chats/LOAD_SUCCESS",
  LOAD_FAILURE = "@chats/LOAD_FAILURE",
  SELECT_MAIL = "@chats/SELECT_MAIL",
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
  readonly lastSeen: boolean;
}

export interface ChatsState {
  readonly chats: Chat[];
  readonly unseenChats: Chat[];
  readonly unseen: number;
  readonly selectedMail: number;
}
