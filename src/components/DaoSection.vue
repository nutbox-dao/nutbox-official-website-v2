<template>
 <section id="dao-section">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-6">
        <div class="font36 line-height50 mb-5 text-left text-medium">{{$t('daoSection.title1')}}</div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-6">
        <img src="~@/assets/dao-img1.png" alt="">
      </div>
      <div class="col-lg-6 col-md-6 d-flex flex-column justify-content-center">
        <div class="font18 line-height46 mb-4 text-left font-bold text-grey-dark">{{$t('daoSection.desc1')}}</div>
        <div class="d-flex">
          <button class="primary-btn primary-btn-outline mr-2">{{$t('readMore')}}</button>
          <button class="primary-btn primary-btn-outline-primary">{{$t('daoSection.btn1')}}</button>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 10rem">
      <div class="col-lg-6 col-md-6  d-flex flex-column justify-content-center">
        <div class="font36 line-height50 mb-5 text-left text-medium">
          {{$t('daoSection.title2')}} <span class="text-primary-c">DAO</span>
        </div>
        <div class="font18 line-height46 mb-4 text-left font-bold text-grey-dark">{{$t('daoSection.desc1')}}</div>
        <button class="primary-btn primary-btn-outline mt-3">{{$t('readMore')}}</button>
      </div>
      <div class="col-lg-6 col-md-6 d-flex flex-column justify-content-center">
        <img src="~@/assets/dao-img2.png" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-6 offset-lg-6 offset-md-6 d-flex justify-content-end">
        <div class="links text-right">
          <a href="#">
            <span>Contribute by build and earn</span>
            <i class="arrow-icon"></i>
          </a>
          <a href="#">
            <span>Self-bootstrap by adding Dapps</span>
            <i class="arrow-icon"></i>
          </a>
          <a href="#">
            <span>Deploy without code</span>
            <i class="arrow-icon"></i>
          </a>
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
.container  {
  margin-top: 10rem;
}
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
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: end;
    height: 2.5rem;
    span {
      font-size: 1.5rem;
      font-weight: bold;
      height: 2.5rem;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .arrow-icon {
      display: block;
      width: 20px;
      height: 20px;
      background-image: url("~@/assets/arrow-icon-white.svg");
      background-repeat: no-repeat;
      background-size: 100%;
      margin-left: 1.5rem;
    }
    &:hover {
      color: var(--primary-custom);
      span {
        border-bottom: 5px solid var(--primary-custom);
      }
      .arrow-icon {
        background-image: url("~@/assets/arrow-icon-primary.svg");
      }
    }
  }
}
@media (max-width: 500px) {
  .links a span {
    font-size: 1.4rem;
  }
}
</style>
