<template>
  <section id="nut-power-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div class="font36 line-height50 mb-5 text-left text-medium">NUT & <br> NUT Power</div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6 d-flex ju">
          <img src="~@/assets/nut-power-img1.png" alt="">
        </div>
        <div class="col-lg-6 col-md-6 d-flex flex-column">
          <div class="text-left">
            <div class="font36 line-height50 text-medium">NUT</div>
            <div class="font18 line-height46 mb-4 text-left font-bold text-grey-dark">{{$t('peanutSection.desc1')}}</div>
            <button class="primary-btn primary-btn-outline mr-2">{{$t('readMore')}}</button>
          </div>
          <div class="text-left np-box">
            <div class="font36 line-height50 text-medium">NUT Power</div>
            <div class="font18 line-height46 mb-4 text-left font-bold text-grey-dark">{{$t('peanutSection.desc1')}}</div>
            <button class="primary-btn primary-btn-outline mr-2">{{$t('readMore')}}</button>
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
img {
  object-fit: contain;
  height: fit-content;
  width: 80%;
}
.np-box {
  margin-top: 4rem;
}
</style>
