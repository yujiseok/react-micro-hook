import { proxy, snapshot } from "valtio";
import Counter from "./Counter";
import Todo from "./Todo";

const state = proxy({ count: 0 });

// 각 객체는 서로 다른 참조를 갖는다.
//
const snap = snapshot(state); // object freeze가 적용된 불변 객체를 반환
++state.count;
const snap2 = snapshot(state);

console.log(snap);
console.log(snap2);
console.log(state);

const App = () => {
  return (
    <div>
      <Counter />
      <Todo />
    </div>
  );
};
export default App;
