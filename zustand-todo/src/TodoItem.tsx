import { memo } from "react";
import { StoreState, Todo, useStore } from "./store";

const selectRemoveTodo = (state: StoreState) => state.removeTodo;
const selectToggleTodo = (state: StoreState) => state.toggleTodo;

const TodoItem = ({ todo }: { todo: Todo }) => {
  const removeTodo = useStore(selectRemoveTodo);
  const toggleTodo = useStore(selectToggleTodo);

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      />

      <span
        style={{
          textDecoration: todo.done ? "line-through" : "none",
          marginLeft: 16,
        }}
      >
        {todo.title}
      </span>

      <button onClick={() => removeTodo(todo.id)}>X</button>
    </div>
  );
};
export default memo(TodoItem);
