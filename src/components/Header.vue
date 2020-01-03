<template>
  <div class="container">
    <b-navbar toggleable="lg" type="dark fixed-top" variant="dark" id="Header">
      
      <router-link class="navbar-brand js-scroll-trigger" to="/">
        <img src="@/assets/orange-yellow.png" width="60" height="60" alt="">
      </router-link>
      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>  

          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-for="(linkObj, ind) in navList" :key="ind">
              <a class="nav-link js-scroll-trigger" :href="linkObj.path">
                {{linkObj.name}}
              </a>
            </li>
          </ul>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">CN</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search for..."></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">
              <i class="fas fa-search"></i>
            </b-button>
          </b-nav-form>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
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
        name: 'Home',
        path: '/'
      },
      {
        name: 'Protfolio',
        path: '/protfolio'
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

<style lang="scss" scoped>

  // #Header.navbar {
  //   background: rgba(0, 0, 0, 0.5)
  // }

  .container {

    text-align: right;;

    .btn {
      -webkit-transition-duration: 0.4s; /* Safari */
      transition-duration: 0.4s;
      border-radius: 50%;
      border-color: #e7e7e7;
      color: #e7e7e7;
      }

    .btn:hover {
      background-color: #555555; 
      border-color: #555555;
      color: white;
      }

    .li{
      border-bottom: 3px solid transparent;
    }

    .li:hover {
      border-bottom: 3px solid #e7e7e7;
    }

    .li:active {
      border-bottom: 3px solid #e7e7e7;
    }

    .b-form-input, textarea {
      background-color: transparent;
      border: none;;
    }

  }
  

</style> 