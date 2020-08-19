const mutations = {
  setSnack(state, snackbarOptions) {
    state.snack = snackbarOptions.notification;
    state.snackType = snackbarOptions.type;
  },
  setLoader(state, value) {
    state.isLoading = value;
  }
};

export default mutations;
