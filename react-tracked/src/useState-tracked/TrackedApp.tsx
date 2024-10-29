import { useState } from "react";
import { createContainer } from "react-tracked";
import useRenderCount from "./useRenderCount";

const useValue = () => useState({ count: 0, text: "hello" });

const { Provider, useTracked } = createContainer(useValue);

const Counter = () => {
  const [state, setState] = useTracked();
  const inc = () => {
    setState((prev) => ({ ...prev, count: prev.count + 1 }));
  };

  const renderCount = useRenderCount();
  console.log("Counter render count : ", renderCount);

  return (
    <div>
      count: {state.count} <button onClick={inc}>+1</button>
    </div>
  );
};

const TextBox = () => {
  const [state, setState] = useTracked();
  const setText = (text: string) => {
    setState((prev) => ({ ...prev, text }));
  };
  const renderCount = useRenderCount();
  console.log("Text render count : ", renderCount);

  return (
    <div>
      <input value={state.text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

const App = () => (
  <Provider>
    <div>
      <Counter />
      <Counter />
      <TextBox />
      <TextBox />
    </div>
  </Provider>
);

export default App;
