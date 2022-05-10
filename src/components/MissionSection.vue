<template>
  <section id="mission-section">
    <div class="container">
      <div class="banner-card">
        <div class="row">
          <div class="col-md-7 text-left">
            <div class="title text-bold">Our Mission</div>
            <div class="desc text-grey-dark">
              Create anything from a staking protocol to the next big DAO.
              Automatically distribute community Token to contributors.
            </div>
          </div>
          <div class="img-box">
            <img src="~@/assets/mission-img0.png" alt="">
          </div>
        </div>
      </div>
      <div class="data-card">
        <div class="title text-bold text-left line-height46">
          Peanut <br>
          the <span class="gradient-text gradient-text-bottom">1st</span> Staking DAO.
        </div>
        <div class="grid-box">
          <div class="box-item0">
            <div class="g-card g-card-0">
              <div class="d-flex align-items-center">
                <i class="icon icon-0"></i>
                <span class="g-title g-title-1">No.1</span>
              </div>
              <div class="g-desc">The 1st Staking DAO built by Nutbox</div>
            </div>
          </div>
          <div class="box-item1">
            <div class="g-card g-card-1">
              <div class="d-flex align-items-center">
                <i class="icon icon-1"></i>
                <span class="g-title g-title-1">No.2</span>
              </div>
              <div class="g-desc">The 2nd largest Staking Platform of Steem Blockchain</div>
            </div>
          </div>
          <div class="box-item2">
            <div class="g-card g-card-2">
              <div class="d-flex align-items-center">
                <i class="icon icon-2"></i>
                <span class="g-title g-title-2 gradient-text gradient-text-bottom">$6.7M</span>
              </div>
              <div class="g-desc">Staking Value of STEEM POWER</div>
            </div>
          </div>
          <div class="box-item3">
            <div class="g-card g-card-3">
              <div class="d-flex align-items-center">
                <i class="icon icon-3"></i>
                <span class="g-title g-title-2 gradient-text gradient-text-bottom">$3.0M</span>
              </div>
              <div class="g-desc">Market Value of PNUT</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'MissionSection'
}
</script>

<style scoped lang="scss">
#mission-section {
  padding-top: 120px;
}
.banner-card {
  min-height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 6rem;
  position: relative;
}
.title {
  font-size: 1.8rem;
}
.desc {
  font-size: 1.2rem;
  line-height: 2.3rem;
  margin-top: 1.5rem;
}
.img-box {
  position: absolute;
  right: 0;
  width: 28rem;
  top: 50%;
  transform: translateY(-50%);
  img{
    width: 100%;
  }
}
.data-card {
  background-image: url("~@/assets/mission-img1.png"), linear-gradient(rgba(white, .08), rgba(white, .08));
  background-repeat: no-repeat, repeat;
  background-size: 15rem auto;
  background-position: 2rem 80%;
  border: 1px solid rgba(white, .1);
  border-radius: 2rem;
  padding: 2rem 2.5rem 4rem;
  position: relative;
  min-height: 24rem;
}
.grid-box {
  position: absolute;
  bottom: 3.5rem;
  right: -1.5rem;
  display: grid;
  grid-template-columns: 21rem 17rem;
  grid-template-rows: 10rem 7rem;
  column-gap: 1.25rem;
  row-gap: 1rem;
  .g-card {
    padding: 1.2rem 1.6rem;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-0 {
      border: 1px solid rgba(#343434, .3);
      background-color: rgba(#303030, .6);
      width: 70%;
      height: 100%;
      margin-left: auto;
    }
    &-1 {
      border: 1px solid #343434;
      background-color: #1C1C1C;
      box-shadow: 0 10px 10px 1px rgba(black, .5);
    }
    &-2 {
      border: 1px solid #343434;
      background-color: #1E1E1E;
      box-shadow: 0 5px 5px 1px rgba(black, .25);
    }
    &-3 {
      margin-top: 10px;
      height: calc(100% - 10px);
      width: 80%;
      border: 1px solid rgba(#343434, .3);
      background-color: #2E2E2E;
    }
  }
  .icon {
    display: block;
    width: 2rem;
    height: 2rem;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: left center;
    margin-right: 8px;
    &-0 {
      background-image: url("~@/assets/mission-icon0.png");
    }
    &-1 {
      background-image: url("~@/assets/mission-icon1.png");
    }
    &-2 {
      background-image: url("~@/assets/mission-icon2.png");
    }
    &-3 {
      background-image: url("~@/assets/mission-icon3.png");
    }
  }
  .g-title {
    line-height: 2.3rem;
    &-1 {
      font-size: 2.5rem;
    }
    &-2 {
      font-size: 1.8rem;
    }
  }
  .g-desc {
    font-size: .9rem;
    color: #B0B0B0;
    text-align: left;
    line-height: 2.3rem;
  }
}
@media (max-width: 991px) {
  .data-card {
    min-height: 30rem;
    background-position: 1rem 40%;
  }
  .grid-box {
    grid-template-columns: 25rem 20rem;
    grid-template-rows: 10rem 7rem;
  }
}
@media (max-width: 767px) {
  .banner-card {
    justify-content: flex-end;
  }
  .img-box {
    position: absolute;
    width: 75%;
    top: 4rem;
    transform: translateY(0);
  }
  .data-card {
    .title {
      margin-top: 1rem;
    }
    background-size: 10rem;
    background-position: right top;
  }
  .grid-box {
    bottom: 2rem;
    right: .5rem;
    left: .5rem;
    grid-template-columns: 50% 50%;
    grid-template-rows: 10rem 7rem;
  }
}
@media (max-width: 500px) {
  .data-card {
    background-position: 1.5rem 20%;
    background-size: 13rem;
  }
  .grid-box {
    position: unset;
    margin-top: 2rem;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, auto);
    .g-card-3 {
      margin-top: 0;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
