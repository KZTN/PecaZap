export enum CustomersActions {
  LOAD_REQUEST = "@customers/LOAD_REQUEST",
  LOAD_SUCCESS = "@customers/LOAD_SUCCESS",
  LOAD_FAILURE = "@customers/LOAD_FAILURE",
  SELECT_CUSTOMER = "@customers/SELECT_CUSTOMER",
}

export interface Contact {
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
  readonly contacts: Contact[];
}

export interface CustomersState {
  readonly customers: Customer[];
  readonly customerSelected: number;
}
