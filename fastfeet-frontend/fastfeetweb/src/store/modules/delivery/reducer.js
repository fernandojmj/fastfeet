import produce from "immer";

const INITTIAL_STATE = {
  deliverys: [],
  delivery,
  produtos: []
};

export default function delivery(state = INITTIAL_STATE, action) {
  switch (action.type) {
    case "@delivery/UPDATE_DELIVERY_SUCCESS":
      return produce(state, draft => {
        draft.delivery = action.payload.delivery;
      });
    case "@delivery/UPDATE_DELIVERY_SUCCESS":
      return produce(state, draft => {
        draft.delivery = action.payload.delivery;
      });

    case "@delivery/GET_DELIVERY_SUCCESS":
      return produce(state, draft => {
        draft.deliverys = action.payload.data;

        draft.deliverys.map(d => {
          draft.produtos[d.id] = false;
        });
      });

    case "@delivery/SELECT_PRODUTOS_SUCCESS":
      return produce(state, draft => {
        draft.produtos[action.payload.id] = !draft.produtos[action.payload.id];
      });

    default:
      return state;
  }
}
