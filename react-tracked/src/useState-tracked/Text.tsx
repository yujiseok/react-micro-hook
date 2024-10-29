import { useReactTracked } from "./useReactTracked";
import useRenderCount from "./useRenderCount";

const Text = () => {
  const { useTracked } = useReactTracked();
  const [state, setState] = useTracked();
  const renderCount = useRenderCount();

  const setText = (text: string) => {
    setState((prev) => ({ ...prev, text }));
  };

  console.log("Text render count : ", renderCount);

  return (
    <div>
      <input
        type="text"
        value={state.text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Text;
