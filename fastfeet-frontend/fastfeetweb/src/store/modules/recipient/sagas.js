import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  getRecipientsSuccess,
  saveRecipientsSuccess,
  updateRecipientsSuccess,
  getRecipientsOptionsSuccess,
} from "./actions";
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

export function* getRecipientsOptions() {
  const response = yield call(api.get, "recenpients/showAll");
  console.tron.log("buscou Opcoes recipients SAGA");

  let options = [];
  response.data.map((r) => {
    console.tron.log("Criando array");

    let option = {
      value: r.id,
      label: r.name,
    };

    options.push(option);

    console.tron.log(options);
  });

  console.tron.log(options);

  yield put(getRecipientsOptionsSuccess(options));
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

export function* saveRecipients({ payload }) {
  // try {
  console.tron.log("payload " + payload.data);

  const {
    id,
    name,
    rua,
    complemento,
    numero,
    estado,
    cidade,
    cep,
  } = payload.data;

  const recipent = Object.assign({
    id,
    name,
    rua,
    complemento,
    numero,
    estado,
    cidade,
    cep,
  });
  console.tron.log("recipent");
  console.tron.log(recipent);
  const response = yield call(api.post, "/recenpients/create", recipent);
  console.tron.log("responseDelete: " + response.data);
  if (response.data.id !== undefined) {
    toast.success("Cadastro realizado com sucesso!");
    yield put(saveRecipientsSuccess(response.data));

    history.push("/recipients");
  } else {
    toast.error("Ocorreu um erro ao tentar realizar cadastro! ");
  }
}

export function* updateRecipient({ payload }) {
  // try {
  console.tron.log("payload " + payload.data);

  const {
    id,
    name,
    rua,
    complemento,
    numero,
    estado,
    cidade,
    cep,
  } = payload.data;

  const recipient = Object.assign({
    id,
    name,
    rua,
    complemento,
    numero,
    estado,
    cidade,
    cep,
  });
  console.tron.log("Recipient será atualizado");
  console.tron.log(recipient);
  const responseEdit = yield call(
    api.put,
    "/recenpients/edit/" + recipient.id,
    recipient
  );
  console.tron.log("response: " + responseEdit);
  if (responseEdit) {
    toast.success("Atualização realizada com sucesso!");
    const response = yield call(api.get, "/recenpients/show/" + id);

    yield put(updateRecipientsSuccess(response.data));

    history.push("/EditRecipients");
  } else {
    toast.error("Ocorreu um erro ao tentar atualização! ");
  }
}

export default all([
  takeLatest("@recipients/GET_RECIPIENTS_REQUEST", getRecipients),
  takeLatest("@recipients/GET_RECIPIENTS_FILTER_REQUEST", getRecipientsByName),
  takeLatest("@recipients/GET_RECIPIENTS_DELETE_REQUEST", deleteRecipients),
  takeLatest("@recipients/SAVE_RECIPIENTS_REQUEST", saveRecipients),
  takeLatest("@recipients/UPDATE_RECIPIENTS_REQUEST", updateRecipient),
  takeLatest(
    "@recipients/GET_RECIPIENTS_OPTIONS_REQUEST",
    getRecipientsOptions
  ),
]);
