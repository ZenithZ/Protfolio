<template>
  <div>
    <b-jumbotron class="protfolio bg">
      <template v-slot:header>Protfolio</template>
      <hr class="my-4">
      <p>
        For my background including eduiacation, projects, experiences, courses.
      </p>
      <b-button variant="warning" href="/protfolio">Explore <i class="fas fa-arrow-circle-right"></i></b-button>
    </b-jumbotron>

    <b-jumbotron class="photo bg">
      <template v-slot:header>Photos</template>
      <hr class="my-4">
      <p>
        View my photos.
      </p>
      <b-button variant="warning" href="/photo">Explore <i class="fas fa-arrow-circle-right"></i></b-button>
    </b-jumbotron>

    <b-jumbotron class="CV bg">
      <template v-slot:header>CV</template>
      <hr class="my-4">
      <p>
        For my full academic CV.
      </p>
      <b-button variant="warning" href="/CV">Click to view <i class="fas fa-arrow-circle-right"></i></b-button>
    </b-jumbotron>

    <b-jumbotron class="Enquiry bg">
      <template v-slot:header>Enquiry</template>
      <hr class="my-4">
      <p>
        Submit an enquiry.
      </p>
      <b-button variant="warning" href="/Enquiry">Click to continue <i class="fas fa-arrow-circle-right"></i></b-button>
    </b-jumbotron>   
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

  div {
    padding-top: 80px;
    background-color: white;

    p {
      color: #777;
    }
  }

  .jumbotron {
    margin-bottom: 0px;
    color: whitesmoke;
 }

 .btn {
   color: white;
 }

  .bg {
    width: auto;
    height: 300px;
    background-size: cover;
    background-position: center;
    overflow: hidden; 
  }

  .protfolio {
    text-align: left;
    margin-left: 10%;
    background-color: #d3d3d3; 
  }

  .photo {
    text-align: right;
    margin-right: 10%;
    background-color: skyblue;
  }

  .CV {
    text-align: left;
    margin-left: 10%;
    background-color: #90ee90;
  }

  .Enquiry {
    text-align: right;
    margin-right: 10%;
    background-color: #b2b2ff;
  }
</style>