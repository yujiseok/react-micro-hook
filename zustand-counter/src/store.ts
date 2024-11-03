import { create } from "zustand";

interface State {
  counter: {
    value: number;
  };
  counterActions: {
    increment: () => void;
    decrement: () => void;
    incrementByAmount: (amount: number) => void;
  };
}

export const useStore = create<State>((set) => ({
  counter: {
    value: 0,
  },
  counterActions: {
    increment: () =>
      set((state) => ({ counter: { value: state.counter.value + 1 } })),
    decrement: () =>
      set((state) => ({ counter: { value: state.counter.value - 1 } })),
    incrementByAmount: (amount) =>
      set((state) => ({ counter: { value: state.counter.value + amount } })),
  },
}));
