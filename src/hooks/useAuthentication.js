import { useContext } from "react";
import { AuthenticationContext } from "../contexts/AuthenticationContext";

export default function useAuthentication() {
  const value = useContext(AuthenticationContext);
  if (value === undefined)
    throw new Error("Outside of Authentication context!");
  return value;
}
