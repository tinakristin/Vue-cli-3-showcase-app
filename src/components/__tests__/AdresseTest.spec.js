import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import i18n from '../../locales/i18n';
import AdresseTest from '../AdresseTest.vue';
import MockStore from '../../../tests/unit/mockVuexStore';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.component('font-awesome-icon', FontAwesomeIcon);

// Mocks
const store = new Vuex.Store(MockStore);

describe('AdresseTest', () => {
  it('matches the snapshot', () => {
    const wrapper = shallowMount(AdresseTest, {
      localVue, i18n, store,
      // Important for mocking functions with moment, due to timezone-trouble in jenkins:
      computed: { getDate() { return '16. mai 2019 kl. 16:04' } },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
