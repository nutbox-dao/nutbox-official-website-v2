<template>
  <section id="community-ecology-section">
    <div class="font40 font-bold">{{$t('communitySection.title')}}</div>
    <div class="eco-img-container">
      <div class="eco-box">
        <img src="../assets/eco/Crust@2x.png" alt="">
        <span class="font-bold">Crust</span>
      </div>
      <div class="eco-box">
        <img src="../assets/eco/Astar@2x.png" alt="">
        <span class="font-bold">Astar</span>
      </div>
      <div class="eco-box">
        <img src="../assets/eco/Darwinia@2x.png" alt="">
        <span class="font-bold">Darwinia</span>
      </div>
      <div class="eco-box">
        <img src="../assets/eco/Phala@2x.png" alt="">
        <span class="font-bold">Crust</span>
      </div>
      <div class="eco-box">
        <img src="../assets/eco/Bifrost@2x.png" alt="">
        <span class="font-bold">Crust</span>
      </div>
      <div class="eco-box">
        <img src="../assets/eco/Token Pocket@2x.png" alt="">
        <span class="font-bold">Crust</span>
      </div>
      <div class="eco-box">
        <img src="../assets/eco/Ares@2x.png" alt="">
        <span class="font-bold">Ares</span>
      </div>
      <div class="eco-box">
        <img src="../assets/eco/Equilibrium@2x.png" alt="">
        <span class="font-bold">Equilibrium</span>
      </div>
      <div class="eco-box">
        <img src="../assets/eco/TrustBase@2x.png" alt="">
        <span class="font-bold">TrustBase</span>
      </div>
      <div class="eco-box">
        <img src="../assets/eco/ChainX@2x.png" alt="">
        <span class="font-bold">ChainX</span>
      </div>
      <div class="eco-box">
        <img src="../assets/eco/Subgame@2x.png" alt="">
        <span class="font-bold">Subgame</span>
      </div>
      <div class="eco-box">
        <img src="../assets/eco/Apron@2x.png" alt="">
        <span class="font-bold">Apron</span>
      </div>
      <div class="eco-box">
        <img src="../assets/eco/Clover@2x.png" alt="">
        <span class="font-bold">Clover</span>
      </div>
      <div class="eco-box">
        <img src="../assets/eco/Peanut@2x.png" alt="">
        <span class="font-bold">Peanut</span>
      </div>
      <div class="eco-box">
        <img src="../assets/eco/BML@2x.png" alt="">
        <span class="font-bold">BML</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CommunityEcology'
}
</script>

<style scoped lang="scss">
.eco-img-container {
  margin-top: 1.4rem;
  margin-bottom: 2.5rem;
  display: flex;
  //gap: 2rem;
  flex-flow: wrap;
  justify-content: center;
  .eco-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
  }
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
    box-shadow: .5rem .7rem .9rem .3rem rgba(36, 38, 41, 0.04);
  }
}
@media (max-width: 500px) {
  .eco-box {
    margin: .5rem;
  }
}
</style>
