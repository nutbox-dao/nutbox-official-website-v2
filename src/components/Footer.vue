<template>
  <section id="footer-section">
    <div class="container">
      <div class="bottom-box">
        <div class="row">
          <div class="col-md-4 d-flex align-items-center">
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
<!--              <div class="text-center my-3">-->
<!--                <button v-b-popover.hover.top="'I am popover directive content!'" title="Popover Title">-->
<!--                  Hover Me-->
<!--                </button>-->

<!--                <b-button id="popover-target-1">-->
<!--                  Hover Me-->
<!--                </b-button>-->
<!--                <b-popover target="popover-target-1" triggers="hover" placement="top">-->
<!--                  <template #title>Popover Title</template>-->
<!--                  I am popover <b>component</b> content!-->
<!--                </b-popover>-->
<!--              </div>-->
              <button class="item" id="popover-target-product">{{$t('products')}}</button>
              <b-popover custom-class="c-popover"  target="popover-target-product" triggers="hover focus" placement="top">
                <a href="https://app.nutbox.io" target="_blank" class="d-menu-item">
                  <span class="">Nutbox</span>
                </a>
                <a href="https://app.nutbox.io/#/sub-community/home/?id=0xc54C1F0E7A75Fb405038891E316c973D26Bf0125" target="_blank" class="d-menu-item">
                  <span class="">Peanut</span>
                </a>
              </b-popover>
              <button class="item" id="popover-target-doc">{{$t('doc')}}</button>
              <b-popover custom-class="c-popover" target="popover-target-doc" triggers="hover focus" placement="top">
                <a href="https://www.notion.so/nutboxwalnut/Nutbox-WiKi-f771539074914594b162975739bd7eb7" target="_blank" class="d-menu-item">
                  <div class="d-flex align-items-center">
                    <span class="">Nutbox Wiki</span>
                  </div>
                </a>
                <a href="https://nutbox-io.gitbook.io/walnut/" target="_blank" class="d-menu-item">
                  <div class="d-flex align-items-center">
                    <span class="">{{ $t('whitePaper') }}</span>
                  </div>
                </a>
              </b-popover>
              <router-link to="/faq" class="text-white"><div class="item">{{$t('faq')}}</div></router-link>
              <router-link to="/about" class="text-white"><div class="item">{{$t('aboutUs')}}</div></router-link>
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
  width: 100%;
  display: flex;
  align-items: center;
  img {
    width: 1.8rem;
    margin-left: 1rem;
  }
}
.menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  .item {
    margin-right: 3.5rem;
    background-color: transparent;
    cursor: pointer;
    border: none;
    color: white;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
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
