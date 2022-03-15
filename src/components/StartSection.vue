<template>
  <section id="start-section">
    <div class="container">
      <div class="img-box"></div>
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div>Communities</div>
          <div class="text-primary-c font46">666</div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div>DApp Entities</div>
          <div class="text-primary-c font46">1024</div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div>Users</div>
          <div class="text-primary-c font46">123 k</div>
        </div>
<!--        <div class="col-md-3 col-sm-6">-->
        <div class="col-lg-3 col-md-6">
          <div>TVL</div>
          <div class="text-primary-c font46">$300 M</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'StartSection'
}
</script>

<style scoped lang="scss">
#start-section {
  //background-image: url("~@/assets/start-bg.png");
  //background-repeat: no-repeat;
  //background-size: 100% 100%;
  //background-position: center top;
  padding-top: 6rem;
  min-height: 45rem;
  position: relative;
  .img-box {
    background-image: url("~@/assets/start-bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center top;
    height: 600px;
  }
}
</style>
