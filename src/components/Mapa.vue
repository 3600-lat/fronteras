<template>
  <svg class="mapa" width="500px" height="500px">
    <circle cx="50" cy="50" r="50"/>
  </svg>
</template>

<script>
export default {
  name: 'Mapa',
  data() {
    return {
      contenido: 'Un círculo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
circle {
  stroke: red;
}
</style>
