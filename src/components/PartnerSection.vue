<template>
  <section id="partner-section">
    <div class="container">
      <div class="h-line"></div>
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center">
          <div class="font40 text-bold title">Partners</div>
          <div class="links">
            <a href="#" class="d-flex">
              <span class="gradient-text gradient-text-bottom text-bold btn-link ">Partnership & Cooperation</span>
              <i class="arrow-icon arrow-icon-1"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="grid-box">
            <div class="p-card p-logo0"></div>
            <div class="p-card p-logo1"></div>
            <div class="p-card p-logo2"></div>
            <div class="p-card p-logo3"></div>
            <div class="p-card p-logo4"></div>
            <div class="p-card p-logo5"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PartnerSection'
}
</script>

<style scoped lang="scss">
.h-line {
  width: 100%;
  height: 1px;
  background: rgba(white, .3);
  margin-bottom: 8rem;
}
.title {
  text-align: left;
  margin-bottom: 1.5rem;
}
.links {
  margin-bottom: 4rem;
}
.links a {
  justify-content: flex-start;
}
.grid-box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.p-card {
  flex: 1;
  text-align: left;
  height: 6rem;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: left center;
  margin: 1rem 0;
}
.p-logo0 {
  background-image: url("~@/assets/partner-logo0.png");
  &:hover {
    background-image: url("~@/assets/partner-logo0-active.png");
  }
}
.p-logo1 {
  background-image: url("~@/assets/partner-logo1.png");
  &:hover {
    background-image: url("~@/assets/partner-logo1-active.png");
  }
}
.p-logo2 {
  background-image: url("~@/assets/partner-logo2.png");
  &:hover {
    background-image: url("~@/assets/partner-logo2-active.png");
  }
}
.p-logo3 {
  background-image: url("~@/assets/partner-logo3.png");
  &:hover {
    background-image: url("~@/assets/partner-logo3-active.png");
  }
}
.p-logo4 {
  background-image: url("~@/assets/partner-logo4.png");
  &:hover {
    background-image: url("~@/assets/partner-logo4-active.png");
  }
}
.p-logo5 {
  background-image: url("~@/assets/partner-logo5.png");
  &:hover {
    background-image: url("~@/assets/partner-logo5-active.png");
  }
}
@media (max-width: 991px) {
  .links {
    margin-bottom: 0;
  }
  .grid-box {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 767px) {
  .grid-box {
    grid-template-columns: repeat(2, 1fr);
  }
  .p-card {
    background-position: center;
  }
  .title {
    text-align: center;
  }
  .links a {
    justify-content: center;
  }
}
</style>
