import { memo } from "react";
import { TodoAtom } from "./types";
import { useAtom } from "jotai";

const TodoItem = ({
  todoAtom,
  remove,
}: {
  todoAtom: TodoAtom;
  remove: (todoAtom: TodoAtom) => void;
}) => {
  const [todo, setTodo] = useAtom(todoAtom);

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => setTodo((prev) => ({ ...prev, done: !prev.done }))}
      />

      <span
        style={{
          textDecoration: todo.done ? "line-through" : "none",
        }}
      >
        {todo.title}
      </span>
      <button onClick={() => remove(todoAtom)}>x</button>
    </div>
  );
};
export default memo(TodoItem);
