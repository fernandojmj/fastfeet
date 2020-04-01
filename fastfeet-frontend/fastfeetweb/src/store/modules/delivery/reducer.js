import produce from "immer";

const INITTIAL_STATE = {
  deliverys: [],
  delivery
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
      });

    default:
      return state;
  }
}
