import produce from "immer";

const INITTIAL_STATE = {
  recipients: [],
  linhas: [],
  recipent: null,
};

export default function recipents(state = INITTIAL_STATE, action) {
  switch (action.type) {
    case "@recipients/UPDATE_RECIPIENTS_SUCCESS":
      return produce(state, (draft) => {
        draft.recipent = action.payload.data;
      });
    case "@recipients/UPDATE_RECIPIENTS_SUCCESS":
      return produce(state, (draft) => {
        draft.recipent = action.payload.data;
      });

    case "@recipients/GET_RECIPIENTS_SUCCESS":
      return produce(state, (draft) => {
        draft.recipients = action.payload.data;

        draft.recipients.map((d) => {
          draft.linhas[d.id] = false;
        });
      });

    case "@recipients/SELECT_LINHA_SUCCESS":
      return produce(state, (draft) => {
        draft.linhas[action.payload.id] = !draft.linhas[action.payload.id];
      });

    default:
      return state;
  }
}
