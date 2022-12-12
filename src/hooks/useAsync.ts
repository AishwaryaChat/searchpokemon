import { AxiosResponse } from "axios";
import { useCallback, useReducer } from "react";

export enum StatusType {
  IDLE = "idle",
  PENDING = "pending",
  ERROR = "error",
  RESOLVED = "resolved",
}

type stateType = {
  status: StatusType;
  error: null | string;
  data: Object | null;
};

type ActionsType =
  | { type: StatusType.PENDING }
  | { type: StatusType.IDLE }
  | { type: StatusType.ERROR; error: string }
  | { type: StatusType.RESOLVED; data: Object };

const asyncReducer = (state: stateType, action: ActionsType) => {
  switch (action.type) {
    case StatusType.PENDING: {
      return {
        status: action.type,
        data: null,
        error: null,
      };
    }
    case StatusType.IDLE:
      return {
        status: action.type,
        error: null,
        data: null,
      };
    case StatusType.ERROR:
      return {
        status: StatusType.ERROR,
        error: action.error,
        data: null,
      };
    case StatusType.RESOLVED:
      return {
        status: StatusType.RESOLVED,
        error: null,
        data: action.data,
      };
    default:
      throw new Error(`Unhandled action type`);
  }
};

export const useAsync = (initialState: stateType) => {
  const [state, dispatch] = useReducer<
    (arg1: stateType, actions: ActionsType) => stateType
  >(asyncReducer, initialState);
  const run = useCallback(
    (promise: Promise<AxiosResponse<any, any>> | null) => {
      if (!promise) return;
      dispatch({ type: StatusType.PENDING });
      promise.then(
        ({ data }) => dispatch({ type: StatusType.RESOLVED, data }),
        (error) => dispatch({ type: StatusType.ERROR, error: error.message })
      );
    },
    []
  );
  return { ...state, run };
};
