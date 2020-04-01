import { takeLatest, all, call, put } from "redux-saga/effects";
import { saveMeetfailure, saveMeetSuccess } from "./actions";
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

    yield put(saveMeetSuccess(response.data));
    history.push("/dashboard");
  } catch (error) {
    console.tron.log(error);
    toast.error(error.response.data.error.message);

    yield put(saveMeetfailure());
  }
}

export default all([takeLatest("@meet/SAVE_MEET_REQUEST", saveMeet)]);
