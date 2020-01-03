<template>
  <div class="container-fluid px-0" id="Home">
    <article class="main-image">
      <section class="container"> 
        <h1>Welcome to ZenithZ.io</h1>
        <span>@ZenithZ</span>
        <button class="btn btn-xl btn-dark" @click="scrollTo('ZenithZ')"> Check it out</button>
      </section>
    </article>

    <article id="ZenithZ" class="white-section">
      <section class="container">
        <h3>You might know me as ZenithZ</h3>
        <span>blah blah blah</span>
        <button class="btn btn-xl btn-dark" @click="scrollTo('Flynn')"> Next section</button>
      </section>
    </article>

    <article id="Flynn" class="blue-section">
      <section class="container">
        <h2>You might also know me as Flynn</h2>
        <h4>blah blah blah</h4>
        <button class="btn btn-xl btn-dark" @click="scrollTo('projects')"> Next section</button>
      </section>
    </article>

    <article id="projects" class="white-section">
      <section class="container">
        <h3>Recent Projects</h3>
        <div class="row no-gutters">
          <div class="col-lg-6" v-for="(project,index) in recentProjects" :key="index">
            <a href="" class="protfolio-item">
              <span class="caption">
                <span class="caption-content">
                  <h2> {{ project.title }} </h2>
                  <p class="mb-0"> {{ project.description }} </p>
                </span>
              </span>
              <img class="img-fluid" :src="require('../assets/'+project.img)"> 
            </a>  
          </div>
        </div>
      </section>
    </article>

    <article id="contact" class="white-section">
      <section class="container">
        <h3>Enquires</h3>
        <span>form tobe constructed</span>
        <button class="btn btn-xl btn-dark" @click="scrollTo('Home')"> Back to top</button>
      </section>
    </article>

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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    background: #FFD700;
  }

  .btn-xl {
    padding: 20px 35px;
    font-family: serif;
    font-size: 1.25rem;
  }

  .main-image, .second-image {
    min-height: 100vh;
    background-size: cover;
    padding: 0 10px;
    text-align: center;

    h1 {
      font-size: 5rem;
      font-weight: bold;
    }

    h2 {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 30px;
    }

    span {
      display: block;
      font-size: 1.6rem;
      font-weight: bold;
      padding-bottom: 30px;
    }
  }

  .main-image {
    background: url('../assets/solid-gold-background.jpg') center center;
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

</style>