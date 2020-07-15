export enum CustomersActions {
  LOAD_REQUEST = "@customers/LOAD_REQUEST",
  LOAD_SUCCESS = "@customers/LOAD_SUCCESS",
  LOAD_FAILURE = "@customers/LOAD_FAILURE",
}

export interface Contacts {
  channel: number;
  value: string;
}

export interface lastConversations {
  channel: number;
  finishedAt: number;
}

export interface Customer {
  readonly id: number;
  readonly name: string;
  readonly photo: string;
  readonly company: string;
  readonly lastConversations: lastConversations[];
  readonly observations: string;
  readonly contacts: Contacts[];
}

export interface CustomersState {
  readonly customers: Customer[];
  readonly customerSelected: number;
}
