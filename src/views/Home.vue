<template>
  <div class="container-fluid px-0" id="Home">
    <div>
      <article>
        <!-- <section class="main-image"> -->
        <section class="main-image">
          <el-carousel :interval="4000" height="calc(100vh - 163px)">
            <el-carousel-item v-for="banner in banners" :key="banner">
              <div class="centered">
                <img :src="banner">
                <div class="label">
                  <h2>Welcome to</h2>
                  <h1>ZenithZ's</h1>
                  <h3>Homepage</h3>
                  <br>
                  <router-link to="list">
                  <button class="btn btn-xl">Click to continue</button>
                </router-link>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </section>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    banners: [
        require('@/assets/orange-yellow.png'),
        require('@/assets/black-purple.png'),
        require('@/assets/green-yellow.png')
    ]
  }),

  methods: {
    scrollTo(element) {
      const el = document.querySelector('#'+element);
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
};
</script>

<style lang="scss" scoped>

  .label {
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -70%);
    transform: translate(-50%, -70%);
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  article {
    display: block;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #080808;
  }

  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .btn-xl {
    padding: 10px 30px;
    font-size: 1.25rem;
    border-radius: 10px;
    color: white;
    font: bold;
    background-color: #FFA500;
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.2s;
  }

  .btn:hover {
    background-color: #FFB020;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }

  .main-image {
    background-size: cover;
    text-align: center;

    h1 {
      display: block;
      font-size: 5rem;
      font-weight: bold;
      text-align: center;
      color:  #5E5E5E;
    }

    h2 {
      padding-top: 60%;
      display: block;
      font-size: 4rem;
      font-weight: bold;
      text-align: center;
      color: #808080;
      transform: translate(-35%, -5%);
    }

    h3 {
      display: block;
      font-size: 4.5rem;
      font-weight: bold;
      text-align: center;
      color: #696969;
      transform: translate(35%, 5%);
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  #Home {
    background: whitesmoke;
  }

</style>