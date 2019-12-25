<template>
  <div id="Footer">
    <b-nav tabs>
        <b-nav-item>Facebook</b-nav-item>
        <b-nav-item>Linkdln</b-nav-item>
        <b-nav-item>Instagram</b-nav-item>
        <b-nav-item>Github</b-nav-item>
        <b-nav-item>opgg</b-nav-item>
    </b-nav>
    <h3><br> Made by @ZenithZ</h3>
  </div>
</template> 

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
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
</style>