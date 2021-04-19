<template>
  <section id="join-section">
    <div class="font40 font-bold">{{$t('joinSection.title')}}</div>
    <div class="font20 mb-4 text-grey-dark">{{$t('joinSection.p1')}}</div>
    <div class="btn-box">
      <a class="primary-btn" href="http://nutboxteam.hk.mikecrm.com/gou6cN8" target="_blank">
        <span>{{$t('joinSection.btn1')}}</span>
        <img src="~@/assets/arrow-forward.svg" alt="">
      </a>
      <a class="primary-btn"
         href="https://blog.nutbox.io/@nutbox.mine/nutbox-global-ambassador-program-or-nutbox"
         target="_blank">
        <span>{{$t('joinSection.btn2')}}</span>
        <img src="~@/assets/arrow-forward.svg" alt="">
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JoinUsSection'
}
</script>

<style scoped lang="scss">
#join-section {
  background-image: url("~@/assets/join-bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  margin: 0;
  padding-top: 5rem;
  .btn-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  a {
    text-decoration: none;
  }
  .primary-btn {
    color: $text-black;
    background: white;
    min-width: 15rem;
    max-width: 20rem;
    margin: 1rem;
    min-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 1rem;
      margin-left: .5rem;
    }
  }
}
@media (max-width: 560px) {
  .btn-box {
    flex-direction: column!important;
  }
}
</style>
