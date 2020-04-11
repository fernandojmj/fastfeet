export function getDeliveryManRequest() {
  return {
    type: "@delivery/GET_DELIVERY_MAN_REQUEST",
  };
}

export function getDeliveryManByNameRequest(data) {
  return {
    type: "@delivery/GET_DELIVERY_MAN_FILTER_REQUEST",
    payload: { data },
  };
}

export function selectDeliveryMan(data) {
  return {
    type: "@delivery/UPDATE_DELIVERY_MAN_SUCCESS",
    payload: { data },
  };
}

export function getDeliveryManSuccess(data) {
  return {
    type: "@delivery/GET_DELIVERY_MAN_SUCCESS",
    payload: { data },
  };
}

export function updateDeliveryManRequest(data) {
  return {
    type: "@delivery/UPDATE_DELIVERY_MAN_REQUEST",
    payload: { data },
  };
}

export function saveDeliveryManRequest(data) {
  return {
    type: "@delivery/SAVE_DELIVERY_MAN_REQUEST",
    payload: { data },
  };
}

export function saveDeliveryManSuccess(data) {
  return {
    type: "@delivery/SAVE_DELIVERY_MAN_SUCCESS",
    payload: { data },
  };
}

export function saveDeliveryManfailure() {
  return {
    type: "@delivery/SAVE_DELIVERY_MAN_FAILURE",
  };
}

export function updateDeliveryManSuccess(data) {
  return {
    type: "@delivery/UPDATE_DELIVERY_MAN_SUCCESS",
    payload: { data },
  };
}

export function updateDeliveryManFailure() {
  return {
    type: "@delivery/UPDATE_DELIVERY_MAN_FAILURE",
  };
}

export function DeleteDeliveryManRequest(data) {
  return {
    type: "@delivery/GET_DELIVERY_MAN_DELETE_REQUEST",
    payload: { data },
  };
}

export function selectProdutos(data, id) {
  return {
    type: "@delivery/SELECT_LINHA_SUCCESS",
    payload: { data, id },
  };
}

export function getDeliveryManOptions() {
  return {
    type: "@delivery/GET_DELIVERY_MAN_OPTIONS_REQUEST",
  };
}

export function getDeliveryManOptionsSuccess(data) {
  console.tron.log("selecionando Recipient:" + data);
  return {
    type: "@delivery/GET_DELIVERY_MAN_OPTIONS_SUCCESS",
    payload: { data },
  };
}
