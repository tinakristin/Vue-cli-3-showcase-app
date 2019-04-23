import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import i18n from '../locales/i18n';
import eksempelstart from './modules/eksempelstart';

Vue.use(Vuex);
Vue.use(i18n);

const state = {
  isAuthenticated: false,
  userInfo: {},
};

export const storeStructure = {
  strict: process.env.VUE_APP_NODE_ENV !== 'production',
  state,
  modules: {
    eksempelstart,
  },
  getters: {},
  actions: {},
  mutations: {},
};

const vuexStore = new Store(storeStructure);

export default vuexStore;
