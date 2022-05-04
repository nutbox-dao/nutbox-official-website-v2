<template>
  <section id="join-section">
    <div class="container">
      <div class="title text-bold">Join Us</div>
      <div class="row">
        <div class="col-md-6 mb-4 mb-md-0">
          <div class="card-border">
            <div class="j-card">
              <div class="links">
                <a href="http://nutboxteam.hk.mikecrm.com/gou6cN8"
                   target="_blank" class="d-flex justify-content-start">
                  <span class="text-bold btn-link text-white">Join as a contributor</span>
                  <i class="arrow-icon"></i>
                </a>
              </div>
              <img src="~@/assets/join-img0.png" alt="">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card-border">
            <div class="j-card">
              <div class="links">
                <a href="https://blog.nutbox.io/@nutbox.mine/nutbox-global-ambassador-program-or-nutbox"
                   target="_blank" class="d-flex justify-content-start">
                  <span class="text-bold btn-link text-white">Join as a community member</span>
                  <i class="arrow-icon"></i>
                </a>
              </div>
              <img src="~@/assets/join-img1.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JoinUsSection'
}
</script>

<style scoped lang="scss">
.title {
  font-size: 3rem;
  margin-bottom: 5rem;
}
.card-border {
  border-radius: 1.5rem;
  background-image: linear-gradient(to right, rgba(#727272, .23), rgba(#FFFFFF, .16));
  background-repeat: no-repeat;
  background-size: 100%;
  border: 2px solid transparent;
  background-origin: border-box;
  box-shadow: 2px 1000px 2px black inset;
  box-sizing: border-box;
}
.j-card {
  background-image: linear-gradient(to right, rgba(#A7A7A7, .15), rgba(#A7A7A7, 0));
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .8rem 1.7rem;
  border-radius: 1.35rem;
  img {
    height: 4rem;
  }
}
</style>
