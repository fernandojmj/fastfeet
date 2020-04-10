import { takeLatest, all, call, put } from "redux-saga/effects";
import { getRecipientsSuccess } from "./actions";
import { toast } from "react-toastify";
import api from "~/services/api";
import history from "~/services/history";

export function* getRecipients() {
  try {
    const response = yield call(api.get, "recenpients/showAll");
    console.tron.log("buscou Destinatario SAGA");

    console.tron.log(response.data);

    yield put(getRecipientsSuccess(response.data));
    history.push("/recipients");
  } catch (error) {
    console.tron.log(error);
    toast.error(error.response.data.error.message);

    // yield put(saveMeetfailure());
  }
}

export function* getRecipientsByName({ payload }) {
  try {
    console.tron.log("payload " + payload.data);
    const filter = payload.data;
    console.tron.log("buscou Entregador por: " + filter);
    const response = yield call(api.get, "/recenpients?filter=" + filter);

    // console.tron.log(response.data);
    yield put(getRecipientsSuccess(response.data.response));
    history.push("/recipients");
  } catch (error) {
    console.tron.log(error);
    toast.error(error.response.data.error.message);
    // yield put(saveMeetfailure());
  }
}

export function* deleteRecipients({ payload }) {
  // try {
  console.tron.log("payload " + payload.data);
  const id = payload.data;
  console.tron.log("Deletar ID: " + id);
  const responseDelete = yield call(api.delete, "recenpients/delete/" + id);
  console.tron.log("responseDelete: " + responseDelete.return);
  if (responseDelete.data.return === true) {
    toast.success("Registro " + id + " removida com sucesso!");
  } else {
    toast.error("Ocorreu um erro ao tentar remover Registro " + id);
  }

  const response = yield call(api.get, "recenpients/showAll");

  yield put(getRecipientsSuccess(response.data));

  history.push("/recipients");
}

export default all([
  takeLatest("@recipients/GET_RECIPIENTS_REQUEST", getRecipients),
  takeLatest("@recipients/GET_RECIPIENTS_FILTER_REQUEST", getRecipientsByName),
  takeLatest("@recipients/GET_RECIPIENTS_DELETE_REQUEST", deleteRecipients),
]);
