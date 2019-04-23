import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import i18n from '../locales/i18n';
import App from '../App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
localVue.component('font-awesome-icon', FontAwesomeIcon);

describe('App', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        isAuthenticated: true,
        showGlobalMessage: true,
      },
      actions: {
        setKeycloakUpdateToken: () => {},
      },
    });
  });

  it('matches the snapshot', () => {
    const wrapper = shallowMount(App, { localVue, i18n, store });
    wrapper.setProps({ updateToken: () => {} });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
