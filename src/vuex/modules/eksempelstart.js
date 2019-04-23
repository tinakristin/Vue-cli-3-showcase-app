import apiClient from '../../api/ApiClient';

const state = {
  loadingTestdata: true,
  errorFetchingTestData: false,
  testData: {},
  hentedeAdresser: [],
  filterPostnr: [],
  sortFunction: 'date_descending',
  favorittAdresser: [],
};

/* Eksempel på sorteringsfunksjoner */
const sortFunctions = {
  date_ascending: (a, b) => new Date(a.oppdateringsdato) - new Date(b.oppdateringsdato),
  date_descending: (a, b) => new Date(b.oppdateringsdato) - new Date(a.oppdateringsdato),
};

/* Eksempel på filtreringsfunksjoner */
const filterFunctions = {
  postnr: (item) => {
    if (state.filterPostnr.length > 0) {
      return state.filterPostnr.includes(item.postnummer);
    }
    // Returns all items if there is no active filter
    return true;
  },
};

// Manipulering av data fra state:
const getters = {
  eksempelGetterMedFilterOgSortering: (state, getters) => {   // eslint-disable-line
    return (getters.testDataManipulert.filter(item => item.poststed === 'OSLO'))
      .filter(filterFunctions.postnr)
      .sort(sortFunctions[state.sortFunction]);
  },
  testDataManipulert: state => {   // eslint-disable-line
    const testDataMedTestProperty = state.hentedeAdresser;
    return testDataMedTestProperty.map(item => ({
      // Lag en egen getter for dataen for å manipulere dataen i staten, uten å endre state:
      northernLightCanBeSeen: !!(item.representasjonspunkt
        && item.representasjonspunkt.lat > 67),
      ...item,
    }));
  },
};

// Committe endringer på states, via mutering:
const actions = {
  getAdresserFraKartverket(context, adresse) { // context = store
    context.commit('setLoadingTestdata', true);
    context.commit('setHentedeAdresser', []);
    return new Promise((resolve) => {
      apiClient.getAdresse(adresse)
        .then((data) => {
          context.commit('setTestdata', data);
          if (data.adresser) {
            context.commit('setHentedeAdresser', data.adresser);
          }
          context.commit('setLoadingTestdata', false);
          context.commit('setErrorFetchingTestdata', false);
          resolve();
        })
        .catch(() => {
          context.commit('setTestdata', {});
          context.commit('setLoadingTestdata', false);
          context.commit('setErrorFetchingTestdata', true);
        });
    });
  },
  setSortingFunction(context, sort) {
    context.commit('sortFunction', sort);
  },
  addFavorittAdresse(context, adresse) {
    context.commit('addFavorittAdresse', adresse);
  },
  deleteFavorittAdresse(context, adresse) {
    context.commit('deleteFavorittAdresse', adresse);
  },
};

// Gjøre endringer på state:
const mutations = {
  setTestdata(state, testData) {
    state.testData = testData;
  },
  setHentedeAdresser(state, adresser) {
    state.hentedeAdresser = adresser;
  },
  setLoadingTestdata(state, isLoading) {
    state.loadingTestdata = isLoading;
  },
  setErrorFetchingTestdata(state, hasError) {
    state.errorFetchingTestdata = hasError;
  },
  sortFunction(state, sort) {
    state.sortFunction = sort;
  },
  addFavorittAdresse(state, adresse) {
    if (!state.favorittAdresser.includes(adresse)) {
      state.favorittAdresser.push(adresse);
    }
  },
  deleteFavorittAdresse(state, adresse) {
    if (state.favorittAdresser.includes(adresse)) {
      state.favorittAdresser.splice(state.favorittAdresser.indexOf(adresse), 1);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
