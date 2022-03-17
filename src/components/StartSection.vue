<template>
  <section id="start-section">
    <div class="img-box">
      <div class="img-box-content">
        <div class="desc">
          Bootstrap, govern, and contribute a DAO in decentralized way.
        </div>
        <div class="row-img">
          <a href="https://github.com/nutbox-dao" target="_blank">
            <img src="~@/assets/github.png" alt="">
          </a>
          <a href="https://twitter.com/NutboxDao" target="_blank">
            <img src="~@/assets/twitter.svg" alt="">
          </a>
          <a href="https://t.me/nutbox_defi" target="_blank">
            <img src="~@/assets/telegram.svg" alt="">
          </a>
          <a href="https://discord.gg/zPkMuGY" target="_blank">
            <img src="~@/assets/discord.svg" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row bottom-info">
        <div class="col-lg-3 col-md-6">
          <div class="font20 line-height46 mb-3">Communities</div>
          <div class="text-primary-c font46 line-height46">666</div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="font20 line-height46 mb-3">DApp Entities</div>
          <div class="text-primary-c font46 line-height46">1024</div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="font20 line-height46 mb-3">Users</div>
          <div class="text-primary-c font46 line-height46">123 k</div>
        </div>
<!--        <div class="col-md-3 col-sm-6">-->
        <div class="col-lg-3 col-md-6">
          <div class="font20 line-height46 mb-3">TVL</div>
          <div class="text-primary-c font46 line-height46">$300 M</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'StartSection'
}
</script>

<style scoped lang="scss">
#start-section {}
.img-box {
  height: 600px;
  min-height: 45rem;
  background-image: url("~@/assets/slogan.svg"),url("~@/assets/start-bg.png");
  background-repeat: no-repeat;
  background-size: 40%, contain;
  background-position: center 40%, center;
  position: relative;
  .img-box-content {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20%;
    max-width: 650px;
    text-align: left;
  }
  .desc {
    text-align: left;
    font-size: 1.8rem;
    line-height: 2.3rem;
  }
  .row-img {
    margin-top: 2rem;
  }
  .row-img img {
    width: 2rem;
    margin-right: 1rem;
  }
}
.container {
  margin-top: -5rem;
}
@media (min-width: 1441px) {
  .img-box {
    background-size: 650px, contain;
  }
}
@media (max-width: 1440px) {
  .img-box .img-box-content {
    max-width: 40%;
  }
}
@media (max-width: 1060px) {
  .img-box {
    background-size: 450px, cover;
    .img-box-content {
      max-width: 450px;
    }
  }
}
@media (max-width: 900px) {
  .img-box .img-box-content {
    max-width: fit-content;
    width: 450px;
  }
}
@media (max-width: 767px) {
  .img-box {
  }
}
@media (max-width: 560px) {
  .img-box {
    background-size: 80%, cover;
    .img-box-content {
      width: 80%;
    }
  }
}
</style>
