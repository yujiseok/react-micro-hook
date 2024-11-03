import { proxy, useSnapshot } from "valtio";

const myTimer = proxy({
  secondPassed: 0,
  increase: () => {
    myTimer.secondPassed += 1;
  },
  reset: () => {
    myTimer.secondPassed = 0;
  },
});

setInterval(() => {
  myTimer.increase();
}, 1000);

const Timer = () => {
  const snap = useSnapshot(myTimer);
  return (
    <button onClick={() => snap.reset()}>
      seconds passed: {snap.secondPassed}
    </button>
  );
};

const App = () => {
  return (
    <div>
      <Timer />
    </div>
  );
};
export default App;
