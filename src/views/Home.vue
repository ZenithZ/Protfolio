<template>
  <div class="container-fluid px-0" id="Home">
    <div>
      <article>
        <section class="main-image">
          <div class="centered">
            <h2>Welcome to</h2>
            <h1>ZenithZ's</h1>
            <h3>Homepage</h3>
            <br>
            <router-link to="list">
              <button class="btn btn-xl">Click to continue</button>
            </router-link>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  // data: () => ({
  //   recentProjects: [
  //     {
  //       img: 'tbd.jpg',
  //       title: 'Sepsis-ux',
  //       description: 'NSW Pathology'
  //     },
  //     {
  //       img: 'tbd.jpg',
  //       title: 'Sepsis-ux',
  //       description: 'NSW Pathology'
  //     },
  //     {
  //       img: 'tbd.jpg',
  //       title: 'Sepsis-ux',
  //       description: 'NSW Pathology'
  //     },
  //     {
  //       img: 'tbd.jpg',
  //       title: 'Sepsis-ux',
  //       description: 'NSW Pathology'
  //     },
  //     {
  //       img: 'tbd.jpg',
  //       title: 'Sepsis-ux',
  //       description: 'NSW Pathology'
  //     }
  //   ]
  // }),

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

  article {
    display: block;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    padding-top: 100px;
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

  .main-image, .second-image {
    min-height: 100vh;
    background-size: cover;
    padding: 0 10px;
    text-align: center;

    h1 {
      display: block;
      font-size: 6rem;
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
  }

  .main-image {
    background: url('../assets/orange-yellow.png') no-repeat center center;
    background-size: cover;
  }


  .white-section {
    padding: 120 10px;
    background-color: white;
    text-align: center;

    h3 {
      font-size: 2rem;
      font-weight: bold;
    }

    span {
      display: block;
      font-size: 1.25rem;
      padding-bottom: 30px;
    }

    .row {
      padding-top: 50px;
    }

    .protfolio-item {
      display: block;
      position: relative;
      overflow: hidden;

      .caption {
        display: flex;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 1;
        background-color: rgba($color: #000000, $alpha: .2);
        transition: transform .2s linear; 
      }             

      .caption-content {
        text-align: left;
        color: #fff;
        margin: auto 2rem 2rem;
      }

      img {
        transition: transform .2s linear; 
      }

      &:hover {
        img {
          transform: scale(.9);
        }

        .caption {
        transform: scale(.9);
        background-color: rgba($color: #000000, $alpha: .2);
      }   
      }
    }
  }

  .blue-section {
    padding: 120 10px;
    background-color: #1d809f;
    color: #fff;
    text-align: center;

    h2 {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 50px;
    }

    h4 {
      font-size: 1.6rem;
      padding-top: 20px;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 120px;
      background-color: white;
      color: #1d809f;
      border-radius: 50%;

      i {
        font-size: 2rem;
      } 
    }
  }

  #Home {
    // background: rgba(0,0,0,0.5);
    background: whitesmoke;
  }

</style>