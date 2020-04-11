import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  getDeliverySuccess,
  selectProdutosSucess,
  saveDeliveryRequest,
} from "./actions";
import { toast } from "react-toastify";
import api from "~/services/api";
import history from "~/services/history";

export function* saveDelivery({ payload }) {
  try {
    const { recipient_id, deliveryman_id, product } = payload.data;

    const delivery = Object.assign({ recipient_id, deliveryman_id, product });
    console.tron.log("delivery");
    console.tron.log(delivery);
    const response = yield call(api.post, "deliveries/create", delivery);
    console.tron.log("response");
    console.tron.log(response);
    toast.success("Evento salvo com sucesso!");

    history.push("/dashboard");
  } catch (error) {
    console.tron.log(error);
    toast.error(error.response.data.error.message);

    // yield put(saveMeetfailure());
  }
}

export function* getDeliverys() {
  try {
    const response = yield call(api.get, "delivery/showAll");
    // console.tron.log("buscou encomendas");

    response.data.map((delivery) => {
      if (delivery.endDate != null) {
        // setStatus("green");
        delivery["status"] = "ENTREGUE";
        // return "ENTREGUE";
      } else if (delivery.canceledAt != null) {
        delivery["status"] = "CANCELADA";
        // return "CANCELADA";
      } else if (delivery.startDate != null) {
        delivery["status"] = "RETIRADA";
        // return "RETIRADA";
      } else {
        delivery["status"] = "PENDENTE";
        // return "PENDENTE";
      }
    });

    console.tron.log(response.data);

    yield put(getDeliverySuccess(response.data));
    history.push("/dashboard");
  } catch (error) {
    console.tron.log(error);
    toast.error(error.response.data.error.message);

    // yield put(saveMeetfailure());
  }
}

export function* getDeliverysByEncomenda({ payload }) {
  // try {
  console.tron.log("payload " + payload.data);
  const filter = payload.data;
  console.tron.log("buscou encomendas por: " + filter);
  const response = yield call(api.get, "/delivery/product?filter=" + filter);

  response.data.map((delivery) => {
    if (delivery.endDate != null) {
      // setStatus("green");
      delivery["status"] = "ENTREGUE";
    } else if (delivery.canceledAt != null) {
      delivery["status"] = "CANCELADA";
    } else if (delivery.startDate != null) {
      delivery["status"] = "RETIRADA";
    } else {
      delivery["status"] = "PENDENTE";
    }
  });

  // console.tron.log(response.data);

  yield put(getDeliverySuccess(response.data));
  history.push("/dashboard");
  // } catch (error) {
  //   console.tron.log(error);
  //   toast.error(error.response.data.error.message);

  //   // yield put(saveMeetfailure());
  // }
}

export function* deleteDelivery({ payload }) {
  // try {
  console.tron.log("payload " + payload.data);
  const id = payload.data;
  console.tron.log("Deletar encomenda: " + id);
  const responseDelete = yield call(api.delete, "delivery/delete/" + id);
  console.tron.log("responseDelete: " + responseDelete.return);
  if (responseDelete.data.return === true) {
    toast.success("Encomenda " + id + " removida com sucesso!");
  } else {
    toast.error("Ocorreu um erro ao tentar remover a encomenda " + id);
  }

  const response = yield call(api.get, "delivery/showAll");

  response.data.map((delivery) => {
    if (delivery.endDate != null) {
      // setStatus("green");
      delivery["status"] = "ENTREGUE";
    } else if (delivery.canceledAt != null) {
      delivery["status"] = "CANCELADA";
    } else if (delivery.startDate != null) {
      delivery["status"] = "RETIRADA";
    } else {
      delivery["status"] = "PENDENTE";
    }
  });

  yield put(getDeliverySuccess(response.data));

  history.push("/dashboard");
}

export function* updateDelivery({ payload }) {
  // try {
  console.tron.log("payload " + payload.data);

  const { id, recipient_id, deliveryman_id, product } = payload.data;

  const delivery = Object.assign({ id, recipient_id, deliveryman_id, product });
  console.tron.log("delivery");
  console.tron.log(delivery);
  const responseEdit = yield call(
    api.put,
    "/delivery/edit/" + delivery.id,
    delivery
  );
  console.tron.log("response: " + responseEdit);
  if (responseEdit) {
    toast.success("Atualização realizada com sucesso!");
    history.push("/dashboard");
  } else {
    toast.error("Ocorreu um erro ao tentar atualização! ");
  }
}

export default all([
  takeLatest("@delivery/SAVE_DELIVERY_REQUEST", saveDelivery),
  takeLatest("@delivery/UPDATE_DELIVERY_REQUEST", updateDelivery),
  takeLatest("@delivery/GET_DELIVERY_REQUEST", getDeliverys),
  takeLatest("@delivery/GET_DELIVERY_FILTER_REQUEST", getDeliverysByEncomenda),
  takeLatest("@delivery/GET_DELIVERY_DELETE_REQUEST", deleteDelivery),
]);
