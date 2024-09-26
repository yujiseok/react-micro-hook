import { atom, useAtom } from "jotai";

const count = atom(0);

const incrementAtom = atom(null, (get, set) => set(count, (c) => c + 1));

const ActionAtom = () => {
  const [count2, plus] = useAtom(incrementAtom);
  console.log(count2);
  return (
    <div>
      <div>{count2}</div>
      <div>
        <button onClick={plus}>+</button>
      </div>
    </div>
  );
};
export default ActionAtom;
