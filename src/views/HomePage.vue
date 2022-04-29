<template>
  <div class="home-page">
    <StartSection/>
    <DaoSection/>
    <NutboxSection/>
    <StakingSection/>
    <PeanutSection/>
    <RoadmapSection/>
    <PartnerSection/>
    <CommunityEcology/>
  </div>
</template>

<script>
import StartSection from '@/components/StartSection'
import DaoSection from '@/components/DaoSection'
import NutboxSection from '@/components/NutboxSection'
import StakingSection from '@/components/StakingSection'
import PeanutSection from '@/components/PeanutSection'
import PartnerSection from '@/components/PartnerSection'
import RoadmapSection from '@/components/RoadmapSection'
import CommunityEcology from '@/components/CommunityEcology'
export default {
  name: 'HomePage',
  components: {
    StartSection,
    DaoSection,
    NutboxSection,
    StakingSection,
    PeanutSection,
    RoadmapSection,
    PartnerSection,
    CommunityEcology
  }
}
</script>

<style scoped lang="scss">
.home-page {

}
</style>
