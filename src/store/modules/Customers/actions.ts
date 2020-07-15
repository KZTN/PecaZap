import { action } from "typesafe-actions";
import { CustomersActions, CustomersState } from "./types";
import { AxiosError } from "axios";

export const CustomerLoadRequest = () => action(CustomersActions.LOAD_REQUEST);
export const CustomerLoadSucess = (customers: CustomersState[]) =>
  action(CustomersActions.LOAD_SUCCESS, customers);
export const CustomerLoadFailure = (error: AxiosError) =>
  action(CustomersActions.LOAD_FAILURE, error);
