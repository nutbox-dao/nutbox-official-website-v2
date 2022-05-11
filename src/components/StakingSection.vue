<template>
  <section id="staking-section">
    <div class="container position-relative">
      <div class="row">
        <div class="col-lg-7 col-md-7">
          <div class="d-flex flex-column justify-content-between h-100">
            <div style="margin-left: 2.5rem">
              <div class="links links-float">
                <a href="https://walnut.nutbox.io" class="d-flex justify-content-start" target="blank">
                  <span class="gradient-text gradient-text-bottom text-bold btn-link ">Start Staking</span>
                  <i class="arrow-icon arrow-icon-1"></i>
                </a>
              </div>
              <div class="title text-left text-bold">The $NUT Native Token</div>
            </div>
            <div>
              <div class="text-card">
                $NUT is the native token of Nutbox economy, providing members and
                communities with benefits and services, and dictates Nutbox’s governance.
              </div>
              <div class="text-card">
                Nutbox Voting Power (NUT Power for short) is the Governance Power of Nutbox DAO.
                The Nutbox governance reward of a user is charged by the user’s governance activity.
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-5">
          <div class="img-box">
            <img src="~@/assets/staking-img0.png" alt="">
          </div>
        </div>
        <div class="col-12">
          <div class="links" style="margin-left: 2.5rem">
            <a href="https://nutbox-io.gitbook.io/nutbox/3.-nutbox-economy/3.3.-nutbox-voting-power" target="blank" class="d-flex justify-content-start">
              <span class="text-medium btn-link text-white" style="font-size: 1.2rem">Learn More</span>
              <i class="arrow-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StakingSection'
}
</script>

<style scoped lang="scss">
#staking-section {
  padding-top: 8rem;
  padding-bottom: 8rem;
}
.title {
  font-size: 2rem;
  line-height: 2.5rem;
  margin-top: 1rem;
}
.text-card {
  border: 1px solid rgba(white, .3);
  border-radius: 2rem;
  min-height: 12rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  padding: 2.5rem;
  margin-top: 2.5rem;
  background-image: linear-gradient(to right, rgba(white, .1) 70%, rgba(white, .05));
  font-size: .9rem;
  line-height: 2.3rem;
}
.img-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  img {
    width: 100%;
  }
}
@media (max-width: 991px) {
  .text-card {
    min-height: auto;
    height: fit-content;
    padding: 1.4rem 2.5rem;
    line-height: 2rem;
  }
}
@media (max-width: 767px) {
  .text-card {
    padding: 2.5rem;
    line-height: 2.3rem;
  }
  .img-box {
    width: 0;
  }
}
</style>
