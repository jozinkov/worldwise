import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";

export default function useCities() {
  const value = useContext(CitiesContext);
  if (value === undefined) throw new Error("Outside of the context area!");
  return value;
}
