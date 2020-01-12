<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
    <!-- <el-container  ref="viewBox" id="box">
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container> -->
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
    // Home,
    Footer
  },
  created() {
    this.$nextTick(function(){
      let box = document.getElementById('box')
      window.console.log('box', box)
      // 监听这个dom的scroll事件
      let _this = this
      box.addEventListener('scroll', () => {
        window.console.log(this.$refs.viewBox.scrollTop)
        this.$refs.viewBox.addEventListener('scroll', _this.handleScroll)
      }, false)
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.windowScroll)
  },
  method: {
    windowScroll () {
     // 滚动条距离页面顶部的距离
     // 以下写法原生兼容
      window.console.log('window.pageYOffset', window.pageYOffset)
      window.console.log('document.documentElement.scrollTop', document.documentElement.scrollTop)
      window.console.log('document.body.scrollTop', document.body.scrollTop)
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      window.console.log(scrollTop) 
    }
  },
  mounted () {
    window.console.log('111')
    window.addEventListener('scroll', this.windowScroll, true)
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
