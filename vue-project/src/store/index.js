import { createStore } from "vuex";
import colors from './modules/colors';

export default createStore({
  state: {
    primary:'blue'
  },
  getters: {},
  mutations: {
  },
  actions: {},
  modules: {
    colors
  },
});
