<template>
  <div id="app" >
    <div class="page-container">
      <div class="page-header">
        <div class="container">
          <b-navbar toggleable="lg">
            <b-navbar-brand>
              <img src="~@/assets/logo.png" alt="" class="logo-brand" @click="selectMenu('home', '/')">
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav v-for="item of menuOptions" :key="item.name">
                <b-nav-item-dropdown variant="text" no-caret v-if="item.multi">
                  <template #button-content>
                    <div class="d-flex align-items-center justify-content-center">
                      <span class="font-bold">{{$t(item.name)}}</span>
                      <i class="icon select-icon ml-1"></i>
                    </div>
                  </template>
                  <b-dropdown-item v-for="subItem of item.subOptions" :key="subItem.name"
                                   :href="subItem.url" :target="subItem.target">
                    <div class="flex-between-center" style="line-height: 2rem">
                      <div class="flex-start-center">
                        <img v-if="item.name==='doc'" style="width: 1.2rem;" class="mr-2" src="~@/assets/pdf.png" alt="">
                        <span class="font-bold">{{$t(subItem.name)}}</span>
                      </div>
                      <img style="width: .8rem" src="~@/assets/arrow-forward.svg" alt="">
                    </div>
                  </b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item v-else href="javascript:void(0)" :class="activeNav === item.id? 'active':''"
                            @click="selectMenu(item.id, item.url, item.target)">{{ $t(item.name) }}
                </b-nav-item>
              </b-navbar-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown variant="text" right no-caret>
                  <template #button-content>
                    <div class="d-flex align-items-center justify-content-center">
                      <span class="font-bold">{{$t(lang)}}</span>
                      <i class="icon select-icon ml-1"></i>
                    </div>
                  </template>
                  <b-dropdown-item v-for="(item) of langOptions" :key="item"
                                   @click="setLang(item)">
                    <div class="flex-between-center">
                      <span>{{$t(item)}}</span>
                      <img v-if="lang===item" class="active-icon" src="~@/assets/selected.png" alt="">
                    </div>
                  </b-dropdown-item>
                </b-nav-item-dropdown>
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
          name: 'products',
          multi: true,
          id: 'products',
          url: '',
          subOptions: [
            { name: 'peanut', url: 'https://peanut.nutbox.io', target: '_blank' },
            { name: 'crowdLoan', url: '#', target: '_self' }
          ]
        },
        {
          name: 'doc',
          id: 'doc',
          multi: true,
          url: '',
          subOptions: [
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
#app,
html,
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #242629;
  height: 100%;
}
#app {
  width: 100%;
}
.page-container {
  width: 100%;
  overflow-x: hidden;
  //max-width: 1800px;
  margin: auto;
}
.page-header {
  position: fixed;
  width: 100%;
  background: white;
  //max-width: 1800px;
  margin: auto;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.04) ;
  border-bottom-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;
  z-index: 10;
  font-size: 1rem;
  .navbar-brand {
    display: flex;
    align-items: center;
    min-height: 58px;
  }
  .logo-brand {
    height: 2.8rem;
  }
  .navbar {
    padding: 0;
  }
  .navbar-nav .nav-link {
    height: 3.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
    opacity: .5;
  }
  .navbar-nav .active > .nav-link {
    color: $primary-color;
    opacity: 1;
    //border-bottom: 4px solid $primary-color;
    background-image: linear-gradient(to right, $primary-color, $primary-color);
    background-repeat: no-repeat;
    background-size: 2rem 4px;
    background-position: center bottom;
  }
  .dropdown-menu {
    border-radius: 1.2rem;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    border: none;
    min-width: 15rem;
    margin: .5rem auto 1rem auto;
    padding: .8rem;
    .dropdown-item {
      padding: .2rem .5rem;
    }
    .active-icon {
      width: 1.2rem;
    }
  }
}
.page-content {
  //padding-top: 3.6rem;
}

</style>
