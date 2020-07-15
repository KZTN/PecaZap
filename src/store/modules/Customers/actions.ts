import { action } from "typesafe-actions";
import { CustomersActions, CustomersState } from "./types";
import { AxiosError } from "axios";
export const LoadRequest = () => action(CustomersActions.LOAD_REQUEST);
export const LoadSucess = (customers: CustomersState[]) =>
  action(CustomersActions.LOAD_SUCCESS, customers);
export const LoadFailure = (error: AxiosError) =>
  action(CustomersActions.LOAD_FAILURE, error);
