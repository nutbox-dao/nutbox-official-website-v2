<template>
  <section id="footer-section">
    <div class="container">
      <div class="bottom-box">
        <div class="row">
          <div class="col-md-4">
            <div class="row-img">
              <a href="https://github.com/nutbox-dao" target="_blank">
                <img src="~@/assets/github.svg" alt="">
              </a>
              <a href="https://twitter.com/NutboxDao" target="_blank">
                <img src="~@/assets/twitter.svg" alt="">
              </a>
              <a href="https://t.me/nutbox_defi" target="_blank">
                <img src="~@/assets/telegram.svg" alt="">
              </a>
              <a href="https://discord.gg/zPkMuGY" target="_blank">
                <img src="~@/assets/discord.svg" alt="">
              </a>
            </div>
          </div>
          <div class="col-md-8">
            <div class="menu">
              <div class="item">Product</div>
              <div class="item">Document</div>
              <div class="item">FAQ</div>
              <div class="item">About us</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="copy-right text-grey-dark">Copyright © 2021 Nutbox</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
#footer-section {
  margin: 0;
  color: white;
  padding: 2rem 0 .5rem 0;
}
.bottom-box {
  border-top: 1px solid rgba(white, .2);
  padding-top: 2rem;
}
.row-img {
  display: flex;
  img {
    height: 1.7rem;
    margin-left: 1rem;
  }
}
.menu {
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  .item {
    margin-right: 3.5rem;
  }
}
.copy-right {
  font-size: .6rem;
  margin-top: 4rem;
}
@media (max-width: 767px) {
  .row-img {
    justify-content: center;
    margin-bottom: 2rem;
    img {
      margin: 0 1rem;
    }
  }
  .menu {
    justify-content: center;
    .item {
      margin: 0 1rem;
    }
  }
}
</style>
