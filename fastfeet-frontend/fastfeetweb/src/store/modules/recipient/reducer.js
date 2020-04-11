import produce from "immer";

const INITTIAL_STATE = {
  recipients: [],
  recipient,
  linhas: [],
  recipientOptions: [],
};

export default function recipient(state = INITTIAL_STATE, action) {
  switch (action.type) {
    case "@recipients/UPDATE_RECIPIENTS_SUCCESS":
      console.tron.log(action.payload.data);
      return produce(state, (draft) => {
        draft.recipient = action.payload.data;
      });
    case "@recipients/SAVE_RECIPIENTS_SUCCESS":
      return produce(state, (draft) => {
        draft.recipient = action.payload.data;
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

    case "@recipients/GET_RECIPIENTS_OPTIONS_SUCCESS":
      console.tron.log("Entrou reducer options success");
      console.tron.log(action.payload.data);
      return produce(state, (draft) => {
        draft.recipientOptions = action.payload.data;
      });

    default:
      return state;
  }
}
