<template>
  <section id="road-map-section">
    <div class="container">
      <div class="title mb-5 text-bold">Road Map</div>
      <div class="map-container">
        <div class="map-container-box">
          <div class="card-box">
            <div class="info text-left">
              <div class="font24 text-primary-c mb-4 text-medium">Oct 2020</div>
              <div class="font16 line-height24 text-grey-dark mt-2">
                Create and launch Peanut DAO on Tron network
              </div>
            </div>
          </div>
          <div class="card-box">
            <div class="info text-left">
              <div class="font24 text-primary-c mb-4">Nov 2021</div>
              <div class="font16 line-height24 text-grey-dark mt-2">
                Launch Nutbox ver0.1 on BSC network
              </div>
            </div>
          </div>
          <div class="card-box">
            <div class="info text-left">
              <div class="font24 text-primary-c mb-4 text-medium">Q1 2022</div>
              <div class="font16 line-height24 text-grey-dark mt-2">
                Launch Nutbox Walnut mainnet on BSC, support Steem/Hive and Polkadot
              </div>
            </div>
          </div>
          <div class="card-box">
            <div class="info text-left">
              <div class="font24 text-primary-c mb-4 text-medium">Q2 2022</div>
              <div class="font16 line-height24 text-grey-dark mt-2">
                Launch Toolkits Voting on Walnut, ISO supports Cosmos, Osmosis and Astar networks
              </div>
            </div>
          </div>
          <div class="card-box">
            <div class="info text-left">
              <div class="font24 text-primary-c mb-4 text-medium">Q3 2022</div>
              <div class="font16 line-height24 text-grey-dark mt-2">
                Walnut ISO supports more networks, such as Ethereum, Solana, etc.
              </div>
            </div>
          </div>
          <div class="card-box">
            <div class="info text-left">
              <div class="font24 text-primary-c mb-4 text-medium">Q4 2022</div>
              <div class="font16 line-height24 text-grey-dark mt-2">
                Launch Chestnut
              </div>
            </div>
          </div>
          <div class="card-box">
            <div class="info text-left">
              <div class="font24 text-primary-c mb-4 text-medium">Q1-Q2 2023</div>
              <div class="font16 line-height24 text-grey-dark mt-2">
                Toolkits System and Social Module (Donut)
              </div>
            </div>
          </div>
          <div class="card-box">
            <div class="info text-left">
              <div class="font24 text-primary-c mb-4 text-medium">Q3-Q4 2023</div>
              <div class="font16 line-height24 text-grey-dark mt-2">
                Nutbox chain on Polkadot Ecosystem
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
