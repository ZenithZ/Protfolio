<template>
  <div class="list">
    <div class="gray bg">
      <b-jumbotron class="protfolio">
        <template v-slot:header>Protfolio</template>
        <hr class="my-4">
        <p>
          For my background including eduiacation, projects, experiences, courses.
        </p>
        <b-button variant="warning" href="/protfolio">Explore <i class="fas fa-arrow-circle-right"></i></b-button>
      </b-jumbotron>
    </div>

    <div class="blue bg">
      <b-jumbotron class="photo bg">
        <template v-slot:header>Photos</template>
        <hr class="my-4">
        <p>
          View my photos.
        </p>
        <b-button variant="warning" href="/photos">Explore <i class="fas fa-arrow-circle-right"></i></b-button>
      </b-jumbotron>
    </div>

    <div class="green bg">
      <b-jumbotron class="CV bg">
        <template v-slot:header>CV</template>
        <hr class="my-4">
        <p>
          For my full academic CV.
        </p>
        <b-button variant="warning" href="/CV">Click to view <i class="fas fa-arrow-circle-right"></i></b-button>
      </b-jumbotron>
    </div>

    <div class="purple bg">
      <b-jumbotron class="Enquiry bg">
        <template v-slot:header>Enquiry</template>
        <hr class="my-4">
        <p>
          Submit an enquiry.
        </p>
        <b-button variant="warning" href="/Enquiry">Click to continue <i class="fas fa-arrow-circle-right"></i></b-button>
      </b-jumbotron>   
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

  .list {
    padding-top: 80px;
    background-color: white;

    p {
      color: #777;
    }
  }

  .gray {
    background-color: #d3d3d3; 
  }

  .blue {
    background-color: skyblue; 
  }

  .green {
    background-color: #90ee90;
  }

  .purple {
    background-color: #b2b2ff;
  }

  .jumbotron {
    margin-bottom: 0px;
    color: whitesmoke;
 }

 .btn {
   color: white;
 }

 .btn:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
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