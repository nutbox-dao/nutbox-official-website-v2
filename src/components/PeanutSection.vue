<template>
  <section id="peanut-section">
    <div class="container">
      <img class="bg-img" src="~@/assets/peanut-img1.png" alt="">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div class="font36 line-height50 mb-5 text-left text-medium">
            <span class="text-primary-c">PEANUT</span> <br>
            {{$t('peanutSection.title')}}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6">
        </div>
        <div class="col-lg-6 col-md-6 d-flex flex-column justify-content-center">
          <div class="font18 line-height46 mb-4 text-left font-bold text-grey-dark">{{$t('peanutSection.desc1')}}</div>
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
  position: relative;
}
.bg-img {
  position: absolute;
  height: 45rem;
  top: 50%;
  left: 0;
  transform: translateY(-40%);
}
@media (max-width: 960px) {
  .bg-img {
    position: absolute;
    height: 45rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
