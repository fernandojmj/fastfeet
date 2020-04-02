export function getDeliveryRequest() {
  return {
    type: "@delivery/GET_DELIVERY_REQUEST"
  };
}

export function getDeliveryByEncomendaRequest(data) {
  return {
    type: "@delivery/GET_DELIVERY_FILTER_REQUEST",
    payload: { data }
  };
}

export function selectProdutos(data, id) {
  console.tron.log(data);
  console.tron.log(id);
  return {
    type: "@delivery/SELECT_PRODUTOS_SUCCESS",
    payload: { data, id }
  };
}

export function selectProdutosSucess(data, id) {
  return {
    type: "@delivery/SELECT_PRODUTOS_SUCCESS",
    payload: { data, id }
  };
}

export function getDeliverySuccess(data) {
  return {
    type: "@delivery/GET_DELIVERY_SUCCESS",
    payload: { data }
  };
}

export function updateDeliveryRequest(data) {
  return {
    type: "@delivery/UPDATE_DELIVERY_REQUEST",
    payload: { data }
  };
}

export function saveDeliveryRequest(data) {
  return {
    type: "@delivery/SAVE_DELIVERY_REQUEST",
    payload: { data }
  };
}

export function saveDeliverySuccess(data) {
  return {
    type: "@delivery/SAVE_DELIVERY_SUCCESS",
    payload: { data }
  };
}

export function saveDeliveryfailure() {
  return {
    type: "@delivery/SAVE_DELIVERY_FAILURE"
  };
}

export function updateDeliverySuccess(data) {
  return {
    type: "@delivery/UPDATE_DELIVERY_SUCCESS",
    payload: { data }
  };
}

export function updateDeliveryFailure() {
  return {
    type: "@delivery/UPDATE_DELIVERY_FAILURE"
  };
}