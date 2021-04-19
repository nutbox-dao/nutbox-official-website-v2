<template>
  <section id="mission-section">
    <div class="container">
      <div class="row">
        <div class="col-sm-5 text-left left-box mt-lg-4">
          <div class="font32 font-bold mb-4">Nutbox</div>
          <div class="font68 font-bold mb-2">{{$t('missionSection.title')}}</div>
          <div class="font-bold font18" style="line-height: 1.3rem">{{$t('missionSection.p1')}}</div>
        </div>
      </div>
    </div>
    <div class="m-img">
      <img class="mission-img" src="~@/assets/mission-bg.svg" alt="">
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
  background-image: url("~@/assets/top-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center top;
  padding-top: 6rem;
  min-height: 45rem;
  position: relative;
  .left-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 20rem;
    max-height: 40rem;
    z-index: 1;
  }
  .m-img {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 42rem;
    margin: auto;
  }
  .mission-img {
    width: 110%;
  }
}
@media (min-width: 1660px) {
  .m-img {
    left: 45%;
    right: auto;
  }
}
@media (max-width: 960px) and (min-width: 578px) {
  .m-img {
    text-align: right;
  }
  .mission-img {
    width: 80% !important;
  }
}
@media (max-width: 577px) {
  #mission-section {
    background-size: cover;
  }
  .m-img {
    position: relative!important;
  }
  .mission-img {
    margin-top: -30%;
  }
}
</style>
