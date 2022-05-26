<template>
  <section id="nut-power-section">
    <div class="container">
      <div class="h-line h-line-top"></div>
      <div class="text-bold title line-height50">
        Why <span class="gradient-text gradient-text-bottom">Nutbox</span> ?
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="nut-card nut-card-1">
            <img class="icon" src="~@/assets/nut-card-icon1.png" alt="">
            <div class="card-title text-bold">
              {{$t('nutboxSection.t1')}}
            </div>
            <div class="card-h-line"></div>
            <div class="desc text-grey-dark">
              {{$t('nutboxSection.p1')}}
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="nut-card nut-card-2">
            <img class="icon" src="~@/assets/nut-card-icon2.png" alt="">
            <div class="card-title text-bold">
              {{$t('nutboxSection.t2')}}
            </div>
            <div class="card-h-line"></div>
            <div class="desc text-grey-dark">
              {{$t('nutboxSection.p2')}}
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="nut-card nut-card-2">
            <img class="icon" src="~@/assets/nut-card-icon3.png" alt="">
            <div class="card-title text-bold">
              {{$t('nutboxSection.t3')}}
            </div>
            <div class="card-h-line"></div>
            <div class="desc text-left text-grey-dark">
              {{$t('nutboxSection.p3')}}
            </div>
          </div>
        </div>
      </div>
      <div class="h-line h-line-bottom"></div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'NutPowerSection'
}
</script>

<style scoped lang="scss">
.h-line {
  width: 100%;
  height: 1px;
  background-color: rgba(white, .3);
  &-top {
    margin-bottom: 7rem;
  }
  &-bottom {
    margin-top: 9rem;
  }
}
.title {
  font-size: 3rem;
  margin-bottom: 5rem;
}
.nut-card {
  height: 100%;
  border: 2px solid rgba(white, .3);
  border-radius: 2rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  padding: 2.25rem 0;
  &:hover {
    background-image: linear-gradient(rgba(white,.1), rgba(white,.1));
  }
  .icon {
    height: 4rem;
    width: auto;
  }
  .card-title {
    font-size: 1rem;
    line-height: 2.3rem;
    width: 70%;
    margin: 2rem auto 0;
    min-height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-h-line {
    width: 80%;
    height: 1px;
    background-color: rgba(white, .3);
    margin: 1rem auto;
  }
  .desc {
    width: 80%;
    margin: auto;
    font-size: .8rem;
    line-height: 2.3rem;
  }
}
@media (max-width: 991px) {
  .nut-card {
    height: fit-content;
    margin-bottom: 1rem;
  }
}
@media (max-width: 500px) {
  .nut-card {
    min-height: 24rem;
  }
}
</style>
