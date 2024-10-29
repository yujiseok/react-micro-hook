import { createContext, useContext, useState } from "react";

const initialState = { count: 0, text: "" };

export const useValue = () => useState(initialState);

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a Provider");
  }
  return context;
};

export const StateContext = createContext<ReturnType<typeof useValue> | null>(
  null
);
