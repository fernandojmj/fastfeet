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
    type: "@recipients/SAVE_RECIPIENTS_REQUEST",
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

export function selectRecipients(data) {
  console.tron.log("selecionando Recipient:" + data.id);
  return {
    type: "@recipients/UPDATE_RECIPIENTS_SUCCESS",
    payload: { data },
  };
}

export function getRecipientsOptions() {
  return {
    type: "@recipients/GET_RECIPIENTS_OPTIONS_REQUEST",
  };
}

export function getRecipientsOptionsSuccess(data) {
  console.tron.log("selecionando Recipient:" + data);
  return {
    type: "@recipients/GET_RECIPIENTS_OPTIONS_SUCCESS",
    payload: { data },
  };
}
