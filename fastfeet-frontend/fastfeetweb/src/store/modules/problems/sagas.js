import { takeLatest, all, call, put } from "redux-saga/effects";
import { getProblemsSuccess } from "./actions";
import { getDeliveryRequest } from "~/store/modules/delivery/actions";

import { toast } from "react-toastify";
import api from "~/services/api";
import history from "~/services/history";

export function* getProblems() {
  try {
    console.tron.log("buscou Problemas SAGA");
    const response = yield call(api.get, "problems");

    console.tron.log(response.data.response);

    yield put(getProblemsSuccess(response.data.response));
    history.push("/Problems");
  } catch (error) {
    console.tron.log(error);
    toast.error(error.response.data.error.message);

    // yield put(saveMeetfailure());
  }
}

export function* cancelDeliveryByProblems({ payload }) {
  // try {
  console.tron.log("payload " + payload.data);
  const id = payload.data;
  console.tron.log("Deletar ID: " + id);
  const responseCancel = yield call(
    api.delete,
    `problem/${id}/cancel-delivery`
  );
  console.tron.log("responseCancel: " + responseCancel.response);
  if (responseCancel.data.response === true) {
    toast.success("Ecomenda cancelada com sucesso!");
  } else {
    toast.error("Ocorreu um erro ao tentar cancelar encomenda " + id);
  }

  yield put(getDeliveryRequest());
}

export default all([
  takeLatest("@problems/GET_PROBLEMS_REQUEST", getProblems),
  takeLatest("@problems/GET_PROBLEMS_CANCEL_REQUEST", cancelDeliveryByProblems),
]);
