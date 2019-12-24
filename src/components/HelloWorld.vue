<template>
  <div class="container-fluid">
    <article class="main-image">
      <section>
        <h1>ZenithZ.io</h1>
        <span>@ZenithZ</span>
        <button class="btn btn-xl btn-light"> xl_light_button</button>
      </section>
    </article>
  </div>
</template>

<style lang="scss">

  article {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 10px;
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
    background: url('../assets/tbd.jpg') center center;
  }

  .second-image {
    background: url('../assets/tbd.jpg') center center;
  }

</style>