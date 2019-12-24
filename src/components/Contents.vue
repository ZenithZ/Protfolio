<template>
  <div class="container-fluid px-0">
    <article class="main-image">
      <section>
        <h1>ZenithZ.io</h1>
        <span>@ZenithZ</span>
        <button class="btn btn-xl btn-light"> xl_light_button</button>
      </section>
    </article>

    <article id="tbd" class="white-section">
      <section>
        <h3>Some random stuff</h3>
        <span>blah blah blah</span>
        <button class="btn btn-xl btn-dark"> xl_dark_button</button>
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

  .white-section {
    padding: 120 10px;
    background-color: white;
    text-align: center;

    h3 {
      font-size: 2rem;
      font-weight: bold;
    }

    span {
      display: block;
      font-size: 1.25rem;
      padding-bottom: 30px;
    }
  }

</style>