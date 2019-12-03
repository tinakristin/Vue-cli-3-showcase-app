<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <hr/>
    <div class="row footer">
      <i class="date pull-left">
        <font-awesome-icon icon="smile" aria-hidden="true"/> 23. april 2019
      </i>
      <i>Vue-cli-3 test applikasjon laget av Tina Kristin Jensen</i>
      <img src="./assets/Felix_the_cat.png"
           alt="Felix the cat" class="felix pull-right"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faSmile);

export default {};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .footer {
    width: 100%;
    margin: 20px 0;
    .felix {
      padding-left: 10%;
      text-align: right;
      width: 100px;
    }
    .date {
      padding-right: 5%;
      text-align: left;
      width: 100px;
    }
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
