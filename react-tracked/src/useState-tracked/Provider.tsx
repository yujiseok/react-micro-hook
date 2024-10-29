import { useReactTracked } from "./useReactTracked";

const Provider = ({ children }: React.PropsWithChildren) => {
  const { Provider: ReactTrackedProvider } = useReactTracked();

  return <ReactTrackedProvider>{children}</ReactTrackedProvider>;
};
export default Provider;
