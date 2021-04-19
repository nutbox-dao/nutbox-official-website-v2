<template>
  <section id="team-section">
    <div class="font40 mb-4 font-bold">{{$t('teamSection.title')}}</div>
<!--    <div class="font20 mb-4 text-grey">{{$t('teamSection.p1')}}</div>-->
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="m-card">
          <div class="base-info flex-start-center">
            <div class="team-img team-img1"></div>
            <div class="info">
              <div>{{$t('teamSection.member1.name')}}</div>
              <div class="text-grey">{{$t('teamSection.member1.title')}}</div>
            </div>
          </div>
          <ul>
            <li>{{$t('teamSection.member1.p1')}}</li>
            <li>{{$t('teamSection.member1.p2')}}</li>
            <li>{{$t('teamSection.member1.p3')}}</li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="m-card">
          <div class="base-info flex-start-center">
            <div class="team-img team-img2"></div>
            <div class="info">
              <div>{{$t('teamSection.member2.name')}}</div>
              <div class="text-grey">{{$t('teamSection.member2.title')}}</div>
            </div>
          </div>
          <ul>
            <li>{{$t('teamSection.member2.p1')}}</li>
            <li>{{$t('teamSection.member2.p2')}}</li>
            <li>{{$t('teamSection.member2.p3')}}</li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="m-card">
          <div class="base-info flex-start-center">
            <div class="team-img team-img3"></div>
            <div class="info">
              <div>{{$t('teamSection.member3.name')}}</div>
              <div class="text-grey">{{$t('teamSection.member3.title')}}</div>
            </div>
          </div>
          <ul>
            <li>{{$t('teamSection.member3.p1')}}</li>
            <li>{{$t('teamSection.member3.p2')}}</li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="m-card">
          <div class="base-info flex-start-center">
            <div class="team-img team-img4"></div>
            <div class="info">
              <div>{{$t('teamSection.member4.name')}}</div>
              <div class="text-grey">{{$t('teamSection.member4.title')}}</div>
            </div>
          </div>
          <ul>
            <li>{{$t('teamSection.member4.p1')}}</li>
            <li>{{$t('teamSection.member4.p2')}}</li>
            <li>{{$t('teamSection.member4.p3')}}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OurTeamSection'
}
</script>

<style scoped lang="scss">
.m-card {
  padding: 1.5rem 3rem;
  height: 100%;
  border-radius: 1.2rem;
  border: none;
  box-shadow: 1rem 1.4rem 1.8rem .6rem rgba(36, 38, 41, 0.04);
}
ul {
  padding-left: 10px;
  text-align: left;
  color: #717376;
  font-size: .8rem;
  font-weight: 500;
  margin: 0;
  li {
    padding-bottom: .2rem;
  }
}
.base-info {
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
}
.team-img {
  width: 5rem;
  height: 5rem;
  border-radius: 5rem;
  background-repeat: no-repeat;
  margin-right: 1rem;
  margin-bottom: 1rem;
  &.team-img1 {
    background-image: url("~@/assets/guozi.jpg");
    background-size: 150% 100%;
    background-position: center;
  }
  &.team-img2 {
    background-image: url("~@/assets/duanjiang.jpg");
    background-size: 100%;
    background-position: center 40%;
  }
  &.team-img3 {
    background-image: url("~@/assets/wenfeng.jpg");
    background-size: 150%;
    background-position: 25% 30%;
  }
  &.team-img4 {
    background-image: url("~@/assets/haiou.jpg");
    background-size: 300%;
    background-position: 40% 25%;
  }
}
</style>
