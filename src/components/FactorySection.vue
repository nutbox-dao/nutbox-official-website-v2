<template>
  <section id="factory-section">
    <div class="container">
      <div class="font40 font-bold">{{$t('factorySection.title')}}</div>
      <div class="font20 mb-4 text-grey">{{$t('factorySection.p1')}}</div>
      <div class="row">
        <div class="col-md-4">
          <div class="factory-item m-lg-1">
            <div class="item-head-info">
              <img src="~@/assets/factory-icon1.svg" alt="">
            </div>
            <div class="item-info">
              <div class="item-title">{{$t('factorySection.t1')}}</div>
              <div class="item-desc">{{$t('factorySection.desc1')}}</div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="factory-item m-lg-2">
            <div class="item-head-info">
              <img src="~@/assets/factory-icon2.svg" alt="">
            </div>
            <div class="item-info">
              <div class="item-title">{{$t('factorySection.t2')}}</div>
              <div class="item-desc">{{$t('factorySection.desc2')}}</div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="factory-item m-lg-2">
            <div class="item-head-info">
              <img src="~@/assets/factory-icon3.svg" alt="">
            </div>
            <div class="item-info">
              <div class="item-title">{{$t('factorySection.t3')}}</div>
              <div class="item-desc">{{$t('factorySection.desc3')}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FactorySection',
  data () {
    return {
      screenWidth: document.body.clientWidth
    }
  },
  computed: {
    smallSize () {
      return this.screenWidth > 770
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  }
}
</script>

<style scoped lang="scss">
#factory-section {
  background-image: url("~@/assets/factory-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  padding-top: 6rem;
  height: 40rem;
  margin: 0;
  .factory-item {
    margin-bottom: 1rem;
    border-radius: 1.2rem;
    padding: 2.4rem 1rem;
    height: 100%;
    &:hover {
      background: white;
      box-shadow: 1rem 1.4rem 1.8rem .6rem rgba(36, 38, 41, 0.04);
    }
  }
  .item-head-info {
    text-align: center;
    margin: 0 auto 2.2rem auto;
    background: #FFC100;
    height: 7rem;
    width: 7rem;
    padding: 1.6rem;
    border-radius: 7rem;
    img {
      width: 100%;
    }
  }
  .item-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: .6rem;
    //white-space: nowrap;
  }
  .item-desc {
    text-align: left;
  }
}
@media (max-width: 960px) {
  #factory-section {
    height: auto;
    background-position: right;
  }
  .item-title {
    font-size: 1.4rem!important;
  }
}
@media (max-width: 578px) {
  .factory-item {
    height: auto!important;
  }
  .item-desc {
    text-align: center!important;
  }
}
</style>
