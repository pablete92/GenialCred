import Vue from "vue";
import Vuex from "vuex";
import VuexI18n from "vuex-i18n";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  getters,
  actions,
  mutations,
  state
});

Vue.use(VuexI18n.plugin, store);

export default store;
