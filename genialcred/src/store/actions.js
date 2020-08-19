const actions = {
  setSnackbar({ commit }, snackbarOptions) {
    commit("setSnack", snackbarOptions);
  },
  setLoader({ commit }, value) {
    commit("setLoader", value);
  }
};

export default actions;
