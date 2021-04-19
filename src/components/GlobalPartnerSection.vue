<template>
  <section id="global-partner-section">
    <div class="content">
      <div class="font40 font-bold title">{{$t('globalSection.title')}}</div>
      <div v-for="(item, index) of partnerList" :key="index" class="avatar-box"
           :class="`avatar-box${index+1}`">
        <img class="primary-img" :src="item.avatar" alt="">
        <div class="c-badge flex-start-center">
          <img :src="item.flag" alt="">
          <div>{{item.name}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GlobalPartnerSection',
  data () {
    return {
      partnerList: [
        { name: 'Sampraise', flag: require('../assets/ve.svg'), avatar: require('../assets/sampraise.png') },
        { name: 'Aku', flag: require('../assets/us.svg'), avatar: require('../assets/aku.png') },
        { name: 'Sook Jin Goh', flag: require('../assets/my.svg'), avatar: require('../assets/sookjin.png') },
        { name: 'Happy', flag: require('../assets/ks.svg'), avatar: require('../assets/empty-avatar.png') },
        { name: 'Allen Hu', flag: require('../assets/ch.svg'), avatar: require('../assets/allen.png') },
        { name: 'Alejandro Aristeguieta', flag: require('../assets/ve.svg'), avatar: require('../assets/alejandro.png') }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
#global-partner-section {
  background-image: url("~@/assets/global-bg.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  .content {
    position: relative;
    height: 20rem;
    margin-bottom: 8rem;
    margin-top: 4rem;
  }
  .title {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }
}
.avatar-box {
  position: absolute;
  width: 5rem;
  height: 5rem;
  text-align: left;
  .primary-img {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    border-radius: 5rem;
    background-color: #E3E5E8;
    border: .2px solid #E3E5E8;
    box-shadow: 0 .4rem .8rem .4rem rgba(36, 38, 41, 0.04);
  }
  .c-badge {
    position: absolute;
    left: 3.5rem;
    top: -.5rem;
    height: 2rem;
    padding: .2rem;
    white-space: nowrap;
    background: white;
    border-radius: 3rem;
    box-shadow: 0 4px 4px rgba(36, 38, 41, 0.04);
    img {
      height: 100%;
      margin-right: .3rem;
    }
  }
}
.avatar-box1 {left: 65%;top: 8%;}
.avatar-box2 {left: 78%;top: 48%;}
.avatar-box3 {left: 60%;top: 95%;}
.avatar-box4 {left: 25%;top: 85%;}
.avatar-box5 {left: 10%;top: 35%;}
.avatar-box6 {left: 25%;top: 0;}
@media (max-width: 600px) {
  .content {
    margin-bottom: 0!important;
    margin-top: 4rem!important;
  }
  .title {
    top: 0!important;
  }
  .avatar-box {
    width: 3rem!important;
    height: 3rem!important;
    margin-top: 1.5rem;
    .c-badge {
      left: 2.2rem;
      height: 1.6rem;
      font-size: .6rem;
    }
  }
  .avatar-box1 {left: 55%;top: 18%;}
  .avatar-box2 {left: 70%;top: 38%;}
  .avatar-box3 {left: 60%;top: 60%;}
  .avatar-box4 {left: 20%;top: 55%;}
  .avatar-box5 {left: 2%;top: 30%;}
  .avatar-box6 {left: 20%;top: 7%;}
}
</style>
