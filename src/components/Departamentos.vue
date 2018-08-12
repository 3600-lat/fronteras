<template>
  <div class="departamentos">
    <h1>{{ msg }}</h1>
    <mapa />
  </div>
</template>

<script>
import Mapa from './Mapa'

export default {
  name: 'Departamentos',
  data() {
    return {
      msg: 'Departamentos'
    }
  },
  components: {
    Mapa
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
