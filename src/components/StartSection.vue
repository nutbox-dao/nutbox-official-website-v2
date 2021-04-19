<template>
  <section id="start-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-left left-box">
          <div class="font32 font-bold mb-4">Nutbox</div>
          <div class="desc font-bold mb-4" style="line-height: 3.6rem">{{$t('startSection.p1')}}</div>
          <a class="primary-btn"
             href="https://nutbox.io" target="_blank">{{$t('startSection.getStarted')}}</a>
        </div>
      </div>
    </div>
    <div class="m-img">
      <img v-if="$i18n.locale==='zh'" class="mission-img" src="~@/assets/start-img-zh.png" alt="">
      <img v-else class="mission-img" src="~@/assets/start-img1.png" alt="">
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
  background-size: 100% 100%;
  background-position: center top;
  padding-top: 6rem;
  min-height: 45rem;
  position: relative;
  .left-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 25rem;
    max-height: 40rem;
    .desc {
      font-size: 3.2rem;
    }
  }
  .m-img {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 42rem;
    margin: auto;
  }
  .mission-img {
    width: 100%;
  }
  a {
    width: 10rem;
    text-align: center;
    background-color: rgba(36, 38, 41, 1);
    color: white;
    box-shadow: none;
    text-decoration: none;
    font-weight: 700;
  }
}
@media (min-width: 1660px) {
  .m-img {
    left: 50%!important;
    right: auto!important;
  }
}
@media (max-width: 960px) {
  .m-img {
    text-align: right;
  }
  .mission-img {
    width: 70% !important;
  }
}
@media (max-width: 767px) {
  .m-img {
    top: 30%!important;
  }
  .mission-img {
    width: 90% !important;
  }
}
@media (max-width: 577px) {
  .left-box .desc {
    font-size: 2.8rem!important;
  }
  .m-img {
    position: relative!important;
  }
  .mission-img {
    margin-top: -10rem;
  }
}
</style>
