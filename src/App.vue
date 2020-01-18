<template>
  <div id="app">
    <Header></Header>
    <router-view style="margin-top: 106px;"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import '@/sass/base.scss'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 20px;
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #555;
    }
  }

  #nav {
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-0exact-active {
        color: #42b983;
      }
    }
  }

  input.empty {
      font-family: FontAwesome;
      font-style: normal;
      font-weight: normal;
      text-decoration: inherit;
  }

</style>
