import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import HelloWorld from '../HelloWorld.vue';
import MockStore from '../../../tests/unit/mockVuexStore';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.component('font-awesome-icon', FontAwesomeIcon);

// Mocks
const store = new Vuex.Store(MockStore);

const propsData = {
  msg: 'Welcome',
};

describe('HelloWorld', () => {
  it('matches the snapshot', () => {
    const wrapper = shallowMount(HelloWorld, {
      localVue, store, propsData,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }, localVue, store,
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
