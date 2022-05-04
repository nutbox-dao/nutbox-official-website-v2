<template>
  <section id="global-partner-section">
    <div class="container">
      <div class="title text-bold">Global  Ambassador</div>
      <div class="grid-box">
        <div class="box-item">
          <img src="~@/assets/global-aku.png" alt="">
          <span>Aku</span>
        </div>
        <div class="box-item">
          <img src="~@/assets/global-allen.png" alt="">
          <span>Allen Hu</span>
        </div>
        <div class="box-item">
          <img src="~@/assets/global-jiang.png" alt="">
          <span>MJ Jiang</span>
        </div>
        <div class="box-item">
          <img src="~@/assets/global-alejandro.png" alt="">
          <span>Alejandro</span>
        </div>
        <div class="box-item">
          <img src="~@/assets/global-bae.png" alt="">
          <span>Tim Bae</span>
        </div>
        <div class="box-item">
          <img src="~@/assets/global-happy.png" alt="">
          <span>HAPPY</span>
        </div>
        <div class="box-item">
          <img src="~@/assets/global-sookjin.png" alt="">
          <span>Sook Jin Goh</span>
        </div>
        <div class="box-item">
          <img src="~@/assets/global-sampraise.png" alt="">
          <span>Sampraise</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GlobalPartnerSection'
}
</script>

<style scoped lang="scss">
#global-partner-section {
  background-image: url("~@/assets/global-bg.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center bottom;
}
.title {
  font-size: 3rem;
  line-height: 2.5rem;
}
.grid-box {
  display: grid;
  grid-template-columns: repeat(4, 7.5rem);
  column-gap: 4.5rem;
  row-gap: 1.5rem;
  justify-content: center;
  margin: 5rem 0;
  .box-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 100%;
  }
  span {
    color: #B0B0B0;
    font-size: .9rem;
    line-height: 2.3rem;
    margin-top: 1rem;
  }
}
@media (max-width: 767px) {
  #global-partner-section {
    background-position: center;
  }
  .grid-box {
    grid-template-columns: repeat(4, 5.5rem);
  }
}
@media (max-width: 400px) {
  .grid-box {
    grid-template-columns: repeat(3, 1fr);
    img {
      width: 70%;
      min-width: 40px;
    }
  }
}
</style>
