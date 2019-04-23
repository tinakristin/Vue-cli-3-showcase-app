import axios from 'axios';

require('es6-promise').polyfill();

// axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
// const adressesSok = 'adresser/v1';
axios.defaults.baseURL = 'adresser/v1';
const adressesSok = '/sok';

const index = {
  getAdresse(adresse) {
    return new Promise((resolve, reject) => {
      axios.get(`${adressesSok}?sok=${adresse}`,
        {})
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default index;
