import { useStore } from "./store";

const Counter = () => {
  const count = useStore((state) => state.counter.value);
  const { increment, decrement, incrementByAmount } = useStore(
    (state) => state.counterActions
  );

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => incrementByAmount(5)}>Increment by 5</button>
    </div>
  );
};
export default Counter;
