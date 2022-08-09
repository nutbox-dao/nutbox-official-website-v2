<template>
  <section id="global-partner-section">
    <div class="container">
      <div class="title text-bold">{{$t('globalSection.title')}}</div>
      <div class="grid-box">
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
          <img src="~@/assets/global-sookjin.png" alt="">
          <span>Sook Jin Goh</span>
        </div>
        <div class="box-item">
          <img src="~@/assets/global-Mohammed.png" alt="">
          <span>Mohammed</span>
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
  margin-top: 2rem;
}
.grid-box {
  display: grid;
  grid-template-columns: repeat(5, 7.5rem);
  column-gap: 4.5rem;
  row-gap: 2rem;
  justify-content: center;
  margin: 7rem 0 8rem;
  .box-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 5rem;
    border-radius: 5rem;
    box-sizing: border-box;
    padding: 2px;
    background-color: rgba(white, .2);
    &:hover {
      background-image: linear-gradient(to bottom, var(--gradient-primary-color1), var(--gradient-primary-color2));
      background-repeat: no-repeat;
    }
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
