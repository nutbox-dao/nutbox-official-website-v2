<template>
  <div class="about-page">
    <MissionSection/>
    <div class="container">
      <DaoSection/>
      <OurTeamSection/>
      <GlobalPartnerSection/>
    </div>
    <JoinUsSection/>
  </div>
</template>

<script>
import MissionSection from '@/components/MissionSection'
import OurTeamSection from '@/components/OurTeamSection'
import DaoSection from '@/components/DaoSection'
import GlobalPartnerSection from '@/components/GlobalPartnerSection'
import JoinUsSection from '@/components/JoinUsSection'

export default {
  name: 'AboutUsPage',
  components: {
    MissionSection,
    OurTeamSection,
    DaoSection,
    GlobalPartnerSection,
    JoinUsSection
  }
}
</script>

<style scoped lang="scss">
</style>
