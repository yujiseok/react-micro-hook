import { proxy, useSnapshot } from "valtio";

const state = proxy({ count1: 0, count2: 0 });

// 각 객체의 요소만을 접근해 리렌더링이 줄어든다.

const Counter1 = () => {
  const snap = useSnapshot(state); // freeze된 snapshot을 반환
  const inc = () => ++state.count1; // useSnapshot 훅에 의해 추적 정보 감지됨

  return (
    <div>
      <h1>Counter1: {snap.count1}</h1>
      <button onClick={inc}>Increment</button>
    </div>
  );
};
const Counter2 = () => {
  const snap = useSnapshot(state);
  const inc = () => ++state.count2;

  return (
    <div>
      <h1>Counter1: {snap.count2}</h1>
      <button onClick={inc}>Increment</button>
    </div>
  );
};

const Counter = () => {
  return (
    <div>
      <Counter1 />
      <Counter2 />
    </div>
  );
};
export default Counter;
