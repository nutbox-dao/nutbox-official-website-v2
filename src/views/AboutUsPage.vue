<template>
  <div class="about-page">
    <MissionSection/>
    <GrantSection/>
    <GlobalPartnerSection/>
<!--    <JoinUsSection/>-->
  </div>
</template>

<script>
import MissionSection from '@/components/MissionSection'
import GrantSection from '@/components/GrantSection'
import GlobalPartnerSection from '@/components/GlobalPartnerSection'
// import JoinUsSection from '@/components/JoinUsSection'

export default {
  name: 'AboutUsPage',
  components: {
    MissionSection,
    GrantSection,
    GlobalPartnerSection
    // JoinUsSection
  }
}
</script>

<style scoped lang="scss">
.about-page {
  background-image: url("~@/assets/about-bg.png");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
}
</style>
