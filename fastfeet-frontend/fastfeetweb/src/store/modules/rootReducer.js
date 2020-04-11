import { combineReducers } from "redux";

import auth from "./auth/reducer";
import user from "./user/reducer";
import meet from "./meet/reducer";
import delivery from "./delivery/reducer";
import deliveryMan from "./deliveryMan/reducer";
import recipient from "./recipient/reducer";
import problems from "./problems/reducer";
export default combineReducers({
  auth,
  user,
  meet,
  delivery,
  deliveryMan,
  recipient,
  problems,
});
