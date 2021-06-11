<template>
  <section id="partner-section">
    <div class="font40 font-bold">{{$t('partnerSection.title')}}</div>
    <div class="row mt-2 mb-2">
      <div class="col-lg-4 col-6  mb-4">
        <div class="p-card"><img src="~@/assets/partner-logo0.png" alt=""></div>
      </div>
      <div class="col-lg-4 col-6  mb-4">
        <div class="p-card"><img src="~@/assets/partner-logo1.png" alt=""></div>
      </div>
      <div class="col-lg-4 col-6 mb-4">
        <div class="p-card"><img src="~@/assets/partner-logo2.png" alt=""></div>
      </div>
      <div class="col-lg-4 col-6 mb-4">
        <div class="p-card"><img src="~@/assets/partner-logo3.png" alt=""></div>
      </div>
      <div class="col-lg-4 col-6 mb-4">
        <div class="p-card"><img src="~@/assets/partner-logo4.png" alt=""></div>
      </div>
      <div class="col-lg-4 col-6 mb-4">
        <div class="p-card"><img src="~@/assets/partner-logo5.png" alt=""></div>
      </div>
    </div>
    <a class="partner-btn" href="http://nutboxteam.hk.mikecrm.com/wRvLdZR"
              target="_blank">
      <span>{{$t('partnerSection.btnText')}}</span>
      <img src="~@/assets/arrow-forward.svg" alt="">
    </a>
  </section>
</template>

<script>
export default {
  name: 'PartnerSection'
}
</script>

<style scoped lang="scss">
.p-card {
  height: 100%;
  box-shadow: 1rem 1.4rem 1.8rem .6rem rgba(36, 38, 41, 0.04);
  border-radius: 1.2rem;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-height: 4rem;
  }
}
a{
  text-decoration: none;
}
.partner-btn {
  border: 1px solid #E3E5E8;
  height: 2.8rem;
  border-radius: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18rem;
  color: $text-black;
  margin: auto;
  img {
    width: 1rem;
    margin-left: .5rem;
  }
}
</style>
