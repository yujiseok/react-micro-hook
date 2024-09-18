import { create } from "zustand";

export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

export interface StoreState {
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  todos: [],
  addTodo: (title) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: state.todos.length + 1,
          title,
          done: false,
        },
      ],
    })),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  toggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }));
  },
}));
