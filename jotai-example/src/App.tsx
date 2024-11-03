import { atom, useAtom } from "jotai";

const textAtom = atom("");
const charCountAtom = atom((get) => get(textAtom).length);

const CharCount = () => {
  const charCount = useAtom(charCountAtom)[0];
  return <p>Character count: {charCount}</p>;
};

const App = () => {
  const [text, setText] = useAtom(textAtom);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <p>{text}</p>
      <br />
      <CharCount />
    </div>
  );
};
export default App;
