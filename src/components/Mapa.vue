<template>
  <svg class="mapa" :width='width' :height='width'>
    <path class="polygons" />
  </svg>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'Mapa',
  data() {
    return {
      height: 500,
      width: 500,
      geojson:
        'https://raw.githubusercontent.com/severo/data/master/20180331/departamentos_simplified_002.geojson'
    }
  },
  mounted() {
    this.initialize()
  },
  methods: {
    initialize() {
      const height = this.height
      const width = this.width
      d3.json(this.geojson).then(function(data) {
        const projection = d3.geoMercator().fitSize([height, width], data)
        const path = d3.geoPath().projection(projection)
        d3.select('svg.mapa path.polygons').attr('d', path(data))
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mapa {
  margin: 2em;
}

.polygons {
  stroke: black;
  stroke-width: 0.5px;
  fill: none;
}
</style>
