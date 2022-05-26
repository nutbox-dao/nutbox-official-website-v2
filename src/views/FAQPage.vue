<template>
  <div class="faq-page">
    <div class="container">
      <div class="title text-bold text-left" v-html="$t('faqSection.title')">
      </div>
      <div class="col-lg-8">
        <div class="q-a-block" v-for="item of 8" :key="item">
          <div class="q-title text-bold" v-html="$t('faqSection.q' + item)"></div>
          <div class="a-desc" v-html="$t('faqSection.a'+item)"></div>
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
