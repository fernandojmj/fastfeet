import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import user from "./user/sagas";
import meet from "./meet/sagas";
import delivery from "./delivery/sagas";
import deliveryMan from "./deliveryMan/sagas";
import recipient from "./recipient/sagas";
import problems from "./problems/sagas";

export default function* rootSaga() {
  return yield all([
    auth,
    user,
    meet,
    delivery,
    deliveryMan,
    recipient,
    problems,
  ]);
}
