<template>
  <section id="peanut-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div class="font32 font-bold mb-4 text-left text-primary-c">PEANUT</div>
          <div class="font32 font-bold mb-4 text-left">{{$t('peanutSection.title')}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6">
        </div>
        <div class="col-lg-6 col-md-6 d-flex flex-column justify-content-center">
          <div class="line-height40 font-bold mb-4 text-left text-grey-dark">{{$t('peanutSection.desc1')}}</div>
          <div class="d-flex">
            <button class="primary-btn primary-btn-outline mr-2">{{$t('readMore')}}</button>
            <button class="primary-btn primary-btn-outline-primary">{{$t('peanutSection.btn1')}}</button>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'PeanutSection'
}
</script>

<style scoped lang="scss">
#peanut-section {
  margin: 4rem 0;
}
.container {
  background-image: url("~@/assets/peanut-img1.png");
  background-repeat: no-repeat;
  background-position: left bottom;
}
</style>
