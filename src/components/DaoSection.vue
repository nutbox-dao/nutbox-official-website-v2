<template>
 <section id="dao-section">
  <div class="container">
    <div class="create-card">
      <div class="row">
        <div class="col-lg-6 col-md-6 offset-lg-6 offset-md-6 d-flex flex-column justify-content-center">
          <div class="font36 line-height50 mb-3 text-left text-medium">{{$t('daoSection.title1')}}</div>
          <div class="font18 line-height46 mb-4 text-left font-bold text-grey-dark">{{$t('daoSection.desc1')}}</div>
          <div class="d-flex btn-box">
            <button class="primary-btn primary-btn-outline mr-2">{{$t('readMore')}}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="links text-right" style="margin-right: 3rem">
      <a href="#">
        <span class="gradient-text gradient-text-bottom text-medium btn-link">
          Explore  Communities
        </span>
        <i class="arrow-icon arrow-icon-1"></i>
      </a>
    </div>
    <div class="row" style="margin-top: 4rem">
      <div class="col-lg-6 col-md-6  d-flex flex-column justify-content-center">
        <div class="dao-card dao-card-1 text-left">
          <div class="font36 line-height50 mb-5 text-left text-medium">
            {{$t('daoSection.title2')}} <span class="text-primary-c">DAO</span>
          </div>
          <div class="font18 line-height46 mb-4 text-left font-bold text-grey-dark">{{$t('daoSection.desc2')}}</div>
          <button class="primary-btn primary-btn-outline mt-3">{{$t('readMore')}}</button>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 d-flex flex-column justify-content-center">
        <div class="dao-card dao-card-2">
          <div class="links text-right">
            <a class="link-hover" href="#">
              <span>Contribute by build and earn</span>
              <i class="arrow-icon"></i>
            </a>
            <a class="link-hover" href="#">
              <span>Self-bootstrap by adding Dapps</span>
              <i class="arrow-icon"></i>
            </a>
            <a class="link-hover" href="#">
              <span>Deploy without code</span>
              <i class="arrow-icon"></i>
            </a>
          </div>
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
#dao-section {
  background-image: url("~@/assets/dao-img0.png"), url("~@/assets/dao-img3.png");
  background-position: left 2rem, right bottom;
  background-repeat: no-repeat;
  background-size: auto, 18rem;
  padding-bottom: 5rem;
}
.container  {
  margin-top: 10rem;
}
.create-card {
  background-image: url("~@/assets/dao-card-bg0.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 5rem 3rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-image: url("~@/assets/card-line.svg");
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .desc {
    font-size: 18px;
  }
}
.dao-card {
  height: 100%;
  background-repeat: no-repeat;
  min-height: 35rem;
  &-1 {
    background-image: url("~@/assets/dao-img1.png"), url("~@/assets/dao-card-bg1.png");
    background-size: auto, 100% 100%;
    background-position: 95% 95%, center;
    padding: 3.8rem;
  }
  &-2 {
    background-image: url("~@/assets/dao-card-bg2.png"),  url("~@/assets/dao-card-bg3.png");
    background-position: center, center bottom;
    background-repeat: no-repeat;
    background-size: 100% 100%, 100%;
    padding: 8rem 2rem 0 2rem;
    margin-left: 2.5rem;
  }
}
.links a .btn-link {
  font-size: 1.8rem;
}
.t2 {
  margin-top: 10rem;
  margin-bottom: 3rem;
}
@media (min-width: 992px) and (max-width: 1440px) {
  .create-card {
    padding: 5rem 3rem;
  }
}
@media (max-width: 991px) {
  .create-card {
    padding: 3rem;
  }
  .dao-card {
    min-height: fit-content;
    &-1 {
      padding: 3.8rem 2rem;
    }
    &-2 {
      margin-left: 0;
      padding: 8rem 1.5rem 0;
    }
  }
}
@media (max-width: 960px) {
  .dao-card-2 {
    padding: 5rem 1.5rem 0;
  }
}
@media (max-width: 767px) {
  .create-card {
    background-image: linear-gradient(to right, rgba(black, .8), rgba(black, 0)), url("~@/assets/dao-card-bg0.png");
    background-position: center, center;
    background-repeat: no-repeat;
    background-size: 100% 100%, 100% 100%;
    border-radius: 20px;
    .btn-box {
      justify-content: flex-end;
    }
  }
  .dao-card {
    min-height: 35rem;
    width: 80%;
    margin: 1rem auto;
    &-2 {
      padding: 8rem 2.5rem 0;
    }
  }
}
@media (max-width: 500px) {
  .create-card {
    background-size: cover;
    background-position: left bottom;
    border: 1px solid #424344;
    border-radius: 2rem;
  }
  .dao-card {
    min-height: 400px;
    width: 100%;
  }
  .links a span {
    font-size: 16px;
  }
  .links a .arrow-icon {
    width: 14px;
    height: 14px;
    min-width: 14px;
    margin-left: 10px;
  }
}
@media (max-width: 400px) {
  .dao-card {
    min-height: 350px;
    &-2 {
      padding: 6rem 2rem;
    }
  }
  .links a span {
    font-size: 12px;
  }
}
@media (max-width: 350px) {
  .create-card {
    background-image: linear-gradient(to right, rgba(black, .6), rgba(black, .7)), url("~@/assets/dao-card-bg0.png");
    border-radius: 2.8rem;
  }

}
</style>
