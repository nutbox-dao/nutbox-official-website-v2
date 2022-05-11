<template>
  <div class="faq-page">
    <div class="container">
      <div class="title text-bold text-left">
        Frequently Asked <br>
        <span class="gradient-text gradient-text-bottom">Questions</span>
      </div>
      <div class="col-lg-8">
        <div class="q-a-block">
          <div class="q-title text-bold">What is Nutbox?</div>
          <div class="a-desc">
            Nutbox is a DAO infrastructure facing Web3. Any community creator can create DAO using Nutbox protocol one-click, help DAO to bootstrap, and attract community members to participate.
            </div>
          <div class="h-line"></div>
        </div>
        <div class="q-a-block">
          <div class="q-title text-bold">What functions do you provide?</div>
          <div class="a-desc">
            The three pillars of Nutbox’s basic modules are: Multi-Chain Proof of Stake Networks (Walnut), NFT Module (Chestnut) and Social Layer (Donut). Walnut has already been launched and the other two will be coming soon.
            </div>
          <div class="h-line"></div>
        </div>
        <div class="q-a-block">
          <div class="q-title text-bold">What is NUT?</div>
          <div class="a-desc">
            NUT is the native token of Nutbox economy, providing members and communities with benefits and services, and dictates Nutbox’s governance.
            </div>
          <div class="h-line"></div>
        </div>
        <div class="q-a-block">
          <div class="q-title text-bold">How is NUT distributed?</div>
          <div class="a-desc">
            The total number of NUT is 1 billion. According to the different allocation methods, it is divided into 2 categories:
            <br>
            ① 65% is used to support Nutbox ecosystem building, including collator, Slot Auction, Protocol Development, Toolkits Staking;
            <br>
            ② 35% is used for MKT, private sale and allocation of founding team.
            </div>
          <div class="h-line"></div>
        </div>
        <div class="q-a-block">
          <div class="q-title text-bold">What is NUT address and where it is listed?</div>
          <div class="a-desc">
            NUT (BSC): 0x4429FcdD4eC4EA4756B493e9c0525cBe747c2745
            <br>
            NUT is not listed yet.
            </div>
          <div class="h-line"></div>
        </div>
        <div class="q-a-block">
          <div class="q-title text-bold">What’s the difference between Nutbox, Peanut and Walnut?</div>
          <div class="a-desc">
            Walnut is the Multi-Chain Proof of Stake Networks module of Nutbox, it can also been seen as the Phase 1 of Nutbox.
            <br>
            Peanut is an investing DAO that is created by using Walnut.
            </div>
          <div class="h-line"></div>
        </div>
        <div class="q-a-block">
          <div class="q-title text-bold">What PoS chains does Walnut support at present?</div>
          <div class="a-desc">
            Currently support Cosmos, Steem, Hive, and will soon support mainstream Pos chains such as Solana, Polkadot, Ethereum2.0 etc.
            </div>
          <div class="h-line"></div>
        </div>
        <div class="q-a-block">
          <div class="q-title text-bold">How to create a Staking-based DAO using Walnut?</div>
          <div class="a-desc">
            Please check the guide here:
            <br>
            <a href="https://nutbox-io.gitbook.io/walnut/create-a-staking-based-dao/create-a-staking-based-dao-in-3-minutes">
              https://nutbox-io.gitbook.io/walnut/create-a-staking-based-dao/create-a-staking-based-dao-in-3-minutes
            </a>
            </div>
          <div class="h-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQPage'
}
</script>

<style scoped lang="scss">
.faq-page {
  padding-top: 120px;
  text-align: left;
  padding-bottom: 12rem;
}
.title {
  font-size: 3rem;
  line-height: 3.6rem;
  margin-top: 8rem;
  margin-bottom: 4rem;
}
.q-title {
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
}
.a-desc {
  color: #B0B0B0;
  line-height: 2.3rem;
  font-size: .9rem;
}
.h-line {
  width: 100%;
  height: 1px;
  background-color: rgba(white, .3);
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}
</style>
