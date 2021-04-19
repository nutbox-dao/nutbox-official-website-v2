<template>
 <section id="dao-section">
   <div class="row">
     <div class="col-md-5">
       <div class="font40 font-bold mb-4 text-left">{{$t('daoSection.title')}}</div>
       <div class="left-box pl-2 text-left">
         <div class="msg-item">
           <div class="img-box"><img src="~@/assets/dao-icon1.png" alt=""></div>
           <div>
             <div class="title">NO.1</div>
             <div class="msg">{{$t('daoSection.msg1')}}</div>
           </div>
         </div>
         <div class="msg-item">
           <div class="img-box"><img src="~@/assets/dao-icon2.png" alt=""></div>
           <div>
             <div class="title">NO.2</div>
             <div class="msg">{{$t('daoSection.msg2')}}</div>
           </div>
         </div>
         <div class="msg-item">
           <div class="img-box"><img src="~@/assets/dao-icon3.png" alt=""></div>
           <div>
             <div class="title">$ 6.7M</div>
             <div class="msg">{{$t('daoSection.msg3')}}</div>
           </div>
         </div>
         <div class="msg-item">
           <div class="img-box"><img src="~@/assets/dao-icon3.png" alt=""></div>
           <div>
             <div class="title">$ 4M</div>
             <div class="msg">{{$t('daoSection.msg4')}}</div>
           </div>
         </div>
       </div>
     </div>
     <div class="col-md-7">
       <div class="right-box">
         <img src="~@/assets/dao-bg.png" alt="">
       </div>
     </div>
   </div>
 </section>
</template>

<script>
export default {
  name: 'DaoSection'
}
</script>

<style scoped lang="scss">
.left-box {
  .msg-item {
    display: flex;
    align-items: center;
    margin-bottom: .6rem;
    padding: 1rem;
    &:hover {
      border-radius: 1.2rem;
      box-shadow: .6rem 1.2rem 1.6rem .6rem rgba(36, 38, 41, 0.02);
    }
    .img-box {
      width: 4rem;
      height: 4rem;
      padding: 1rem;
      box-shadow: .6rem 1.2rem 1.6rem .6rem rgba(36, 38, 41, 0.02);
      border-radius: 5rem;
      margin-right: 1rem;
      img {
        width: 100%;
      }
    }
  }
  .title {
    font-size: 1.4rem;
    font-weight: 600;
  }
  .msg {
    color: #BDBFC2;
  }
}
.right-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.right-box img {
  width: 100%;
}
</style>
