<template>
  <div>
    <article>
      <section>
        <h1>About Me <i class="fas fa-user-circle"></i> </h1>
        <br>
        <img src="@/assets/under_construction.png" alt="">
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