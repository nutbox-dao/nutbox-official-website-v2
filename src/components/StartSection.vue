<template>
  <section id="start-section">
    <div class="container">
      <div class="banner-info-box">
        <div class="title">
          Link
          <span class="gradient-text gradient-text-left">COMMUNITY</span> <br>
          to Web3.0
        </div>
        <div class="desc text-medium font-bold">
          Bootstrap, govern, and contribute a DAO in a decentralized way.
        </div>
        <div class="row-img">
          <a href="https://twitter.com/NutboxDao" target="_blank">
            <img src="~@/assets/twitter.svg" alt="">
          </a>
          <a href="https://github.com/nutbox-dao" target="_blank">
            <img src="~@/assets/github.svg" alt="">
          </a>
          <a href="https://t.me/nutbox_defi" target="_blank">
            <img src="~@/assets/telegram.svg" alt="">
          </a>
          <a href="https://discord.gg/nRXYDRGAfq" target="_blank">
            <img src="~@/assets/discord.svg" alt="">
          </a>
        </div>
      </div>
<!--      <div class="bottom-info">-->
<!--        <div class="value-item">-->
<!--          <div class="label mb-3">Communities</div>-->
<!--          <div class="gradient-text gradient-text-bottom value">666</div>-->
<!--        </div>-->
<!--        <div class="value-item">-->
<!--          <div class="label mb-3">DApp Entities</div>-->
<!--          <div class="gradient-text gradient-text-bottom value">1024</div>-->
<!--        </div>-->
<!--        <div class="value-item">-->
<!--          <div class="label mb-3">Users</div>-->
<!--          <div class="gradient-text gradient-text-bottom value">123 k</div>-->
<!--        </div>-->
<!--        <div class="value-item">-->
<!--          <div class="label mb-3">TVL</div>-->
<!--          <div class="gradient-text gradient-text-bottom value">$300 M</div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </section>
</template>

<script>

export default {
  name: 'StartSection'
}
</script>

<style scoped lang="scss">
#start-section {
  background-image: url("~@/assets/start-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  height: 102vh;
  max-height: 1060px;
  min-height: 800px;
  padding-bottom: 0;
  padding-top: 120px;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
.banner-info-box {
  margin-left: 22px;
  margin-bottom: 4rem;
  .title {
    font-size: 4rem;
    font-weight: 900;
    line-height: 4.5rem;
    font-family: MontserratBlod, Avenir, Helvetica, Arial, sans-serif;
    text-align: left;
  }
  .desc {
    text-align: left;
    font-size: 1.2rem;
    line-height: 2rem;
    margin-top: 10px;
  }
  .row-img {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-start;
  }
  .row-img img {
    width: 2rem;
    margin-right: 1rem;
  }
}
.bottom-info {
  position: absolute;
  bottom: -100px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  .value-item {
    min-width: 13rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(to bottom, white, white);
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 1px 1.7rem;
    &:last-child {
      background-image: none;
    }
    .label {
      font-size: 1rem;
      line-height: 2.3rem;
    }
    .value {
      font-size: 3rem;
      line-height: 2.3rem;
      font-family: MontserratMedium, Avenir, Helvetica, Arial, sans-serif;
    }
  }
}
@media (max-width: 960px) {
  .bottom-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .value-item {
      margin-top: 1rem;
      &:nth-child(2) {
        background-image: none;
      }
    }
  }
}
@media (max-width: 767px) {
}
@media (max-width: 500px) {
  #start-section {
    height: fit-content;
    max-height: fit-content;
    min-height: fit-content;
  }
  .container {
    justify-content: flex-start;
  }
  .banner-info-box {
    margin-top: 50%;
  }
  .bottom-info {
    position: relative;
    .value-item {
      margin-top: 2rem;
    }
  }
}
</style>
