import { useContext } from "react";
import { ThemeContext } from "../pages/_app";

export const useTheme = () => useContext(ThemeContext);