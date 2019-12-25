<template>
  <b-nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="Header">
    <div class="container">
      <router-link class="navbar-brand js-scroll-trigger" to="/">
        <img src="@/assets/orange-yellow-trim.png" class="logo"> 
      </router-link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarRespoinsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item" v-for="(linkObj, ind) in navList" :key="ind">
            <a class="nav-link js-scroll-trigger" :href="linkObj.path">
              {{linkObj.name}}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </b-nav>
</template>


<script>
export default {
  name: "Header",
  props: {
    msg: String
  },
  
  data: () => ({
    navList: [
      {
        name: 'Education',
        path: '/eduacation'
      },
      {
        name: 'Photos',
        path: '/photos'
      },
      {
        name: 'Gaming',
        path: '/gaming'
      },
      {
        name: 'Support',
        path: '/support'
      }
    ]
  })
};
</script>

<style lang="scss">

#Header.navbar {
  background: rgba(0, 0, 0, 0.5)
}

.logo {
  width: 20%;
  height: auto;
}

.nav-item:hover {
  cursor: pointer;
}

</style> 