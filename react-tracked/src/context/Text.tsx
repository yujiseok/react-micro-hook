import { useStateContext } from "./useContext";

const Text = () => {
  const [state, setState] = useStateContext();

  const setText = (text: string) => {
    setState((prev) => ({ ...prev, text }));
  };

  return (
    <div>
      <input
        type="text"
        value={state.text}
        onChange={(e) => setText(e.target.value)}
      />
      <hr />
    </div>
  );
};
export default Text;
