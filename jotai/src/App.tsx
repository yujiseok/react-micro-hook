import ActionAtom from "./ActionAtom";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";

const App = () => {
  return (
    <>
      <TodoList />
      <NewTodo />
      <ActionAtom />
    </>
  );
};
export default App;
