export function getProblemsRequest() {
  return {
    type: "@problems/GET_PROBLEMS_REQUEST",
  };
}

export function getProblemsByNameRequest(data) {
  return {
    type: "@problems/GET_PROBLEMS_FILTER_REQUEST",
    payload: { data },
  };
}

export function getProblemsSuccess(data) {
  return {
    type: "@problems/GET_PROBLEMS_SUCCESS",
    payload: { data },
  };
}

export function CancelarProblemsRequest(data) {
  return {
    type: "@problems/GET_PROBLEMS_CANCEL_REQUEST",
    payload: { data },
  };
}

export function selectProdutos(data, id) {
  return {
    type: "@problems/SELECT_LINHA_SUCCESS",
    payload: { data, id },
  };
}
