import eksempelstart from '../../src/vuex/modules/eksempelstart';
import { storeStructure } from '../../src/vuex/store';

// Default til faktisk state vi bruker til vanlig. Overskriver det vi vil under her
const defaultState = storeStructure;

const state = {
  isAuthenticated: true,
  userInfo: {},
};

eksempelstart.state = {
  ...eksempelstart.state,
  ...{
    loadingTestdata: false,
    errorFetchingTestData: false,
    testData: {
      metadata: {
        viserFra: 0,
        treffPerSide: 0,
        totaltAntallTreff: 0,
        viserTil: 0,
        side: 0,
      },
      adresser: [
        {
          stedfestingverifisert: true,
          adressetilleggsnavn: 'string',
          festenummer: 0,
          adressenavn: 'Andebyveien',
          objtype: 'Vegadresse',
          bruksenhetsnummer: [
            'H0201',
          ],
          postnummer: '0113',
          adressetekstutenadressetilleggsnavn: '',
          oppdateringsdato: 'string',
          bokstav: 'A',
          adressekode: 0,
          kommunenummer: '234',
          adressetekst: 'string',
          poststed: 'Andeby',
          nummer: 113,
          undernummer: 0,
          kommunenavn: 'Oslo',
          representasjonspunkt: {
            lat: 0,
            epsg: 'string',
            lon: 0,
          },
          bruksnummer: 123,
          gardsnummer: 12,
        },
      ],
    },
    hentedeAdresser: [
      {
        stedfestingverifisert: true,
        adressetilleggsnavn: 'string',
        festenummer: 0,
        adressenavn: 'Andebyveien',
        objtype: 'Vegadresse',
        bruksenhetsnummer: [
          'H0201',
        ],
        postnummer: '0113',
        adressetekstutenadressetilleggsnavn: '',
        oppdateringsdato: 'string',
        bokstav: 'A',
        adressekode: 0,
        kommunenummer: '234',
        adressetekst: 'string',
        poststed: 'Andeby',
        nummer: 113,
        undernummer: 0,
        kommunenavn: 'Oslo',
        representasjonspunkt: {
          lat: 0,
          epsg: 'string',
          lon: 0,
        },
        bruksnummer: 123,
        gardsnummer: 12,
      },
    ],
    filterPostnr: [],
    sortFunction: 'date_descending',
  },
};

defaultState.state = state;
defaultState.modules.eksempelstart = eksempelstart;

export default defaultState;
