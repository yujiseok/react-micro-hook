import { useStateContext } from "./useContext";

const Counter = () => {
  const [state, setState] = useStateContext();

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
