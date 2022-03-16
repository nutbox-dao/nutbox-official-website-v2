<template>
  <div class="home-page">
    <StartSection/>
    <DaoSection/>
    <PeanutSection/>
    <NutPowerSection/>
    <div class="container">
      <RoadmapSection/>
    </div>
  </div>
</template>

<script>
import StartSection from '@/components/StartSection'
import DaoSection from '@/components/DaoSection'
import PeanutSection from '@/components/PeanutSection'
import NutPowerSection from '@/components/NutPowerSection'
import PartnerSection from '@/components/PartnerSection'
import RoadmapSection from '@/components/RoadmapSection'
import BlockchainSections from '@/components/BlockchainSection'
import CommunityEcology from '@/components/CommunityEcology'
export default {
  name: 'HomePage',
  components: {
    StartSection,
    DaoSection,
    PeanutSection,
    NutPowerSection,
    RoadmapSection
  }
}
</script>

<style scoped lang="scss">
.home-page {

}
</style>
