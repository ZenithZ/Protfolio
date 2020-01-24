<template>
  <div class="header-fix">
    <b-navbar class="navbar-expand-sm" toggleable="lg" type="dark" id="Header">
      <router-link class="navbar-brand js-scroll-trigger" to="/">
        <img src="@/assets/orange-yellow.png" width="60" height="60" alt />
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <ul class="navbar-nav ml-auto" >
            <li class="nav-item dropdown" v-for="(linkObj, ind) in navList" :key="ind">
              <span v-if="linkObj.name!=='Protfolio'">
                <a class="nav-link js-scroll-trigger" :href="linkObj.path">{{linkObj.name}}</a>
              </span>
              
              <span  v-if="linkObj.name=='Protfolio'">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"  :href="linkObj.path">
                  Protfolio 
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="protfolio#about">About me</a></li>
                  <li><a href="protfolio#Education">Education</a></li>
                  <li><a href="protfolio#project">Project</a></li>
                  <li><a href="protfolio#experience">Work Experience</a></li>
                </ul>
              </span>
            </li>
            <li>
              
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Langs <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li @click="changeLangEvent('en')"><a>EN</a></li>
                <li @click="changeLangEvent('zh')"><a>CN</a></li>
              </ul>
            </li>
          </ul>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <!-- <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <ul>
              <li @click="changeLangEvent('en')">EN</li>
              <li @click="changeLangEvent('zh')">CN</li>
            </ul> -->
            <!-- <b-dropdown-item href="#" @click="changeLangEvent('en')">EN</b-dropdown-item>
            <b-dropdown-item href="#" @click="changeLangEvent('zh')">CN</b-dropdown-item> -->
          <!-- </b-nav-item-dropdown> -->

          <!-- <b-nav-item-dropdown right>
            <template slot="button-content"><i class="fas fa-search"></i></template>
            <b-dropdown-item href="#">
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search for..."></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">
                  <i class="fas fa-search"></i>
                </b-button>
              </b-nav-form>
            </b-dropdown-item>
          </b-nav-item-dropdown>-->
        <!-- </b-navbar-nav> -->
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
        name: "Home",
        path: "/"
      },
      {
        name: "Protfolio",
        path: "/protfolio"
      },
      {
        name: "Photos",
        path: "/photos"
      },
      {
        name: "CV",
        path: "/cv"
      },
      {
        name: "Enquiry",
        path: "/enquiry"
      }
    ]
  }),

  methods: {
    changeLangEvent(item) {
      localStorage.setItem("locale", item);
      this.$i18n.locale = localStorage.getItem("locale");
      if(item=="zh") {
        this.$message({
          message: "已切换为中文",
          type: "success"
        });
      } else if (item=="en") {
        this.$message({
          message: "Changed to English",
          type: "success"
        });
      }

      localStorage.setItem("locale", item);
      this.language = item;
    }
  }
};
</script>

<style lang="scss" scoped>
#Header.navbar {
  // background: rgba(0, 0, 0, 0.5)
  font-weight: bold;
}

.header-fix {
  // position: fixed;
  width: 100%;
  max-width: 1200px;
  text-align: right;
  z-index: 9999;
  position: fixed;
  top: 0;
  padding-top: 20px;
  background: rgba(0,0,0,0.5);

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

  li {
    border-bottom: 3px solid transparent;
  }

  li:hover {
    border-bottom: 3px solid #5e5e5e;
  }

  li:active {
    border-bottom: 3px solid #5e5e5e;
  }

  .b-form-input,
  textarea {
    background-color: transparent;
    border: none;
  }

  .dropdown {
    top: 8px;
    margin: 0 10px;
    a {
      color: rgba(255, 255, 255, 0.5);
      margin-top: -8px;
    }
    &:hover {
      .dropdown-menu {
        padding: none;
        display: block!important;
      }
    }
  }

  .dropdown-menu {
    padding: none;
    background-color: rgba(0,0,0,0.5);
    li {
      padding: 5px 10px;
      color: #858585;
      a {
        color: #858585;
      }
      &:hover {
        background: #fbaa0f;
        border: none;
        color: #fff;
        a {
          color: #fff;
        }
      }
    }
  }
  .ml-auto {
    &:hover {
      .dropdown-menu-right {
        display: block;
      }
    }
  }
  .navbar-right {
    position: absolute;
    right: 0;
  }
}

@media (max-width: 576px) {
  .header-fix .navbar-right {
    position: initial!important;
    right: 0;
  }
}
</style> 