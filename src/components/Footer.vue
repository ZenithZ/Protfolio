<template>
  <div id="Footer">
    <p>
      <a href="https://www.facebook.com/zenithcn"> <i class="fab fa-facebook-square"></i> </a>
      <a href="https://www.linkedin.com/in/flynn-fu-91409015b/"> <i class="fab fa-linkedin"></i> </a>
      <a href="https://www.instagram.com/_zenithz/"> <i class="fab fa-instagram"></i> </a>
      <a href="https://github.com/zenithz"> <i class="fab fa-github-square"></i> </a>
      <a v-on:click="isVisible = !isVisible"><i class="fab fa-weixin"></i></a>
    </p>
    <img v-show="isVisible" src="@/assets/QR_code.jpg"> 
    <hr width="50%">
    <h3> Made by @ZenithZ</h3>
  </div>
</template> 

<script>

export default {
  name: "Footer",
  props: {
    msg: String,
    isVisible:{
      type: Boolean
    }
  }

  // methods: {
  //   changBoolean: function () {
  //     isVisible = !isVisible;
  //   }
  // }
};
</script>

<style lang="scss">
  div {
    text-align: center;
    display: block;
    font-size: 0.9rem;
  }

  h3 {
    text-align: center;
    display: block;
    font-size: 0.9rem;
    font-weight: bold;
  }

  p {
    text-align: center;
    display: block;
    font-size: 1.8rem;
  }

  i {
    display: block;
    font-size: 1.6rem;
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