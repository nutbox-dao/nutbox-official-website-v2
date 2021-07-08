<template>
  <div class="home-page">
    <StartSection/>
    <FactorySection/>
    <BlockchainSections/>
    <div class="container">
      <RoadmapSection/>
      <PartnerSection/>
      <CommunityEcology/>
    </div>
  </div>
</template>

<script>
import StartSection from '@/components/StartSection'
import FactorySection from '@/components/FactorySection'
import PartnerSection from '@/components/PartnerSection'
import RoadmapSection from '@/components/RoadmapSection'
import BlockchainSections from '@/components/BlockchainSection'
import CommunityEcology from '@/components/CommunityEcology'
export default {
  name: 'HomePage',
  components: {
    StartSection,
    FactorySection,
    PartnerSection,
    BlockchainSections,
    RoadmapSection,
    CommunityEcology
  }
}
</script>

<style scoped lang="scss">
.home-page {

}
</style>
