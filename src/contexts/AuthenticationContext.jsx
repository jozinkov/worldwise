import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const AuthenticationContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  loginFailed: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login/fail":
      return { ...state, loginFailed: true };
    case "login/success":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loginFailed: false,
      };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action.");
  }
}

AuthenticationProvider.propTypes = {
  children: PropTypes.any,
};

function AuthenticationProvider({ children }) {
  const [{ user, isAuthenticated, loginFailed }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (FAKE_USER.email === email && FAKE_USER.password === password)
      dispatch({ type: "login/success", payload: FAKE_USER });
    else dispatch({ type: "login/fail" });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated,
        loginFailed,
        login,
        logout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export { AuthenticationProvider, AuthenticationContext };
