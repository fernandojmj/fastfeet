import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  getDeliveryManSuccess,
  saveDeliveryManSuccess,
  getDeliveryManOptionsSuccess,
} from "./actions";
import { toast } from "react-toastify";
import api from "~/services/api";
import history from "~/services/history";
import { de } from "date-fns/esm/locale";

export function* getDeliverysMans() {
  try {
    const response = yield call(api.get, "deliveryMan/showAll");
    // console.tron.log("buscou encomendas");

    console.tron.log(response.data);

    yield put(getDeliveryManSuccess(response.data));
    history.push("/deliveryman");
  } catch (error) {
    console.tron.log(error);
    toast.error(error.response.data.error.message);

    // yield put(saveMeetfailure());
  }
}

export function* getDeliverysManByName({ payload }) {
  try {
    console.tron.log("payload " + payload.data);
    const filter = payload.data;
    console.tron.log("buscou Entregador por: " + filter);
    const response = yield call(api.get, "/deliveryman?filter=" + filter);

    // console.tron.log(response.data);
    yield put(getDeliveryManSuccess(response.data.response));
    history.push("/deliveryMan");
  } catch (error) {
    console.tron.log(error);
    toast.error(error.response.data.error.message);
    // yield put(saveMeetfailure());
  }
}

export function* deleteDeliveryMan({ payload }) {
  // try {
  console.tron.log("payload " + payload.data);
  const id = payload.data;
  console.tron.log("Deletar ID: " + id);
  const responseDelete = yield call(api.delete, "deliveryMan/delete/" + id);
  console.tron.log("responseDelete: " + responseDelete.return);
  if (responseDelete.data.return === true) {
    toast.success("Registro " + id + " removida com sucesso!");
  } else {
    toast.error("Ocorreu um erro ao tentar remover Registro " + id);
  }

  const response = yield call(api.get, "deliveryMan/showAll");

  yield put(getDeliveryManSuccess(response.data));

  history.push("/deliveryMan");
}

export function* saveDeliveryMan({ payload }) {
  // try {
  console.tron.log("payload " + payload.data);

  const { name, email, avatarId } = payload.data;

  const ddeliveryMan = Object.assign({ name, email, avatarId });
  console.tron.log("ddeliveryMan");
  console.tron.log(ddeliveryMan);
  const response = yield call(api.post, "deliveryMan/create", ddeliveryMan);
  console.tron.log("responseDelete: " + response.data);
  if (response.data.id !== undefined) {
    toast.success("Cadastro realizado com sucesso!");
    const response = yield call(api.get, "deliveryMan/showAll");

    yield put(saveDeliveryManSuccess(response.data));

    history.push("/cadDeliveryMan");
  } else {
    toast.error("Ocorreu um erro ao tentar realizar cadastro! ");
  }
}

export function* updateDeliveryMan({ payload }) {
  // try {
  console.tron.log("payload " + payload.data);

  const { name, email, avatarId, id } = payload.data;

  const deliveryMan = Object.assign({ name, email, avatarId, id });
  console.tron.log("ddeliveryMan");
  console.tron.log(deliveryMan);
  const responseEdit = yield call(
    api.put,
    "/deliveryMan/edit/" + deliveryMan.id,
    deliveryMan
  );
  console.tron.log("response: " + responseEdit);
  if (responseEdit) {
    toast.success("Atualização realizada com sucesso!");
    const response = yield call(api.get, "/deliveryMan/show/" + id);

    yield put(saveDeliveryManSuccess(response.data));

    history.push("/editDeliveryMan");
  } else {
    toast.error("Ocorreu um erro ao tentar atualização! ");
  }
}

export function* getDeliveryManOptions() {
  const response = yield call(api.get, "deliveryMan/showAll");
  console.tron.log("buscou Opcoes deliveryMan SAGA");

  let options = [];
  response.data.map((r) => {
    let option = {
      value: r.id,
      label: r.name,
    };

    options.push(option);
  });

  console.tron.log(options);

  yield put(getDeliveryManOptionsSuccess(options));
}

export default all([
  takeLatest("@delivery/GET_DELIVERY_MAN_REQUEST", getDeliverysMans),
  takeLatest(
    "@delivery/GET_DELIVERY_MAN_FILTER_REQUEST",
    getDeliverysManByName
  ),
  takeLatest("@delivery/GET_DELIVERY_MAN_DELETE_REQUEST", deleteDeliveryMan),
  takeLatest("@delivery/SAVE_DELIVERY_MAN_REQUEST", saveDeliveryMan),
  takeLatest("@delivery/UPDATE_DELIVERY_MAN_REQUEST", updateDeliveryMan),
  takeLatest(
    "@delivery/GET_DELIVERY_MAN_OPTIONS_REQUEST",
    getDeliveryManOptions
  ),
]);
