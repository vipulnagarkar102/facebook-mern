import Cookies from "js-cookie";
import { json } from "react-router-dom";

export function userReducer(state = Cookies.get("user")
? JSON.parse(Cookies.get("user")):null, action) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;

    default:
      return state;
  }
}
