<template>
  <div class="crmPageInfo">
    <article class="content timePosition">
      <p class="c_p unPay">待支付金额： <strong class="sred">￥ {{payMoney}}</strong>
      <span class="dot">:</span>
        <span class="cp_right">支付倒计时：
          <strong class="sred">
            <FlipDown v-show="showTtime" :endDate="endTime" :type="2" @timeUp="clearTtime"></FlipDown>
            <span v-show="!showTtime" class="spanTime cutTtimeLeft">15</span>
            <span v-show="!showTtime" class="spanTime cutTtimeRight">00</span>
          </strong>
        </span>
      </p>
      <p class="c_p">付款人姓名： {{fName}}
          <span class="cp_right">温馨提醒：在收到您的汇款后，服务商将为您完成入金的后续流程，请尽快支付</span>
      </p>
    </article>
    
    <!-- 支付提醒 -->
    <article class="content tips">
      <span>支付提醒</span>
      <span>1、请使用实名制的银行卡、支付宝、微信等进行转账</span>
      <span>2、法定节假日或工作日17:00以后汇款到银行卡可能造成汇款不及时，请分批支付（单笔支付金额小于￥50000）保证及时到账，若未及时到账服务商有权拒绝</span>
      <span>3、请仔细确认支付账户信息，若因转账账户与订单不一致，造成的损失与平台无关</span>
      <span>4、服务商不会主动添加您为好友，您也无需添加服务商为好友，谨防上当受骗</span>
    </article><br>
    <article class="content">
      <span class="remittance">订单信息</span>
      <div class="tabInfo">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <!-- 银行卡支付 -->
            <el-tab-pane class="elTab" label="银行卡支付" name="first">
                <p>账 户 名&nbsp;： <strong>{{bankPay.name}}</strong></p>
                <p>开 户 行&nbsp;： <strong>{{bankPay.openBank}}</strong></p>
                <p>银行账号： <strong>{{bankPay.bankAccount}}</strong></p>
                <p>备 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注 ：<strong>{{bankPay.node}}</strong></p>
            </el-tab-pane>
            <!-- 支付宝 -->
            <el-tab-pane class="elTab" label="支付宝" name="second">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;姓&nbsp;&nbsp;名&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{bankPay.name}}</strong></p>
                <p>支付宝账号&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{bankPay.openBank}}</strong></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备&nbsp;&nbsp;注&nbsp;&nbsp;&nbsp;:<strong>&nbsp;&nbsp;&nbsp;&nbsp;请勿加好友，直接扫码支付备注下方转账备注码</strong></p>
                <img class="img" src="../../assets/logo.png" alt="">
            </el-tab-pane>
            <!-- 微信 -->
            <el-tab-pane class="elTab" label="微信" name="third">
                <p>昵&nbsp;&nbsp;称：&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{bankPay.name}}</strong></p>
                <p>姓&nbsp;&nbsp;名：&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{bankPay.openBank}}</strong></p>
                <p>备&nbsp;&nbsp;注：&nbsp;&nbsp;&nbsp;&nbsp;<strong>请勿加好友，直接扫码支付备注下方转账备注码</strong></p>
                <img class="img" src="../../assets/logo.png" alt="">
            </el-tab-pane>
        </el-tabs>
      </div>
      <article class="Accounttips">
        <p class="c_p">转账备注码： <strong class="sred">79637</strong></p>
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="sure">我已打款，提醒确认</el-button>
      </article>
    </article>
    <div class="footImg">
      <img src="../../assets/foot.png" alt="">
    </div>

    <!-- 弹框 -->
    <el-dialog
    title="提醒收款"
    :visible.sync="dialogVisible"
    width="30%">
        <span>若您尚未完成支付，请勿提醒收款！否则容易导致交易失败！</span>
        <!-- 上传 -->
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :http-request="uploadImg">
          <br>
          <el-button size="small">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">1、请上传转账成功后的截图</div>
          <div slot="tip" class="el-upload__tip">2、只能上传jpg/png文件，且不超过1M</div>
          <img id="previewImg" src="" alt="">
        </el-upload>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">暂未打款</el-button>
            <el-button @click="imSure">我已确认打款</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
import {commom_uploadImg} from '../../utils/common'
import FlipDown from 'vue-flip-down';
export default {
  name: 'crmPageInfo',
  data () {
    return {
      showTtime: false,
      dialogVisible: false,
      activeName: 'first',
      fName: '',
      bankPay: {
        name: '黄慷慨',
        openBank: '建设银行香梅支行',
        bankAccount: '435453245345',
        node: '请备注',
      },
      endTime: null,
      // 倒计时的时间毫秒数
      cutDownMs: 901000,
      payMoney: '6800',
      preImg: '',
    }
  },
  components: {FlipDown},
  created() {
    // 获取倒计时
    this.endTime = new Date().getTime() + this.cutDownMs
  },
  mounted() {
    const that = this
    setTimeout(function(){
      that.showTtime = true 
    },1000)
  },
  // 每次进页面的都会执行的钩子函数
  activated() {
    this.fName = this.$route.params.name
  },
  methods: {
    clearTtime(){
      this.$alert('<i class="el-icon-warning"></i>在收到您的汇款后，服务商将为您完成入金的后续流程，请尽快支付', '提醒', {
          dangerouslyUseHTMLString: true
      });
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    imSure() {
      this.dialogVisible = false
    },
    sure() {
      this.dialogVisible = true
      if(document.getElementById('previewImg')){
        document.getElementById('previewImg').src="";
      }
    },
    cancel() {
      this.$router.go(-1)
    },
    // 图片上传函数
    uploadImg(file) {
      var imgDom = document.getElementById('previewImg')
      commom_uploadImg(file,imgDom)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timePosition {
  position: relative;
}
.content {
  width: 70%;
  min-height: 70px;
  border: 1px solid rgba(187, 187, 187, 1);
  margin: 0 auto;
  padding: 20px;
}
.content:first-of-type {
  margin-bottom: 20px;
}
.remittance {
  display: inline-block;
  min-width: 300px;
  padding: 0px 2px 10px 0px;
  border-bottom: 1px solid rgba(187, 187, 187, 1);
}
.c_p {
  font-size: 14px;
  height: 36px;
}
.sred {
  color: #E51C23;
  font-size: 18px;
  font-weight: 100;
}
.footImg {
  width: 100%;
  text-align: center;
  margin: 0 auto;
}
.cp_right {
    float: right;
    padding-right: 50px;
}
.cp_right .sred {
    padding-left: 20px;
}
.tips span {
    display: block;
    line-height: 30px;
    color: gray;
    font-size: 14px;
}
.tabInfo {
    min-height: 100px;
    margin-top: 30px;
    
}
.elTab {
    font-size: 14px;
    padding-left: 20px;
}
.img {
    width: 120px;
    height: 120px;
}
.Accounttips {
    width: 300px;
    margin-top: 20px;
    border-top: 2px solid lightgray;
    padding-left: 20px;
}
.unPay {
  margin-right: 40px;
}
.dot {
  position: absolute;
  top: 36px;
  right: 98px;
  color: red;
  /* font-size: 12px; */
  font-weight: bold;
  z-index: 100;
}
.spanTime {
  color: red;
  font-size: 21px;
  position: absolute;
  top: 33px;
}
.cutTtimeLeft {
  right: 107px;
}
.cutTtimeRight {
  right: 70px;
}
#previewImg{
  max-width: 180px;
  max-height: 240px;
  border-radius: 10px;
  position: relative;
  top: 10px;
  left: 10px;
}
</style>
<style>
.el-icon-warning {
  color: rgb(230,162,60) !important;
  padding-right: 5px;
  font-size:18px;
}
.vue-countdown-component {
  background: white;
  width: 60px;
  position: absolute;
  top: 30px;
  right: 72px;
  
}
.vue-countdown-component .time-box{
  background-color: white;
  color: red;
  font-size: 22px;
}
.vue-countdown-component .time-box > div.a0{
  background-color: white;
}
.vue-countdown-component .time-box > div.a1{
  background-color: white;
}
.vue-countdown-component .time-box > div.b0{
  background-color: white;
}
</style>
