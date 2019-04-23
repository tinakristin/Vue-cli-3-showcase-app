import { shallowMount } from '@vue/test-utils';
import i18n from '../../locales/i18n';
import Modal from '../Modal.vue';


describe('Modal', () => {
  it('matches the snapshot', () => {
    const wrapper = shallowMount(Modal, { i18n });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
