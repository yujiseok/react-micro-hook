import { useReactTracked } from "./useReactTracked";

const Counter = () => {
  const { useTracked } = useReactTracked();
  const [state, setState] = useTracked();

  const plus = () => {
    setState((prev) => ({ ...prev, count: prev.count + 1 }));
  };

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={plus}>+</button>
      <hr />
    </div>
  );
};

export default Counter;
