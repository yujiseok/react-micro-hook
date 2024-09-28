import { memo, useState } from "react";
import { proxy, useSnapshot } from "valtio";

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

const state = proxy<{ todos: Todo[] }>({
  todos: [],
});

const createTodo = (title: string) => {
  state.todos.push({ id: Date.now().toString(), title, done: false });
};

const removeTodo = (id: string) => {
  const index = state.todos.findIndex((todo) => todo.id === id);
  state.todos.splice(index, 1);
};

const toggleDone = (id: string) => {
  const todo = state.todos.find((todo) => todo.id === id);
  if (todo) todo.done = !todo.done;
};

const TodoItem = ({ id }: { id: string }) => {
  const todoState = state.todos.find((todo) => todo.id === id);

  const { title, done } = useSnapshot(todoState!);
  if (!title) return null;

  return (
    <div>
      <input type="checkbox" checked={done} onChange={() => toggleDone(id)} />
      <span style={{ textDecoration: done ? "line-through" : "none" }}>
        {title}
      </span>
      <button onClick={() => removeTodo(id)}>Remove</button>
    </div>
  );
};

const MemoedTodoItem = memo(TodoItem);

const NewTodo = () => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button disabled={!value}>submit</button>
    </form>
  );
};

const Todo = () => {
  const { todos } = useSnapshot(state);
  const todoIds = todos.map((todo) => todo.id);

  return (
    <div>
      {todoIds.map((id) => (
        <MemoedTodoItem key={id} id={id} />
      ))}

      <NewTodo />
    </div>
  );
};
export default Todo;
