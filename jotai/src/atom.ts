import { atom } from "jotai";
import { TodoAtom } from "./types";

export const todosAtom = atom<TodoAtom[]>([]);
