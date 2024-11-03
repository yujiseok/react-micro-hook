import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment } from "../slice/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <br />
      <span>{count}</span>
      <br />
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};
export default Counter;
