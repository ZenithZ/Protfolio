<template>
  <div id="app">
    <Header />
    <Contents />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Contents from './components/Contents.vue'

export default {
  name: 'app',
  components: {
    Header,
    Contents
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
