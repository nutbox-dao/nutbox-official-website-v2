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
              <a href="https://discord.gg/nRXYDRGAfq" target="_blank">
                <img src="~@/assets/discord.svg" alt="">
              </a>
            </div>
          </div>
          <div class="col-md-8">
            <div class="menu">
              <div type="button" class="item" id="popover-target-product">Product</div>
              <b-popover custom-class="c-popover"  target="popover-target-product" triggers="hover" placement="top">
                <a href="https://walnut.nutbox.io" target="_blank" class="d-menu-item">
                  <span class="">Walnut</span>
                  <i class="arrow-forward-icon"></i>
                </a>
                <a href="https://walnut.nutbox.app/#/sub-community/home/?id=0xc54C1F0E7A75Fb405038891E316c973D26Bf0125" target="_blank" class="d-menu-item">
                  <span class="">Peanut</span>
                  <i class="arrow-forward-icon"></i>
                </a>
<!--                <a href="https://polkadot.nutbox.io" target="_blank" class="d-menu-item">-->
<!--                  <span class="">Crowdloan</span>-->
<!--                  <i class="arrow-forward-icon"></i>-->
<!--                </a>-->
              </b-popover>
              <div type="button" class="item" id="popover-target-doc">Document</div>
              <b-popover custom-class="c-popover" target="popover-target-doc" triggers="hover" placement="top">
                <a href="https://nutbox-io.gitbook.io/nutbox/" target="_blank" class="d-menu-item">
                  <div class="d-flex align-items-center">
                    <span class="">Nutbox Wiki</span>
                  </div>
                  <i class="arrow-forward-icon"></i>
                </a>
                <a href="https://nutbox-io.gitbook.io/walnut/" target="_blank" class="d-menu-item">
                  <div class="d-flex align-items-center">
                    <span class="">Walnut Wiki</span>
                  </div>
                  <i class="arrow-forward-icon"></i>
                </a>
              </b-popover>
              <router-link to="/faq" class="text-white"><div class="item">FAQ</div></router-link>
              <router-link to="/about" class="text-white"><div class="item">About us</div></router-link>
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
    width: 1.8rem;
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
.d-menu-item {
  padding: .4rem .8rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  img {
    height: 1.2rem;
  }
  span {
    font-family:MontserratRegular, Avenir, Helvetica, Arial, sans-serif;
    white-space: nowrap;
    margin-right: 14px;
    font-size: 16px;
    line-height: 2.3rem;
  }
  .arrow-forward-icon {
    display: block;
    background-image: url("~@/assets/arrow-forward.svg");
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
  &:hover {
    background-color: rgba(white, .05);
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
      color: white;
    }
  }
}
</style>
