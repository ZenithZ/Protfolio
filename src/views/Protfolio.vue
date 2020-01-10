<template>
  <div>
    <article>
      <section>
        <h1>About Me <i class="fas fa-user-circle"></i> </h1>
        <br>
        <span>
          My name is Lin Fu. Also known as Flynn and ZenithZ.
          <br><br>
          <h4><b>Eduacation</b></h4>
          <ul>
            <li>Graduate of <b>Bachelor of Computer Science and Technology</b> majoring <b>Computer Science</b> and <b>Information Systems</b> from @<b>The University of Sydney</b>.</li>
            <li>First year <b>Master of Information Technology</b> specialising <b>Human Computer Interaction</b> at @<b>The University of Melbourne</b>.</li>
          </ul>
          <h4><b>Work Experiences</b></h4>
          <ul>
            <li><b>Academic Tutor</b> for <b>Human Computer Interaction</b> at @<b>USYD</b></li>
            <li><b>PoCT Customer and Product Support Officer</b> at @<b>NSW Health Pathology</b></li>
            <li>tbd</li>
          </ul>
          <h4><b>Projects</b></h4>
          <ul>
            <li>tbd</li>
          </ul>
        </span>
      </section>
    </article>

    <article class="main-image">
      <section class="container"> 
        <h1>Welcome to ZenithZ.io</h1>
        <span>@ZenithZ</span>
        <button class="btn btn-xl btn-dark" @click="scrollTo('ZenithZ')"> Check it out</button>
      </section>
    </article>

    <!-- <article id="ZenithZ" class="white-section">
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
    </article> -->
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

  div{
    text-align: left;
    padding-top: 8%;
    padding-left: 5%; 

    h1{
    font-weight: bold;
    text-decoration: underline;
    color: #000000;

      i {
        font-size: 2.25rem;
      }
    }

    span {
        color: #C0C0C0;
      }

      h4 {
        color: #696969
      }

    li {
      padding-bottom: 10px;
    }
  }

</style>