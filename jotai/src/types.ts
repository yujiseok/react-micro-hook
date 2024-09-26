import { PrimitiveAtom } from "jotai";

export interface ITodo {
  title: string;
  done: boolean;
}

export type TodoAtom = PrimitiveAtom<ITodo>;
