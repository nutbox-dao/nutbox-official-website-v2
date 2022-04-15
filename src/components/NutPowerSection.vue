<template>
  <section id="nut-power-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div class="nut-card nut-card-1">
            <div class="font36 line-height50 text-medium">NUT</div>
            <div class="desc font18 line-height46 text-left font-bold text-grey-dark">{{$t('nutPowerSection.desc1')}}</div>
            <button class="primary-btn primary-btn-outline">{{$t('readMore')}}</button>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="nut-card nut-card-2">
            <div class="font36 line-height50 text-medium">NUT Power</div>
            <div class="desc font18 line-height46 text-left font-bold text-grey-dark">{{$t('nutPowerSection.desc2')}}</div>
            <button class="primary-btn primary-btn-outline">{{$t('readMore')}}</button>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'NutPowerSection'
}
</script>

<style scoped lang="scss">
#nut-power-section {
  background-image: url("~@/assets/nut-power-img1.png");
  background-position: left 2rem;
  background-repeat: no-repeat;
  background-size: 50rem;
}
.nut-card {
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  min-height: 35rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  &-1 {
    background-image: url("~@/assets/nut-card-bg1.png");
  }
  &-2 {
    background-image: url("~@/assets/nut-card-bg2.png");
  }
  .desc {
    margin-top: 3rem;
    margin-bottom: 4.4rem;
    height: 10rem;
  }
}
@media (max-width: 767px) {
  .nut-card {
    max-height: 25rem;
    width: 80%;
    margin: 1rem auto;
    .desc {
      height: fit-content;
    }
  }
}
@media (max-width: 500px) {
  .nut-card {
    width: 100%;
  }
}
</style>
