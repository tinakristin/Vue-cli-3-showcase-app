import testdata from './data/testdata-eksempel.json';

const fetch = (mockData, time = 0) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockData);
  }, time);
});

/* For å teste feilmelding: Endre en av fetch-ene under til "fail".
const fail = (mockData, time = 0) => new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line
    reject({ response: { status: 404 } });
  }, time);
});
*/

export default {
  getAdresse() {
    return fetch(testdata, 1000); // wait 1s before returning testdata
  },
};
