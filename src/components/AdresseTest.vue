<template>
<div>
  <!-- SØKEBOKS for adresser i kartverket-api -->
  <div class="searchbox">
    <form class="search">
      <input v-model.trim="selectedStreetAddress"
             v-on:change="selectAddress" @keyup.enter="selectAddress"
             placeholder="Søk etter adresse i kartverket"
             class="text-filter" type="text" id="searchTerm">

      <button type="button" @click="selectAddress">
        <font-awesome-icon icon="search" aria-hidden="true"/>
        <span class="sr-only">{{ $t('address.search') }}</span>
      </button>
    </form>
  </div>

  <!-- RESULTAT kartverket-api søk -->
  <h3>
    <font-awesome-icon icon="grin-beam" aria-hidden="true"/>
    {{ $t('address.result')}}
  </h3>
  <p v-if="loadingTestdata">
    <font-awesome-icon icon="spinner" spin aria-hidden="true"/>
    {{ $t('app.loading')}}
  </p>
  <div v-else-if="testData && testData.adresser && !loadingTestdata">
    <!-- {{testData}} -->
    <ul>
      <li v-for="(address, index) in testData.adresser"
          v-bind:key="index">
        {{ address | addressAsString }}

       <!-- LAGRE FAVORITT -->
        <button @click="addFavorittAdresse(getAddressAsString(address))" class="addFavorite">
          <font-awesome-icon icon="plus-circle" aria-hidden="true"/> {{ $t('address.save')}}
        </button>
      </li>
    </ul>

    <!--  Fordi... life... #GDPR: -->
    <data-source-info :fetchDate="getDate"
                     :translationPath="'dataSourceInfo.kartverket'">
    </data-source-info>
  </div>
  <div v-else>
    Fail!
  </div>
  <br/>

  <!-- LAGREDE favoritter i vuex   -->
  <hr/>
  <h3>{{ $t('address.savedFavorites')}}</h3>
  <ul v-if="favorittAdresser.length > 0">
    <li v-for="(address, index) in favorittAdresser"
        v-bind:key="index">
      {{ address }}
      <button @click="deleteFavorittAdresse(address)" class="deleteFavorite">
        <font-awesome-icon icon="minus-circle" aria-hidden="true"/> {{ $t('address.delete')}}
      </button>
    </li>
  </ul>
  <i v-else>{{ $t('address.noFavorites')}}</i>
  <br/><br/>
  <hr/>


  <!-- MANIPULERT data, felt lagt til hvert dataobject  -->
  <h3>{{ $t('address.manipulated')}}</h3>
  <b>{{ $t('address.newFieldInfo')}}</b><br/>
  <!-- {{testDataManipulert}}--> <br/>

  {{ $t('address.northernLight')}}
  <ul v-if="testDataManipulert">
    <li v-for="(address, index) in testDataManipulert"
        v-bind:key="index">
      <b v-if="address.northernLightCanBeSeen"
         v-bind:class="{flag: address.northernLightCanBeSeen}">
        {{ address | addressAsString }}
      </b>
    </li>
  </ul>
  <br/>
  <hr/>


  <!-- FILTRERT data på poststed Oslo -->
  <div v-if="eksempelGetterMedFilterOgSortering">
    <h3> {{ $t('address.filtrated')}}</h3><br>
    <b>
      {{ $t('address.osloAddress', { antall: eksempelGetterMedFilterOgSortering.length }) }}
    </b>
    <ul>
      <li v-for="(address, index) in eksempelGetterMedFilterOgSortering"
          v-bind:key="index">
        {{ address | addressAsString }}
      </li>
    </ul>
  </div>
  <br/>
  <br/>

</div>
</template>

<script>
import moment from 'moment';
import { mapState, mapActions, mapGetters } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGrinBeam, faSpinner, faSearch, faPlusCircle, faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';
import DataSourceInfo from './DataSourceInfo';

library.add(faGrinBeam, faSpinner, faSearch, faPlusCircle, faMinusCircle);

moment.locale('nb-no');

export default {
  name: 'AdresseTest',
  components: { DataSourceInfo },
  filters: {
    addressAsString(address) {
      return `${address.adressenavn || address.adressetekst || ''} ${address.nummer || ''}
      ${address.bokstav ? address.bokstav : ''}, ${address.postnummer} ${address.poststed}`;
    },
  },
  data() {
    return {
      selectedStreetAddress: '', // 'Jernbanetorget',
    };
  },
  computed: {
    ...mapState(['isAuthenticated']),
    ...mapState('eksempelstart', ['testData', 'loadingTestdata', 'errorFetchingTestData',
      'favorittAdresser']),
    ...mapGetters('eksempelstart', ['testDataManipulert', 'eksempelGetterMedFilterOgSortering']),
    getDate() {
      return moment().format('LLL').toString();
    },
  },
  watch: {
    /*
    selectedStreetAddress() {
      if (this.selectedStreetAddress.length > 5) {
        this.selectAddress();
      }
    },
    */
  },
  mounted() {
    this.getAdresserFraKartverket(this.selectedStreetAddress);
  },
  methods: {
    ...mapActions('eksempelstart', ['getAdresserFraKartverket',
      'addFavorittAdresse', 'deleteFavorittAdresse']),
    selectAddress() {
      this.getAdresserFraKartverket(this.selectedStreetAddress);
    },
    getAddressAsString(address) {
      return `${address.adressenavn || address.adressetekst} ${address.nummer}
      ${address.bokstav ? address.bokstav : ''}, ${address.postnummer} ${address.poststed}`;
    },
  },
};
</script>

<style scoped lang="scss">
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0 10px;
  }
  .flag {
    color: forestgreen;
  }

  .searchbox {
    width: 100%;
    padding: 0 50px;
    margin-top: 20px;
  }
  form {
    box-sizing: border-box;
  }

  form.search input[type=text] {
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    width: 50%;
  }

  form.search button {
    width: 10%;
    padding: 10px;
    background: #2196F3;
    color: white;
    font-size: 17px;
    border: 1px solid grey;
    border-left: none; /* Prevent double borders */
    cursor: pointer;
  }

  form.search button:hover {
    background: #0b7dda;
  }

  .addFavorite {
    background-color: #99d388;
    padding: 5px;
  }
  .deleteFavorite {
    background-color: #ff8b8e;
    padding: 5px;
  }
</style>
