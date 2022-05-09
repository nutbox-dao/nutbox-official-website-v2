<template>
  <section id="community-ecology-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-6">
          <div class="title text-bold">
            Communities Joined Nutbox
            <span class="gradient-text gradient-text-bottom">Ecosystem</span>
          </div>
        </div>
      </div>
      <div class="eco-img-container">
        <div class="eco-box">
          <img src="~@/assets/eco/Token Pocket@2x.png" alt="">
          <span class="font-bold">Token Pocket</span>
        </div>
        <div class="eco-box">
          <img src="~@/assets/eco/Equilibrium@2x.png" alt="">
          <span class="font-bold">Equilibrium</span>
        </div>
        <div class="eco-box">
          <img src="~@/assets/eco/Clover@2x.png" alt="">
          <span class="font-bold">Clover</span>
        </div>
        <div class="eco-box">
          <img src="~@/assets/eco/Nabox.png" alt="">
          <span class="font-bold">NABOX</span>
        </div>
        <div class="eco-box">
          <img src="~@/assets/eco/Peanut@2x.png" alt="">
          <span class="font-bold">Peanut</span>
        </div>
        <div class="eco-box">
          <img src="~@/assets/eco/Crust@2x.png" alt="">
          <span class="font-bold">Crust</span>
        </div>
        <div class="eco-box">
          <img src="~@/assets/eco/Astar@2x.png" alt="">
          <span class="font-bold">Astar</span>
        </div>
        <div class="eco-box">
          <img src="~@/assets/eco/Moonbeam.png" alt="">
          <span class="font-bold">Moonbeam</span>
        </div>
        <div class="eco-box">
          <img src="~@/assets/eco/Darwinia@2x.png" alt="">
          <span class="font-bold">Darwinia</span>
        </div>
        <div class="eco-box">
          <img src="~@/assets/eco/Bifrost@2x.png" alt="">
          <span class="font-bold">Bifrost</span>
        </div>
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
#community-ecology-section {
  margin-bottom: 8rem;
  margin-top: 6rem;
}
.title {
  font-size: 3rem;
  line-height: 3.6rem;
  text-align: left;
  margin-bottom: 5rem;
}
.eco-img-container {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, 6rem);
  row-gap: 5rem;
  column-gap: 4rem;
  border: 1px solid rgba(white, .05);
  background-image: linear-gradient(rgba(white, .05), rgba(white, .05));
  border-radius: 2rem;
  padding: 4rem;
  .eco-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      font-size: .9rem;
      color: #B0B0B0;
      margin-top: 1rem;
    }
  }
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
    box-shadow: .5rem .7rem .9rem .3rem rgba(36, 38, 41, 0.04);
  }
}
@media (max-width: 767px) {
  .eco-img-container {
    grid-template-columns: repeat(4, 6rem);
    column-gap: 2rem;
    padding: 4rem 2rem;
  }
}
@media (max-width: 400px) {
  .eco-img-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
