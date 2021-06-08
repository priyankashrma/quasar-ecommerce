export function getUser(state) {
  return state.user;
}

export function isUserAuth(state) {
  return !!state.user;
}

export function getError(state) {
  return state.error;
}
