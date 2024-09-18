import { useState } from "react";
import { StoreState, useStore } from "./store";

const selectAddTodo = (state: StoreState) => state.addTodo;

const NewTodo = () => {
  const addTodo = useStore(selectAddTodo);
  const [title, setTitle] = useState("");

  const handleClick = () => {
    addTodo(title);
    setTitle("");
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleClick} disabled={!title}>
        Add
      </button>
    </div>
  );
};
export default NewTodo;
