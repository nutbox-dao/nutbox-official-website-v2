<template>
  <section id="road-map-section">
    <div class="container">
      <div class="title mb-5 text-bold">{{$t('roadmapSection.title')}}</div>
      <div class="map-container">
        <div class="map-container-box">
          <div class="card-box">
            <div class="info text-left">
              <div class="font24 text-primary-c mb-4 text-medium">{{$t('roadmapSection.t1')}}</div>
              <div class="font16 line-height24 text-grey-dark mt-2">
                {{$t('roadmapSection.p1')}}
              </div>
            </div>
          </div>
          <div class="card-box">
            <div class="info text-left">
              <div class="font24 text-primary-c mb-4 text-medium">{{$t('roadmapSection.t2')}}</div>
              <div class="font16 line-height24 text-grey-dark mt-2">
                {{$t('roadmapSection.p2')}}
              </div>
            </div>
          </div>
          <div class="card-box">
            <div class="info text-left">
              <div class="font24 text-primary-c mb-4 text-medium">{{$t('roadmapSection.t3')}}</div>
              <div class="font16 line-height24 text-grey-dark mt-2">
                {{$t('roadmapSection.p3')}}
              </div>
            </div>
          </div>
          <div class="card-box">
            <div class="info text-left">
              <div class="font24 text-primary-c mb-4 text-medium">{{$t('roadmapSection.t4')}}</div>
              <div class="font16 line-height24 text-grey-dark mt-2">
                {{$t('roadmapSection.p4')}}
              </div>
            </div>
          </div>
          <div class="card-box">
            <div class="info text-left">
              <div class="font24 text-primary-c mb-4 text-medium">{{$t('roadmapSection.t5')}}</div>
              <div class="font16 line-height24 text-grey-dark mt-2">
                {{$t('roadmapSection.p5')}}
              </div>
            </div>
          </div>
          <div class="card-box">
            <div class="info text-left">
              <div class="font24 text-primary-c mb-4 text-medium">{{$t('roadmapSection.t6')}}</div>
              <div class="font16 line-height24 text-grey-dark mt-2">
                {{$t('roadmapSection.p6')}}
              </div>
            </div>
          </div>
          <div class="card-box">
            <div class="info text-left">
              <div class="font24 text-primary-c mb-4 text-medium">{{$t('roadmapSection.t7')}}</div>
              <div class="font16 line-height24 text-grey-dark mt-2">
                {{$t('roadmapSection.p7')}}
              </div>
            </div>
          </div>
          <div class="card-box">
            <div class="info text-left">
              <div class="font24 text-primary-c mb-4 text-medium">{{$t('roadmapSection.t8')}}</div>
              <div class="font16 line-height24 text-grey-dark mt-2">
                {{$t('roadmapSection.p8')}}
              </div>
            </div>
          </div>
        </div>
        <div class="gradient-box gradient-box-left"></div>
        <div class="gradient-box gradient-box-right"></div>
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
  padding-top: 8rem;
  padding-bottom: 8rem;
  .title {
    font-size: 3rem;
  }
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
    display: flex;
    padding: .5rem;
    animation: move-scroll 22s linear infinite;
    &:hover {
      animation-play-state: paused;
    }
  }
  .gradient-box {
    position: absolute;
    top: 0;
    height: 100%;
    width: 10%;
    &-left {
      left: 0;
      background-image: linear-gradient(to right, rgba(black, 1), rgba(black, 0));
    }
    &-right {
      right: 0;
      background-image: linear-gradient(to left, rgba(black, 1), rgba(black, 0));
    }
  }
}
.card-box {
  min-width: 15rem;
  padding: 1rem .5rem;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat;
  border-bottom: 6px solid rgba(#717376, .3);
  &::before {
    content: '';
    position: absolute;
    left: 1px;
    bottom: 0;
    height: 12px;
    width: 1px;
    background-color: white;
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
    transform:translateX(20%);
  }
  90%
  {
    opacity:1;
    transform:translateX(-85%);
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
