import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import i18n from '../../locales/i18n';
import DataSourceInfo from '../DataSourceInfo.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.component('font-awesome-icon', FontAwesomeIcon);

const propsData = {
  translationPath: 'dataSourceInfo.kartverket',
};

describe('DataSourceInfo', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({ state: {} });
  });

  it('matches the snapshot', () => {
    const wrapper = shallowMount(DataSourceInfo, {
      localVue, i18n, store, propsData,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
