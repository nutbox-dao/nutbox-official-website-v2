<template>
  <section id="grant-section">
    <div class="container">
      <div class="h-line"></div>
      <div class="title text-bold">Grant</div>
      <div class="grid-box">
        <div class="box-item">
          <img src="~@/assets/grant-img0.png" alt="">
          <span>Wanxiang Blockchain Hackathon</span>
        </div>
        <div class="box-item">
          <img src="~@/assets/grant-img1.png" alt="">
          <span>Moonbeam</span>
        </div>
        <div class="box-item">
          <img src="~@/assets/grant-img2.png" alt="">
          <span>Astar</span>
        </div>
        <div class="box-item">
          <img src="~@/assets/grant-img3.png" alt="">
          <span>Near Aurora</span>
        </div>
      </div>
      <div class="h-line"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GrantSection'
}
</script>

<style scoped lang="scss">
#grant-section {
  .h-line {
    width: 100%;
    height: 1px;
    background-color: rgba(white, .3);
  }
}
.title {
  font-size: 3rem;
  line-height: 2.5rem;
  margin-top: 6rem;
  margin-bottom: 5.7rem;
}
.grid-box {
  display: grid;
  grid-template-columns: repeat(4, 12rem);
  justify-content: center;
  margin-bottom: 5rem;
  .box-item {
    margin: 0 .5rem;
  }
  img {
    width: 90%;
  }
  span {
    color: #B0B0B0;
    font-size: .9rem;
    line-height: 2.3rem;
  }
}
@media (max-width: 767px) {
  .grid-box {
    grid-template-columns: repeat(2, 1fr);
    .box-item {
      margin: 1rem;
    }
  }
}
</style>
