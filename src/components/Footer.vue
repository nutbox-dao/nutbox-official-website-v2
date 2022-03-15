<template>
  <section id="footer-section">
    <div class="container">
<!--      <div class="row top-box">-->
<!--        <div class="col-6 text-left">-->
<!--          <img class="logo" src="../assets/white-logo.svg" alt="">-->
<!--        </div>-->
<!--        <div class="col-6">-->
<!--          <div class="contact-us">-->
<!--            <div class="font-bold font20">{{$t('footerSection.contactUs')}}</div>-->
<!--            <div>contact@nutbox.io</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="bottom-box">
        <div class="row-img">
          <a href="https://github.com/nutbox-dao" target="_blank">
            <img src="~@/assets/github.png" alt="">
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
        <div class="copy-right">Copyright © 2021 Nutbox</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      moreLinkList: [
        { name: 'Home', url: '/' },
        { name: 'kPool', url: '/' },
        { name: 'faq', url: '/faq' },
        { name: 'token', url: '/token' }
      ]
    }
  },
  methods: {
    backTop () {
      document.querySelector('#app').scrollTo({
        top: 0, behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped lang="scss">
#footer-section {
  margin: 0;
  color: white;
  padding: 2rem 0 1.5rem 0;
  .top-box {
    //border-bottom: 1px solid rgba(255,255,255,.1);
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .logo {
    height: 3rem;
  }
  .contact-us {
    text-align: right;
  }
  .bottom-box {
    text-align: right;
    position: relative;
  }
  .row-img img {
    width: 2rem;
    margin-left: 1rem;
  }
  .copy-right {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: .6rem;
  }
}

@media (max-width: 760px) {
  .bottom-box {
    text-align: center!important;
  }
  .copy-right {
    position: relative!important;
    padding-top: 1rem;
    top: auto!important;
    transform: none!important;
  }
}
</style>
