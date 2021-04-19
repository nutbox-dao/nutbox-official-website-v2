<template>
  <section id="blockchain-section">
    <div class="container">
      <div class="font40 font-bold mb-4">{{$t('blockchainSection.title')}}</div>
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="row">
            <div class="col-md-4 mb-2">
              <div class="b-card">
                <span class="title">{{$t('blockchainSection.now')}}</span>
                <div class="img-box">
                  <img src="~@/assets/chain-logo1.png" alt="">
                  <img src="~@/assets/chain-logo2.png" alt="">
                  <img src="~@/assets/chain-logo3.png" alt="">
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-2">
              <div class="b-card">
                <div class="title">{{$t('blockchainSection.inDevelopment')}}</div>
                <div class="img-box">
                  <img src="~@/assets/chain-logo4.png" alt="">
                  <img src="~@/assets/chain-logo5.png" alt="">
                  <img src="~@/assets/chain-logo6.png" alt="">
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-2">
              <div class="b-card">
                <div class="title">{{$t('blockchainSection.planned')}}</div>
                <div class="img-box">
                  <img src="~@/assets/chain-logo7.png" alt="">
                  <img src="~@/assets/chain-logo8.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlockchainSections'
}
</script>

<style scoped lang="scss">
#blockchain-section {
  background-color: $primary-color;
  .b-card {
    background: white;
    height: 100%;
    border: none;
    border-radius: 1.2rem;
    box-shadow: 1rem 1.4rem 1.8rem .6rem rgba(36, 38, 41, 0.04);
    padding: 1.5rem 2.5rem;
    .card-body {
      padding: 1.6rem 2rem;
    }
  }
  .title {
    padding: 0 .4rem;
    border-radius: 8px;
    display: inline-block;
    margin-bottom: 1.4rem;
    border: 1px solid;
    font-weight: 500;
  }
  .img-box {
    display: flex;
    justify-content: center;
    img {
      width: 3.2rem;
      height: 3.2rem;
      margin: 0 .6rem;
      border: 1px solid #E3E5E8;
      border-radius: 3.2rem;
    }
  }
  .col-md-4:nth-child(1) {
    .title {
      color: rgba(80, 191, 0, 1);
      border-color: rgba(80, 191, 0, .3);
      background:  rgba(80, 191, 0, .05);
    }
  }
  .col-md-4:nth-child(2) {
    .title {
      color: #F8B62A;
      background: rgba(255, 219, 38, 0.05);
      border-color: rgba(255, 219, 38, 0.3);
    }
  }
  .col-md-4:nth-child(3) {
    .title {
      color: rgba(64, 143, 255, 1);
      border-color: rgba(64, 143, 255, .3);
      background: rgba(64, 143, 255, .05);
    }
  }
}
</style>
