<template>
  <section>
    <div class="font40 font-bold">{{$t('roadmapSection.title')}}</div>
    <div class="font20 mb-4 text-grey">{{$t('roadmapSection.p1')}}</div>
    <div class="line"></div>
    <div class="map-container">
      <div class="map-container-box">
        <div class="card-box" v-for="item of 6" :key="item">
          <div class="info text-left">
            <div class="font28 font-bold">{{$t(`roadmapSection.t${item}`)}}</div>
            <div class="h-line"></div>
            <div class="font16 font-bold">{{$t(`roadmapSection.n${item}`)}}</div>
            <div class="font14 text-grey mt-2" v-html="$t(`roadmapSection.d${item}`)"></div>
          </div>
          <div class="wave-img"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RoadMapSection'
}
</script>

<style scoped lang="scss">
.map-container {
  position: relative;
  overflow-y: hidden;
  overflow-x: scroll;
  width: 100%;
  height: 32rem;
  &::-webkit-scrollbar {
    display: none;
  }
  .map-container-box {
    position: absolute;
    display: flex;
    padding: .5rem;
    animation: move-scroll 22s linear infinite;
    &:hover {
      animation-play-state: paused;
    }
  }
}
.card-box {
  min-width: 16rem;
  padding: 1rem .5rem;
  box-sizing: border-box;
  border-left: 1px solid #E3E5E8;
  position: relative;
  background-repeat: no-repeat;
  .dot {
    position: absolute;
    width: .4rem;
    height: .4rem;
    background-color: #F6F7F9;
    border-radius: .5rem;
    left: -.2rem;
    bottom: 0;
  }
  .h-line {
    width: 2rem;
    height: .2rem;
    background-color: $primary-color;
    border-radius: .2rem;
    margin-top: .2rem;
    margin-bottom: .8rem;
  }
  &:hover {
    border-color: $primary-color;
    .dot {
      background-color: $primary-color;
      &::before {
        content: "";
        display: block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        border: 1px solid $primary-color;
        position: absolute;
        top: -.3rem;
        left: -.3rem;
      }
      &::after {
        content: "";
        display: block;
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
        border: 1px solid $primary-color;
        position: relative;
        top: -.2rem;
        left: -.2rem;
      }
    }
  }
}
.wave-img {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  width: 16rem;
  height: 6.2rem;
  position: absolute;
  left: -0rem;
  bottom: 0;
}
.card-box:nth-child(odd) {
  height: 30rem;
  .wave-img {
    background-image: url("~@/assets/wave-left.png");
    bottom: 0;
  }
}
.card-box:nth-child(even) {
  margin-top: 6rem;
  margin-bottom: 6rem;
  .wave-img {
    background-image: url("~@/assets/wave-right.png");
    bottom: -6rem;
  }
}
//.card-box:last-child {
//  background-image: url("~@/assets/wave-left.svg");
//  background-repeat: no-repeat;
//  background-size: 100%;
//  background-position: left bottom;
//}
@keyframes move-scroll {
  0%
  {
    opacity:0;
  }
  1%
  {
    opacity:1;
    transform:translateX(10%);
  }
  90%
  {
    opacity:1;
    transform:translateX(-70%);
  }
  98%
  {
    opacity: 0;
    transform:translateX(-90%);
  }
  100%
  {
    opacity:0;
    left: 0;
  }
}

</style>
