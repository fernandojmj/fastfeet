import { takeLatest, all, call, put } from "redux-saga/effects";
import { updateProfileSuccess, updateProfileFailure } from "./actions";
import { toast } from "react-toastify";
import api from "~/services/api";

export function* updateProfile({ payload }) {
  let response = null;
  try {
    const { email, username, ...rest } = payload.data;

    console.tron.log(rest);
    const profile = Object.assign(
      { email, username },
      rest.password_old ? rest : {}
    );
    console.tron.log("profile");
    console.tron.log(profile);
    const response = yield call(api.put, "users", profile);
    console.tron.log("response");
    console.tron.log(response);
    toast.success("Perfil atualizado!!");

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    toast.error(error.response.data.error.erro);

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)]);
