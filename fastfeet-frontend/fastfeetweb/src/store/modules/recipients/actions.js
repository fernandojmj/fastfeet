export function getRecipientsRequest() {
  return {
    type: "@recipients/GET_RECIPIENTS_REQUEST",
  };
}

export function getRecipientsByNameRequest(data) {
  return {
    type: "@recipients/GET_RECIPIENTS_FILTER_REQUEST",
    payload: { data },
  };
}

export function getRecipientsSuccess(data) {
  return {
    type: "@recipients/GET_RECIPIENTS_SUCCESS",
    payload: { data },
  };
}

export function updateRecipientsRequest(data) {
  return {
    type: "@recipients/UPDATE_RECIPIENTS_REQUEST",
    payload: { data },
  };
}

export function saveRecipientsRequest(data) {
  return {
    type: "@recipients/SAVE_recipients_REQUEST",
    payload: { data },
  };
}

export function saveRecipientsSuccess(data) {
  return {
    type: "@recipients/SAVE_RECIPIENTS_SUCCESS",
    payload: { data },
  };
}

export function saveRecipientsfailure() {
  return {
    type: "@recipients/SAVE_RECIPIENTS_FAILURE",
  };
}

export function updateRecipientsSuccess(data) {
  return {
    type: "@recipients/UPDATE_RECIPIENTS_SUCCESS",
    payload: { data },
  };
}

export function updateRecipientsFailure() {
  return {
    type: "@recipients/UPDATE_RECIPIENTS_FAILURE",
  };
}

export function DeleteRecipientsRequest(data) {
  return {
    type: "@recipients/GET_RECIPIENTS_DELETE_REQUEST",
    payload: { data },
  };
}

export function selectProdutos(data, id) {
  return {
    type: "@recipients/SELECT_LINHA_SUCCESS",
    payload: { data, id },
  };
}
