export enum UserActions {
  LOAD_REQUEST = "@user/LOAD_REQUEST",
  LOAD_SUCCESS = "@user/LOAD_SUCCESS",
  LOAD_FAILURE = "@user/LOAD_FAILURE",
}

export interface UserState {
  readonly name: string;
  readonly user: string;
  readonly password: string;
  readonly company: string;
  readonly photo: string;
}
