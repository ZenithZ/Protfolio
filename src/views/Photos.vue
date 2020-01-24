<template>
  <article>
    <section>
      <el-carousel :interval="4000" height="calc(100vh - 163px)">
        <el-carousel-item v-for="item in photos" :key="item">
          <!-- <h3>{{ item }}</h3> -->
          <img :src="item">
        </el-carousel-item>
      </el-carousel>
    </section>
  </article>
</template>

<script>
export default {
  data: () => ({
    photos: [
        require('@/assets/photos/1.jpg'),
        require('@/assets/photos/2.jpg'),
        require('@/assets/photos/3.jpg'),
        require('@/assets/photos/4.jpg'),
        require('@/assets/photos/5.jpg'),
        require('@/assets/photos/6.jpg'),
        require('@/assets/photos/7.jpg'),
        require('@/assets/photos/8.jpg'),
        require('@/assets/photos/9.jpg'),
        require('@/assets/photos/10.jpg'),
        require('@/assets/photos/11.jpg'),
        require('@/assets/photos/12.jpg'),
        require('@/assets/photos/13.jpg'),
        require('@/assets/photos/14.jpg'),
        require('@/assets/photos/15.jpg'),
        require('@/assets/photos/16.jpg'),
        require('@/assets/photos/17.jpg'),
        // require('@/assets/photos/18.jpg'),
        // require('@/assets/photos/19.jpg'),
        // require('@/assets/photos/20.jpg'),
        require('@/assets/photos/21.jpg'),
        require('@/assets/photos/22.jpg'),
        require('@/assets/photos/23.jpg'),
        require('@/assets/photos/24.jpg'),
        require('@/assets/photos/25.jpg')
    ]
  })
}
</script>

<style lang="scss" scoped>

  .el-carousel__item:nth-child(2n) {
    background-color: #080808;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #080808;
  }

  img {
    width: auto;
    height: 100%;
    object-fit: cover;
  }

  .section {
    margin-top: 30px;
    border-top-left-radius: 30px;
    background: #181818;
    min-height: calc(100vh - 143px);
    margin-bottom: 30px;
    border-bottom-left-radius: 30px;
  }
  
</style>