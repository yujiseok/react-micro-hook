import Counter from "./Counter";
import Provider from "./Provider";
import Text from "./Text";

const ContextApp = () => {
  return (
    <Provider>
      <Counter />
      <Counter />
      <Text />
      <Text />
    </Provider>
  );
};
export default ContextApp;
