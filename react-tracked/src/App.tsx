import ContextApp from "./context/ContextApp";
import TrackedApp from "./useState-tracked/TrackedApp";

const App = () => {
  return (
    <div>
      <ContextApp />
      <br />
      <br />
      <br />
      <br />
      <TrackedApp />
    </div>
  );
};
export default App;
