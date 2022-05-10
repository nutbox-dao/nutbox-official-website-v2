<template>
 <section id="dao-section">
  <div class="container">
    <div class="create-card">
      <div class="row">
        <div class="bg1">
          <img src="~@/assets/dao-img1.png" alt="">
        </div>
        <div class="col-lg-6  offset-lg-6 col-md-8 offset-md-4 d-flex flex-column justify-content-center right-box">
          <div class="links mb-3">
            <a class="justify-content-start" href="https://walnut.nutbox.app/#/community/index" target="blank">
              <span class="gradient-text gradient-text-bottom text-medium btn-link">
                Explore  Communities
              </span>
              <i class="arrow-icon arrow-icon-1"></i>
            </a>
          </div>
          <div class="font40 line-height50 mb-3 text-left text-bold">
            Enter the world of communities and get connected.
          </div>
          <div class="font18 line-height46 mb-4 text-left text-grey-dark">
            The best community supporting platform for community entrepreneurs and digital
            nomads which provides out-of-box facilities and connects worldwide communities.
          </div>
        </div>
      </div>
    </div>
    <div class="dao-card row">
      <div class="bg2">
        <img src="~@/assets/dao-img2.png" alt="">
      </div>
      <div class="col-lg-5 col-md-8 d-flex flex-column">
        <div class="dao-card-1 text-left">
          <div class="font40 line-height50 mb-5 text-left text-bold">
            Create and configure your DAO in 5 minutes.
          </div>
          <div class="font18 line-height46 mb-4 text-left text-grey-dark">
            With Nutbox Toolkits, you can easily create a DAO in 5
            minutes and configure its Defi (Walnut), NFT (Chestnut)
            and Social (Donut) modules.
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
  background-image: url("~@/assets/dao-img3.png");
  background-position: left 95%;
  background-repeat: no-repeat;
  background-size: auto 12rem;
  padding-bottom: 0;
}
.create-card {
  position: relative;
  padding-bottom: 8rem;
  .bg1 {
    position: absolute;
    left: -13rem;
    top: 25%;
    width: 40rem;
    img {
      width: 100%;
    }
  }
  .right-box {
    min-height: 29rem;
    background-image: url("~@/assets/dao-img0.png");
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 10rem auto;
  }
}
.dao-card {
  height: 100%;
  background-repeat: no-repeat;
  min-height: 30rem;
  position: relative;
  padding-top: 4rem;
  .bg2 {
    position: absolute;
    right: 0;
    top: 7rem;
    width: 30rem;
    img {
      width: 100%;
    }
  }
}
.t2 {
  margin-top: 10rem;
  margin-bottom: 3rem;
}
@media (max-width: 1200px) {
}
@media (max-width: 991px) {
  .create-card {
    padding-bottom: 4rem;
    .right-box {
      background-image: none;
    }
    .bg1 {
      left: -10rem;
      width: 60%;
    }
  }
  .dao-card {
    height: fit-content;
    min-height: auto;
    padding-top: 0;
    .bg2 {
      width: 40%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
@media (max-width: 767px) {
  .create-card {
    padding-bottom: 0;
    .bg1 {
      width: 80%;
      top: 55%;
      left: auto;
      right: -10%;
    }
  }
  .dao-card {
    .bg2 {
      width: 0;
    }
  }
}
@media (max-width: 500px) {
  .create-card {
    padding-bottom: 5rem;
    .bg1 {
      top: 40%;
      width: 100%;
    }
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
  .links a span {
    font-size: 12px;
  }
}
@media (max-width: 350px) {
}
</style>
