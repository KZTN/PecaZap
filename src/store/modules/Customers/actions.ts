import { action } from "typesafe-actions";
import { CustomersActions, CustomersState } from "./types";
import { AxiosError } from "axios";

export const CustomersLoadRequest = () => action(CustomersActions.LOAD_REQUEST);
export const CustomersLoadSucess = (customers: CustomersState[]) =>
  action(CustomersActions.LOAD_SUCCESS, customers);
export const CustomersLoadFailure = (error: AxiosError) =>
  action(CustomersActions.LOAD_FAILURE, error);
export const CustomersSelectCustomer = (id: number) =>
  action(CustomersActions.SELECT_CUSTOMER, id);
