<template>
  <div class="crmpage">
    <header class="c_head"></header>
    <article class="content">
      <span class="remittance">汇款</span>
      <p class="c_p">支付金额： <strong>￥ {{crmInfo.payMoney}}</strong></p>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="付款人姓名">
          <el-input v-model="fName" placeholder="请输入付款人姓名"></el-input>
        </el-form-item>
      </el-form>
      <!-- <el-button>确认</el-button> -->
      <el-button @click="nextStep">下一步</el-button>
    </article>
    <article class="content">
      <span class="remittance">订单信息</span>
      <p>客户信息：<span>{{crmInfo.useInfo}}</span></p>
      <p>支付单号：<span>{{crmInfo.payOrder}}</span></p>
    </article>
    <div class="footImg">
      <img :src="footpic" alt="">
    </div>
  </div>
</template>

<script>
import footpic from '@/assets/foot.png'
export default {
  name: 'crmpage',
  data () {
    return {
      footpic: footpic,
      crmInfo: {
        payMoney: '',
        useInfo: '',
        payOrder: '',
      },
      fName: '',
    }
  },
  mounted() {
    this.$api.crmpage().then(res => {
      console.log(res)
      this.crmInfo.payMoney = res.payMoney
      this.crmInfo.useInfo = res.clientInfo
      this.crmInfo.payOrder = res.payOrder
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    nextStep() {
      if(this.fName === ""){
        this.$message.error('请填写姓名');
      }else{
        this.$router.push({name:'crmpageinfo',params:{name:this.fName}});
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.crmpage{
  min-height: 200px;
}
.c_head {
  border: 1px solid gray;
  height: 70px;
  border: 1px solid rgba(187, 187, 187, 1);
}
.content {
  width: 70%;
  min-height: 100px;
  border: 1px solid rgba(187, 187, 187, 1);
  margin: 0 auto;
  padding: 30px;
}
.content:first-of-type {
  margin-bottom: 30px;
}
.remittance {
  display: inline-block;
  min-width: 300px;
  padding: 0px 2px 10px 0px;
  border-bottom: 1px solid rgba(187, 187, 187, 1);
}
.c_p {
  font-size: 14px;
}
.c_p strong {
  color: #E51C23;
  font-size: 18px;
  font-weight: 100;
}
.footImg {
  width: 100%;
  text-align: center;
  margin: 0 auto;
}
</style>
