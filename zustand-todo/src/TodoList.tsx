import { StoreState, useStore } from "./store";
import TodoItem from "./TodoItem";

const selectTodos = (state: StoreState) => state.todos;

const TodoList = () => {
  const todos = useStore(selectTodos);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
export default TodoList;
