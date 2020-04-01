import produce from "immer";

const INITTIAL_STATE = {
  meet: null
};

export default function meet(state = INITTIAL_STATE, action) {
  switch (action.type) {
    case "@user/UPDATE_MEET_SUCCESS":
      return produce(state, draft => {
        draft.meet = action.payload.meet;
      });

    case "@user/UPDATE_MEET_FAILURE":
      return produce(state, draft => {});

    default:
      return state;
  }
}
