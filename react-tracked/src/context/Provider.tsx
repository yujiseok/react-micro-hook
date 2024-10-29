import { useValue, StateContext } from "./useContext";

const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <StateContext.Provider value={useValue()}>{children}</StateContext.Provider>
  );
};
export default Provider;
