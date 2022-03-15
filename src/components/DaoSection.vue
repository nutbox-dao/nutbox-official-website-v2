<template>
 <section id="dao-section">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-6">
        <div class="font32 font-bold mb-4 text-left">{{$t('daoSection.title1')}}</div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-6">
        <img src="~@/assets/dao-img1.png" alt="">
      </div>
      <div class="col-lg-6 col-md-6 d-flex flex-column justify-content-center">
        <div class="line-height40 font-bold mb-4 text-left text-grey-dark">{{$t('daoSection.desc1')}}</div>
        <div class="d-flex">
          <button class="primary-btn primary-btn-outline mr-2">{{$t('readMore')}}</button>
          <button class="primary-btn primary-btn-outline-primary">{{$t('daoSection.btn1')}}</button>
        </div>
      </div>
    </div>
    <div class="row t2">
      <div class="col-lg-6 col-md-6">
        <div class="font32 font-bold mb-4 text-left">{{$t('daoSection.title2')}} <span class="text-primary-c">DAO</span></div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-6">
        <div class="line-height40 font-bold mb-4 text-left text-grey-dark">{{$t('daoSection.desc1')}}</div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-6 d-flex">
        <button class="primary-btn primary-btn-outline mr-2">{{$t('readMore')}}</button>
      </div>
      <div class="col-lg-6 col-md-6 d-flex flex-column justify-content-center">
        <img src="~@/assets/dao-img2.png" alt="">
        <div class="links text-right">
          <a href="#">Contribute by build and earn</a>
          <a href="#">Self-bootstrap by adding Dapps</a>
          <a href="#">Deploy without code</a>
        </div>
      </div>
    </div>
  </div>
 </section>
</template>

<script>
export default {
  name: 'DaoSection'
}
</script>

<style scoped lang="scss">
img {
  width: 100%;
}
.t2 {
  margin-top: 10rem;
  margin-bottom: 3rem;
}
.links {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  a {
    color: white;
    margin: .6rem;
    &:hover {
      color: var(--primary-custom);
    }
  }
}
</style>
