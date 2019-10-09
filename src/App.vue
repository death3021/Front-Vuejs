<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import ListEstablishment from '@/components/Establishment/ListEstablishment.vue'

export default {
  name: 'app',
  components: { 
    'list-establishment' : ListEstablishment 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
