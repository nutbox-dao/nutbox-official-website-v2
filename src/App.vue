<template>
  <div id="app" >
    <div class="page-container" @scroll="pageScroll" ref="pageContainerRef">
      <div class="page-header" :class="headerClass">
        <div class="container">
          <b-navbar toggleable="lg">
            <b-navbar-brand>
              <img src="~@/assets/logo.png" alt="" class="logo-brand" style="cursor: pointer" @click="selectMenu('home', '/')">
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse">
              <template #default>
                <i class="menu-toggle"></i>
              </template>
            </b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <template v-if="windowWith<992">
                  <b-nav-item-dropdown variant="text" no-caret>
                    <template #button-content>
                      <div class="d-flex align-items-center justify-content-center">Product</div>
                    </template>
                    <b-dropdown-item href="https://app.nutbox.io" target="_blank" class="">
                      <div class="flex-between-center line-height46 font16">Nutbox</div>
                    </b-dropdown-item>
                    <b-dropdown-item href="https://app.nutbox.io/#/sub-community/home/?id=0xc54C1F0E7A75Fb405038891E316c973D26Bf0125" target="_blank" class="">
                      <div class="flex-between-center line-height46 font16">Peanut</div>
                    </b-dropdown-item>
                  </b-nav-item-dropdown>
                  <b-nav-item-dropdown variant="text" no-caret>
                    <template #button-content>
                      <div class="d-flex align-items-center justify-content-center">Document</div>
                    </template>
                    <b-dropdown-item href="https://nutbox-io.gitbook.io/nutbox/" target="_blank" class="">
                      <div class="flex-between-center line-height46 font16">Nutbox Wiki</div>
                    </b-dropdown-item>
                    <!-- <b-dropdown-item href="https://nutbox-io.gitbook.io/nutbox/" target="_blank" class="">
                      <div class="flex-between-center line-height46 font16">{{ $t('whitePaper') }}</div>
                    </b-dropdown-item> -->
                  </b-nav-item-dropdown>
                </template>
                <template v-else>
                  <b-nav-item>
                    <button class="item" id="nav-popover-product">{{$t('products')}}</button>
                  </b-nav-item>
                  <b-popover custom-class="c-popover" target="nav-popover-product" triggers="hover focus" placement="bottom">
                    <a href="https://app.nutbox.io" target="_blank" class="d-menu-item">
                      <span class="">Nutbox</span>
                    </a>
                    <a href="https://app.nutbox.io/#/sub-community/home/?id=0xc54C1F0E7A75Fb405038891E316c973D26Bf0125" target="_blank" class="d-menu-item">
                      <span class="">Peanut</span>
                    </a>
                  </b-popover>
                  <b-nav-item>
                    <button class="item" id="nav-popover-doc">{{$t('doc')}}</button>
                  </b-nav-item>
                  <b-popover custom-class="c-popover" target="nav-popover-doc" triggers="hover focus" placement="top">
                    <a href="https://nutbox-io.gitbook.io/nutbox/" target="_blank" class="d-menu-item">
                      <div class="d-flex align-items-center">
                        <span class="">Nutbox Wiki</span>
                      </div>
                    </a>
                    <!-- <a href="https://nutbox-io.gitbook.io/walnut/" target="_blank" class="d-menu-item">
                      <div class="d-flex align-items-center">
                        <span class="">{{ $t('whitePaper') }}</span>
                      </div>
                    </a> -->
                  </b-popover>
                </template>
                <b-nav-item v-for="item of menuOptions" :key="item.id"
                            :class="activeNav === item.id? 'active':''"
                            @click="selectMenu(item.id, item.url, item.target)">{{$t(item.name)}}
                </b-nav-item>
                <!--语言切换-->
               <b-nav-item-dropdown variant="text" no-caret>
                 <template #button-content>
                   <div class="d-flex align-items-center justify-content-center">{{$t('language')}}</div>
                 </template>
                 <b-dropdown-item @click="setLang('en')">
                   <div class="flex-between-center line-height46 font16">{{$t('en')}}</div>
                 </b-dropdown-item>
                 <b-dropdown-item @click="setLang('jp')">
                   <div class="flex-between-center line-height46 font16">{{$t('jp')}}</div>
                 </b-dropdown-item>
                 <b-dropdown-item @click="setLang('es')">
                   <div class="flex-between-center line-height46 font16">{{$t('es')}}</div>
                 </b-dropdown-item>
                 <b-dropdown-item @click="setLang('zh')">
                   <div class="flex-between-center line-height46 font16">{{$t('zh')}}</div>
                 </b-dropdown-item>
               </b-nav-item-dropdown>
                <b-nav-item>
                  <button class="launch-app-btn" @click="gotoApp">{{$t('launchApp')}}</button>
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </div>
      <div class="page-content">
        <router-view></router-view>
      </div>
      <div class="page-footer">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: { Footer },
  data () {
    return {
      menuOptions: [
        {
          name: 'faq',
          multi: false,
          url: '/faq',
          id: 'faq'
        },
        {
          name: 'aboutUs',
          multi: false,
          url: '/about',
          id: 'about'
        }
      ],
      activeNav: 'home',
      langOptions: ['en', 'zh', 'es'],
      lang: 'en',
      headerClass: '',
      windowWith: document.body.clientWidth
    }
  },
  watch: {
    $route () {
      this.setActiveMenu()
      this.$refs.pageContainerRef.scrollTop = 0
    }
  },
  mounted () {
    this.setActiveMenu()
    this.lang = localStorage.getItem('lang') || 'en'
    this.$i18n.locale = this.lang
  },
  methods: {
    setActiveMenu () {
      for (let index = 0; index < this.menuOptions.length; index++) {
        if (this.menuOptions[index].url === this.$route.path) {
          this.activeNav = this.menuOptions[index].id
          break
        }
      }
    },
    selectMenu (id, url, target = '') {
      if (target === 'blank') {
        window.open(url, '_blank')
      } else {
        this.activeNav = id
        this.$router.push(url)
      }
    },
    setLang (lang) {
      this.lang = lang
      this.$i18n.locale = lang
      localStorage.setItem('lang', lang)
    },
    pageScroll (e) {
      if (e.target.scrollTop > 100) {
        this.headerClass = 'page-header-bg'
      } else {
        this.headerClass = ''
      }
    },
    gotoApp () {
      window.open('https://walnut.nutbox.io', '_blank')
    }
  }
}
</script>

<style lang="scss">
@font-face
{
  font-family: MontserratRegular;
  src: url('~@/style/Montserrat-Regular.ttf');
}
@font-face
{
  font-family: MontserratMedium;
  src: url('~@/style/Montserrat-Medium.ttf');
}
@font-face
{
  font-family: MontserratBlod;
  src: url('~@/style/Montserrat-Bold.ttf');
}
:root {
  --primary-custom: #F8B62B;
  --gradient-primary-color1: #F8B62B;
  --gradient-primary-color2: #F8752B;
}
#app,
html,
body {
  font-family:MontserratRegular, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffff;
  height: 100%;
  background-color: #000;
}
#app {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.page-container {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  margin: auto;
  position: relative;
}
.page-header {
  position: sticky;
  top: 0;
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.04) ;
  border-bottom-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;
  z-index: 10;
  font-size: 1rem;
  .h-line .container{
    width: 100%;
    height: 1px;
    background-color: rgba(white, .3);
  }
  &-bg {
    background: rgba(black, .9);
    .h-line .container {
      background-color: transparent;
    }
  }
  .menu-toggle {
    display: block;
    width: 30px;
    height: 30px;
    background-image: url("~@/assets/menu-icon.svg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .navbar-brand {
    display: flex;
    align-items: center;
    min-height: 58px;
    img {
      margin-bottom: 1rem;
    }
  }
  .logo-brand {
    height: 2.3rem;
    min-height: 30px;
  }
  .navbar {
    padding: 0;
  }
  .navbar-nav .nav-link {
    height: 72px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2rem;
  }
  .navbar-light .navbar-nav .show > .nav-link {
    color: #A7A7A7;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #A7A7A7;
    font-size: 16px;
    width: fit-content;

    &:hover {
      color: white;
    }
    &:focus {
      color: white;
    }
  }
  .navbar-light .navbar-nav .active > .nav-link {
    color: white;
  }
  .dropdown-menu {
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    border: 0.5px solid #545454;
    min-width: 10rem;
    margin: .5rem auto 1rem auto;
    padding: 0;
    background-color: #111111;
    .dropdown-item {
      height: 60px;
      padding: 0;
      color: #A7A7A7;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background-color: rgba(white, .1);
      }
    }
  }
  .item {
    background-color: transparent;
    cursor: pointer;
    border: none;
    color: #A7A7A7;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
  }
  .launch-app-btn {
    background-image: linear-gradient(to right, var(--gradient-primary-color1), var(--gradient-primary-color2));
    border: transparent;
    color: white;
    height: 42px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    min-width: 140px;
    white-space: nowrap;
    font-family:MontserratBlod, Avenir, Helvetica, Arial, sans-serif;
    &:hover {
      color: white!important;
      background-image: linear-gradient(to right, var(--gradient-primary-color1), var(--gradient-primary-color1));
    }
  }
}
.page-content {
  margin-top: -120px;
  min-height: 100vh;
  //padding-top: 120px;
}
@media (min-width: 1920px) {
  .container {
    max-width: 1400px!important;
  }
}
@media (max-width: 991px) {
  .page-header {
    position: fixed;
    height: fit-content;
    .h-line .container{
      background: transparent;
    }
    .container {
      width: 100%;
      max-width: 100%;
    }
    .navbar-light .navbar-brand {
      min-height: 80px;
    }
    .navbar-nav {
      padding: 20px;
      background-color: black;
      border-radius: 20px;
      box-shadow: 0 2px 10px 2px rgba(white, 0.1);
      max-height: 480px;
      overflow: auto;
    }
    .navbar-nav .nav-link {
      margin-left: 0;
    }
  }
}
</style>
