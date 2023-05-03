import { LocalStorageKey } from "../config/localStorageKey";

const LoginService = {
  testLogin: async (username) => {
    console.log("Test Login", username);
  },

  login: async (username) => {
    localStorage.setItem(LocalStorageKey.username, username);
  },
};

export default LoginService;
