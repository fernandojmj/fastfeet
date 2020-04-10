import produce from "immer";

const INITTIAL_STATE = {
  problems: [],
  linhas: [],
  problem: null,
};

export default function recipents(state = INITTIAL_STATE, action) {
  switch (action.type) {
    case "@problems/UPDATE_PROBLEMS_SUCCESS":
      return produce(state, (draft) => {
        draft.recipent = action.payload.data;
      });
    case "@problems/UPDATE_PROBLEMS_SUCCESS":
      return produce(state, (draft) => {
        draft.recipent = action.payload.data;
      });

    case "@problems/GET_PROBLEMS_SUCCESS":
      return produce(state, (draft) => {
        draft.problems = action.payload.data;

        draft.problems.map((d) => {
          draft.linhas[d.id] = false;
        });
      });

    case "@problems/SELECT_LINHA_SUCCESS":
      return produce(state, (draft) => {
        draft.linhas[action.payload.id] = !draft.linhas[action.payload.id];
      });

    default:
      return state;
  }
}
