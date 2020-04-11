import produce from "immer";

const INITTIAL_STATE = {
  deliverysMan: [],
  deliveryMan,
  linhas: [],
  deliveryManOptions: [],
};

export default function deliveryMan(state = INITTIAL_STATE, action) {
  switch (action.type) {
    case "@delivery/UPDATE_DELIVERY_MAN_SUCCESS":
      return produce(state, (draft) => {
        draft.deliveryMan = action.payload.data;
      });

    case "@delivery/SAVE_DELIVERY_MAN_SUCCESS":
      return produce(state, (draft) => {
        draft.deliveryMan = action.payload.data;
      });

    case "@delivery/GET_DELIVERY_MAN_SUCCESS":
      return produce(state, (draft) => {
        draft.deliverysMan = action.payload.data;

        draft.deliverysMan.map((d) => {
          draft.linhas[d.id] = false;
        });
      });

    case "@delivery/SELECT_LINHA_SUCCESS":
      return produce(state, (draft) => {
        draft.linhas[action.payload.id] = !draft.linhas[action.payload.id];
      });

    case "@delivery/GET_DELIVERY_MAN_OPTIONS_SUCCESS":
      return produce(state, (draft) => {
        draft.deliveryManOptions = action.payload.data;
      });

    default:
      return state;
  }
}
