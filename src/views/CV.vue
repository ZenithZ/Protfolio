<template>
  <article>
    <section>
      <h1 class="centered">For my full academic CV, please click 
        <a href="Resume_LinFU _2020.pdf" target="_blank" type="application/pdf">here.</a>         
      </h1>
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
    height: 800px;
    padding: 0 10px;
    padding-top: 100px;
    background-color: #90ee90;
    color: whitesmoke;
  }

  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  a:link, a:visited {
    color: whitesmoke;
    font-weight: bold;
    text-decoration: underline;
  }
  
</style>>
