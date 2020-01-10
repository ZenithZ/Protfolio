<template>
  <div>
    <div class="container">
      <a href="https://www.facebook.com/zenithcn"> <i class="fab fa-facebook-square"></i> </a>
      <a href="https://www.linkedin.com/in/flynn-fu-91409015b/"> <i class="fab fa-linkedin"></i> </a>
      <a href="https://www.instagram.com/_zenithz/"> <i class="fab fa-instagram"></i> </a>
      <a href="https://github.com/zenithz"> <i class="fab fa-github-square"></i> </a>
      <a v-on:click="isVisible = !isVisible"><i class="fab fa-weixin"></i></a>
    </div>
    <img v-show="isVisible" src="@/assets/QR_code.jpg"> 
    <hr width="75%">
    <h3> Made by ZenithZ. Last updated: {{ currentDateWithFormat }}</h3>
  </div>
</template> 

<script>
export default {
  name: "Footer",
  data: () => ({
    currentDateWithFormat: String
  }),
  props: {
    msg: String,
    isVisible:{
      type: Boolean
    }
  },
  methods:{
    getDate: function () {
      let currentDate = new Date();
      let currentDateWithFormat = currentDate.toDateString().substring(4, 10) + ", " + currentDate.toDateString().substring(11, 15);
      return this.currentDateWithFormat = currentDateWithFormat
    }
  },
  mounted () {
    this.getDate()
  }
};
</script>

<style lang="scss" scoped>
  div {
    text-align: center;
    display: block;
    font-size: 0.9rem;
    background-color: #F8F8F8;

    h3 {
      text-align: center;
      display: block;
      font-size: 0.8rem;
      font-weight: bold;
      color: #777;
    }

    p {
      text-align: center;
      display: block;
      font-size: 1.5rem;
    }

    i {
      display: inline-block;
      font-size: 1.5rem;
      font-weight: bold;
      padding-top: 10px;
    }

    img {
      text-align: center;
      max-width: 100%;
      height: 200px;
      width: 200px;
    }

    a {
      padding-inline-start: 0.5%;
      padding-inline-end: 0.5%;
      text-decoration: none; 
      background-color: none;
      cursor: default;
    }
  }

  i:hover {
    cursor: pointer;
  }

  .fa-facebook-square{
    color: #3b5998;
  }

  .fa-linkedin{
    color: #0e76a8;
  }

  .fa-instagram{
    color: #C13584;
  }

  .fa-github-square{
    color: #211F1F;
  }

  .fa-weixin{
    color: #7BB32E;
  }

</style>