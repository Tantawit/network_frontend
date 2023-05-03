const { LocalStorageKey } = require("../config/localStorageKey");
import axioss from "axios";

let axios = axioss.create({
  headers: {
    Authorization: `Bearer ${localStorage.getItem(LocalStorageKey)}`,
  },
  baseURL: serverURL,
});
const UpdateToken = () => {
  axios = axioss.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem(LocalStorageKey.username)}`,
    },
    baseURL: serverURL,
  });
};
export { axios, UpdateToken };
