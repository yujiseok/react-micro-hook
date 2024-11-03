import { makeAutoObservable, set } from "mobx";
import { observer } from "mobx-react-lite";

class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.secondsPassed += 1;
  }

  reset() {
    this.secondsPassed = 0;
  }
}

const myTimer = new Timer();

setInterval(() => {
  myTimer.increase();
}, 1000);

// hoc
// secondsPassed가 변경될 때마다 TimerView가 리렌더링 된다.
// 복잡하다 복잡해
const TimerView = observer(({ timer }: { timer: Timer }) => (
  <button onClick={() => timer.reset()}>
    Seconds passed: {timer.secondsPassed}
  </button>
));

const App = () => {
  return (
    <div>
      <TimerView timer={myTimer} />
    </div>
  );
};
export default App;
