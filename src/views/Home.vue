<template>
  <div class="container-fluid px-0" id="Home">
    <article>
      <section class="main-image">
        <h2>Welcome to</h2>
        <h1>ZenithZ's</h1>
        <h3>Homepage</h3>
        <br>
        <button class="btn btn-xl btn-light">Click to continue</button>
      </section>
    </article>
  </div>
</template>

<style lang="scss" scoped>

  article {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    padding-top: 100px;
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
      display: block;
      font-size: 5rem;
      font-weight: bold;
      text-align: center;
      color:  #5E5E5E;
    }

    h2 {
      padding-top: 60%;
      display: block;
      font-weight: bold;
      text-align: center;
      color: #808080;
    }

    h3 {
      display: block;
      font-weight: bold;
      text-align: center;
      color: #696969;
    }
  }

  .main-image {
    background: url('../assets/orange-yellow.png') center center;
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

  #Home {
    // background: rgba(0,0,0,0.5);
    background: whitesmoke;
  }

</style>