import { atom, useAtom } from "jotai";
import { todosAtom } from "./atom";
import { useState } from "react";
import { ITodo } from "./types";

const NewTodo = () => {
  const [, setTodos] = useAtom(todosAtom);
  const [value, setValue] = useState("");

  const handleClick = () => {
    setTodos((prev) => [...prev, atom<ITodo>({ title: value, done: false })]);
    setValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick} disabled={!value}>
        +
      </button>
    </div>
  );
};
export default NewTodo;
