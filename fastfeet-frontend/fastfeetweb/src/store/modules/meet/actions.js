export function updateMeetRequest(data) {
  return {
    type: "@meet/UPDATE_MEET_REQUEST",
    payload: { data }
  };
}

export function saveMeetRequest(data) {
  return {
    type: "@meet/SAVE_MEET_REQUEST",
    payload: { data }
  };
}

export function saveMeetSuccess(meet) {
  return {
    type: "@meet/SAVE_MEET_SUCCESS",
    payload: { meet }
  };
}

export function saveMeetfailure() {
  return {
    type: "@meet/SAVE_MEET_FAILURE"
  };
}

export function updateMeetSuccess(meet) {
  return {
    type: "@meet/UPDATE_MEET_SUCCESS",
    payload: { meet }
  };
}

export function updateMeetFailure() {
  return {
    type: "@user/UPDATE_MEET_FAILURE"
  };
}
