import { takeLatest, all, call, put } from "redux-saga/effects";
import { getDeliverySuccess } from "./actions";
import { toast } from "react-toastify";
import api from "~/services/api";
import history from "~/services/history";

export function* saveMeet({ payload }) {
  try {
    const { nome, local, dataMeet, descricao } = payload.data;

    const meet = Object.assign({ nome, local, descricao, dataMeet });
    console.tron.log("Meet");
    console.tron.log(meet);
    const response = yield call(api.post, "evento", meet);
    console.tron.log("response");
    console.tron.log(response);
    toast.success("Evento salvo com sucesso!");

    // yield put(saveMeetSuccess(response.data));
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

    response.data.map(delivery => {
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

  response.data.map(delivery => {
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

export default all([
  takeLatest("@delivery/SAVE_MEET_REQUEST", saveMeet),
  takeLatest("@delivery/GET_DELIVERY_REQUEST", getDeliverys),
  takeLatest("@delivery/GET_DELIVERY_FILTER_REQUEST", getDeliverysByEncomenda)
]);
