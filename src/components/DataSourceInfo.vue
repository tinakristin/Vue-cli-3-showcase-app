<template>
  <div class="row pull-left">
    <font-awesome-icon icon="search" aria-hidden="true"/>
    <span v-if="hasDateInTranslation && fetchDate">
      {{ $t(translationPath + '.text', { dato: fetchDate }) }}
    </span>
    <span v-else>{{ $t(translationPath + '.text') }}</span>
    <a v-if=hasLinkInTranslation :href="$t(translationPath + '.link.url')"
       :target="hasTargetTranslation ? $t(translationPath + '.link.target') : '_blank'"
       :title="hasTitleTranslation ? $t(translationPath + '.link.title')
       : ('Følg lenken til ' + $t(translationPath + '.link.text'))">
      {{ $t(translationPath + '.link.text') }}
    </a>
  </div>
</template>

<script>
import _ from 'lodash';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

/**
   *
   * Lister ut info om datakilder.
   *
   * @props {translationPath, fetchDate, target, title}
   *
   * Properties:
   * 'translationPath': 'dataSourceInfo.bostedsInfo'
   * 'fetchDate': optional // Må oppgis dersom man forventer {dato} i translation-teksten
   *
   * Eksempel på forventet format på datakilder i translation-filen er:
   *
   * {
   *   text: 'Din bostedsadresse er hentet  den {dato} fra' // {dato} er optional
   *   link: { // Optional
   *       url: 'https://www.example.com',
   *       text: 'Example'
   *       target: optional // Hvis tom, default: '_blank'
   *       title: optional // Hvis tom, default: 'Følg lenken
 *         til'+$t(translationPath + '.link.text')
   *   }
   * }
   */
export default {
  uniqueId: _.uniqueId('dataopprinnelse_'),
  name: 'DataSourceInfo',
  props: {
    translationPath: {
      type: String,
      required: true,
    },
    fetchDate: {
      type: String,
      required: false,
    },
  },
  computed: {
    hasLinkInTranslation() {
      return _.includes(Object.keys(this.$t(`${this.translationPath}`)), 'link');
    },
    hasTargetTranslation() {
      return _.includes(Object.keys(this.$t(`${this.translationPath}.link`)), 'target');
    },
    hasTitleTranslation() {
      return _.includes(Object.keys(this.$t(`${this.translationPath}.link`)), 'title');
    },
    hasDateInTranslation() {
      return _.includes(this.$t(`${this.translationPath}.text`), '{dato}');
    },
  },
};
</script>

<style scoped lang="scss">
  .row {
    padding-left: 15px;
    font-size: 12px;
    color: #8699a4;
    a {
      color: #8699a4;
      text-decoration: underline;
    }
  }
</style>
