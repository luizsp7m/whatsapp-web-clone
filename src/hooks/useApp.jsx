import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export function useApp() {
  const values = useContext(AppContext);
  return values;
}