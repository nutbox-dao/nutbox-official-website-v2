<template>
  <section id="peanut-section">
    <div class="container">
      <div class="p-card">
        <div class="row">
          <div class="col-lg-6 col-md-8 offset-lg-6 offset-md-4 d-flex flex-column justify-content-center">
            <div class="links">
              <a href="#" class="d-flex justify-content-end">
                <span class="gradient-text gradient-text-bottom text-bold btn-link ">Explore Peanut</span>
                <i class="arrow-icon arrow-icon-1"></i>
              </a>
            </div>
            <div class="text-content">
              <div class="title title-1 text-right text-bold">PEANUT</div>
              <div class="title title-2 text-medium">The first DAO created by Nutbox</div>
              <div class="desc text-left text-grey-dark">
                From a Staking DAO to an investment DAO, will investing and incubating Walnut ecological projects.
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
  name: 'PeanutSection'
}
</script>

<style scoped lang="scss">
.p-card {
  min-height: 28rem;
  background-image: linear-gradient(to right, rgba(white, .05), rgba(white, .08)),url("~@/assets/peanut-bg1.png"), url("~@/assets/peanut-bg0.png");
  background-repeat: no-repeat;
  background-size: 100% 100%, contain, contain;
  background-position: center, right bottom, left bottom;
  padding: 3.5rem;
  position: relative;
  border-radius: 2rem;
  border: 1px solid rgba(white, .2);
}
.links a .btn-link {
  font-size: 1.4rem;
}
.title {
  font-size: 2rem;
  line-height: 2.5rem;
  &-1 {
    margin-top: 1.3rem;
  }
  &-2 {
    width: fit-content;
    margin-left: auto;
    text-align: justify;
    white-space: nowrap;
    margin-bottom: 2.5rem;
  }
}
.text-content {
  position: absolute;
  right: 15px;
  top: 100%;
}
.desc {
  font-size: .9rem;
  line-height: 2.3rem;
  width: 100%;
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
  .title-2 {
    text-align: right;
  }
}
@media (max-width: 450px) {
  .title {
    font-size: 1.8rem;
  }
  .desc {
    margin-left: auto;
  }
}
@media (max-width: 350px) {
  .title-2 {
    white-space: normal;
  }
}
</style>
