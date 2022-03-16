<template>
  <section id="road-map-section">
    <div class="font36 line-height50 mb-5 text-tnr">{{$t('roadmapSection.title')}}</div>
    <div class="map-container">
      <div class="map-container-box">
        <div class="card-box" v-for="item of 6" :key="item">
          <div class="info text-left">
            <div class="font24 text-primary-c mb-4">{{$t(`roadmapSection.t${item}`)}}</div>
            <div class="font16 line-height24 text-grey-dark">{{$t(`roadmapSection.n${item}`)}}</div>
            <div class="font16 line-height24 text-grey-dark mt-2" v-html="$t(`roadmapSection.d${item}`)"></div>
          </div>
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
#road-map-section {
  padding: 0;
  margin-top: 10rem;
  margin-bottom: 6rem;
}
.map-container {
  margin-top: 4rem;
  position: relative;
  overflow-y: hidden;
  overflow-x: scroll;
  width: 100%;
  height: fit-content;
  &::-webkit-scrollbar {
    display: none;
  }
  .map-container-box {
    //position: absolute;
    display: flex;
    padding: .5rem;
    animation: move-scroll 22s linear infinite;
    &:hover {
      animation-play-state: paused;
    }
  }
}
.card-box {
  min-width: 15rem;
  padding: 1rem .5rem;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat;
  border-bottom: 6px solid #717376;
  &::before {
    content: '';
    position: absolute;
    left: 1px;
    bottom: 0;
    height: 12px;
    width: 1px;
    background-color: white;
  }
  .dot {
    position: absolute;
    width: .4rem;
    height: .4rem;
    background-color: #F6F7F9;
    border-radius: .5rem;
    left: -.2rem;
    bottom: 0;
  }
}
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
