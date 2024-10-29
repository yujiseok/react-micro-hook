import { createContainer } from "react-tracked";
import { useValue } from "../context/useContext";

export const useReactTracked = () => createContainer(useValue);
