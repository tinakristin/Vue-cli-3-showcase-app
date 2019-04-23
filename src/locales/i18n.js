import Vue from 'vue';
import VueI18n from 'vue-i18n';
import translation from './nb-NO/translation.json';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'no', // set locale
  fallbackLocale: 'no',
  messages: {
    no: translation, // set locale messages
  },
});
