<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr/>
    <adresse-test></adresse-test>

  </div>
</template>

<script>
// import AdresseTest from './AdresseTest';

import AdresseTest from './AdresseTest';

export default {
  name: 'HelloWorld',
  components: { AdresseTest },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
