import { useAtom } from "jotai";
import { todosAtom } from "./atom";
import { useCallback } from "react";
import TodoItem from "./TodoItem";
import { TodoAtom } from "./types";

const TodoList = () => {
  const [todos, setTodos] = useAtom(todosAtom);

  const removeTodo = useCallback(
    (todoAtom: TodoAtom) =>
      setTodos((prev) => prev.filter((item) => item !== todoAtom)),
    [setTodos]
  );

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={`${todo}`} todoAtom={todo} remove={removeTodo} />
      ))}
    </div>
  );
};
export default TodoList;
