import type { Action } from "redux";

export type setTokenAction = Action<"setToken"> & {
  token: string;
};



export type MyActions = setTokenAction;