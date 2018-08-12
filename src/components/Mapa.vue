<template>
  <svg class="mapa" width="500px" height="500px">
    <circle cx="50" cy="50" r="50"/>
  </svg>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'Mapa',
  data() {
    return {
      contenido: 'Un círculo',
      geojson2:
        'https://raw.githubusercontent.com/severo/data/master/20180331/departamentos_simplified_002.geojson'
    }
  },
  mounted() {
    this.initialize()
  },
  methods: {
    initialize() {
      const projection = d3.geoMercator()
      const path = d3.geoPath().projection(projection)
      const svg = d3.select('svg.mapa')
      d3.json(this.geojson2).then(function(data) {
        svg.append('path').attr('d', path(data))
      })
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
