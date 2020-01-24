<template>
  <article>
    <section>
      <br><hr><br>
      <h1>For my full academic CV, please click
        <a href="../../public/Resume.pdf" target="_blank" type="application/pdf">here.</a>
      </h1>
      <br><hr><br><br><br><br>
    </section>
  </article>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

  article {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 500px;
    padding: 0 10px;
    padding-top: 100px;
    background-color: rgba(0,0,0,0.7);
    color: #808080;
  }

  a:link, a:visited {
    // color: whitesmoke;
    font-weight: bold;
    text-decoration: underline;
  }

  hr {
    border: 1px solid #181818;
    border-radius: 5px;
  }

</style>
