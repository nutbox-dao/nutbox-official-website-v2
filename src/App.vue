<template>
  <div id="app" >
    <div class="page-container">
      <div class="page-header">
        <div class="container">
          <b-navbar toggleable="lg">
            <b-navbar-brand>
              <img src="~@/assets/logo.png" alt="" class="logo-brand" @click="selectMenu('home', '/')">
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse">
              <template #default>
                <i class="menu-toggle"></i>
              </template>
            </b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <div v-for="item of menuOptions" :key="item.name">
                  <b-nav-item-dropdown variant="text" no-caret v-if="item.multi">
                    <template #button-content>
                      <div class="d-flex align-items-center justify-content-center">
                        <span class="">{{$t(item.name)}}</span>
                        <i class="icon select-icon ml-1"></i>
                      </div>
                    </template>
                    <b-dropdown-item v-for="subItem of item.subOptions" :key="subItem.name"
                                     :href="subItem.url" :target="subItem.target">
                      <div class="flex-between-center" style="line-height: 2rem">
                        <div class="flex-start-center">
                          <img v-if="subItem.name==='economicWhitePaper'" style="width: 1.2rem;" class="mr-2" src="~@/assets/pdf.png" alt="">
                          <img v-if="subItem.name==='technicalWhitePaper'" style="width: 1.2rem;" class="mr-2" src="~@/assets/pdf.png" alt="">
                          <span class="font-bold">{{$t(subItem.name)}}</span>
                        </div>
                        <i class="arrow-forward-icon"></i>
                      </div>
                    </b-dropdown-item>
                  </b-nav-item-dropdown>
                  <b-nav-item v-else href="javascript:void(0)" :class="activeNav === item.id? 'active':''"
                              @click="selectMenu(item.id, item.url, item.target)">{{ $t(item.name) }}
                  </b-nav-item>
                </div>
                <b-nav-item>
                  <button class="launch-app-btn">launch app</button>
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </div>
      <div class="page-content">
        <div class="h-line">
          <div class="container"></div>
        </div>
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
          name: 'products',
          multi: true,
          id: 'products',
          url: '',
          subOptions: [
            { name: 'walnut', url: 'https://walnut.nutbox.io', target: '_blank' },
            { name: 'peanut', url: 'https://peanut.nutbox.io', target: '_blank' },
            { name: 'crowdLoan', url: 'https://polkadot.nutbox.io', target: '_blank' }
          ]
        },
        {
          name: 'doc',
          id: 'doc',
          multi: true,
          url: '',
          subOptions: [
            { name: 'Nutbox Wiki', target: '_blank', url: 'https://nutbox-io.gitbook.io/nutbox/' },
            { name: 'economicWhitePaper', target: '_blank', url: '/economic-en.pdf' },
            { name: 'technicalWhitePaper', target: '_blank', url: '/technical-en.pdf' }
          ]
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
      lang: 'en'
    }
  },
  watch: {
    $route () {
      this.setActiveMenu()
      window.scrollTo(0, 0)
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
    }
  }
}
</script>

<style lang="scss">
@font-face
{
  font-family: GothamRoundedLight;
  src: url('~@/style/GothamRounded-Light.otf');
}
@font-face
{
  font-family: GothamRoundedMedium;
  src: url('~@/style/GothamRounded-Medium.otf');
}
@font-face
{
  font-family: TimesNewRoman;
  src: url('~@/style/TimesNewRoman.ttf');
}
:root {
  --primary-custom: #45C691;
}
#app,
html,
body {
  font-family:GothamRoundedLight, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffff;
  height: 100%;
  background-color: #000;
}
#app {
  width: 100%;
}
.page-container {
  width: 100%;
  overflow-x: hidden;
  margin: auto;
  background-image: url("~@/assets/bg.png");
}
.page-header {
  position: fixed;
  width: 100%;
  height: 60px;
  background-image: url("~@/assets/bg.png");
  //background: #000;
  margin: auto;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.04) ;
  border-bottom-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;
  z-index: 10;
  font-size: 1rem;
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
  }
  .logo-brand {
    height: 50px;
  }
  .navbar {
    padding: 0;
  }
  .navbar-nav .nav-link {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2rem;
  }
  .navbar-light .navbar-nav .show > .nav-link {
    color: white;
  }
  .navbar-light .navbar-nav .nav-link {
    color: white;
    &:hover {
      color: var(--primary-custom);
      .select-icon {
        background-image: url("~@/assets/arrow-down-primary.svg");
      }
    }
    &:focus {
      color: white;
    }
  }
  .navbar-light .navbar-nav .active > .nav-link {
    color: var(--primary-custom);
  }
  .dropdown-menu {
    border-radius: 1.2rem;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    border: none;
    min-width: 15rem;
    margin: .5rem auto 1rem auto;
    padding: .8rem;
    background-color: #181818;
    .dropdown-item {
      padding: .2rem .5rem;
      color: white;
      .arrow-forward-icon {
        background-image: url("~@/assets/arrow-forward.svg");
        width: 16px;
        height: 16px;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
      }
      &:hover {
        color: var(--primary-custom);
        background-color: transparent;
        .arrow-forward-icon {
          background-image: url("~@/assets/arrow-forward-primary.svg");
        }
      }
    }
    .active-icon {
      width: 1.2rem;
    }
  }
  .launch-app-btn {
    background-image: linear-gradient(to right, #6ADDB7, #6ADDB7, #3DB981);
    border: transparent;
    color: white;
    height: 42px;
    font-size: 16px;
    padding: 0 25px;
    font-weight: bold;
  }
}
.page-content {
  margin-top: 60px;
  .h-line .container{
    width: 100%;
    height: 1px;
    background-color: white;
  }
}
@media (max-width: 960px) {
  .page-header {
    .container {
      width: 100%;
      max-width: 100%;
    }
    .navbar-nav {
      padding: 20px;
      background-color: black;
      border-radius: 0 0 20px 20px;
    }
    .navbar-nav .nav-link {
      margin-left: 0;
    }
  }
  .h-line .container{
    max-width: 100%;
  }
}
</style>
