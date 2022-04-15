<template>
  <section id="peanut-section">
    <div class="container">
<!--      <img class="bg-img" src="~@/assets/peanut-img1.png" alt="">-->
      <div class="p-card">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="links">
              <a href="#" class="d-flex justify-content-start">
                <span class="gradient-text gradient-text-bottom text-medium btn-link font36">Explore Peanut</span>
                <i class="arrow-icon arrow-icon-1"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-8 offset-lg-6 offset-md-4 d-flex flex-column justify-content-center">
            <div class="font36 line-height50 mb-3 text-right text-medium">
              <span class="font-bold">PEANUT</span> <br>
              {{$t('peanutSection.title')}}
            </div>
            <div class="font18 line-height46 mb-3 text-right font-bold text-grey-dark">{{$t('peanutSection.desc1')}}</div>
            <div class="d-flex justify-content-end">
              <button class="primary-btn primary-btn-outline mr-2">{{$t('readMore')}}</button>
            </div>
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
  margin: 2rem 0 4rem;
}
.p-card {
  min-height: 500px;
  background-image: url("~@/assets/peanut-bg1.png"),url("~@/assets/peanut-bg2.png"), url("~@/assets/peanut-bg0.png");
  background-repeat: no-repeat;
  background-size: 100% 100%, contain, contain;
  background-position: center, right bottom, left bottom;
  padding: 3.5rem;
}
.links a .btn-link {
  font-size: 1.8rem;
}
@media (max-width: 1200px) {
  .p-card {
    min-height: 29rem;
  }
}
@media (max-width: 767px) {
  .p-card {
    background-size: 100% 100%, cover, contain;
  }
}
</style>
