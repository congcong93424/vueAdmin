<template>
  <div class="modelChild">
    <div class="m_block">
      服务商名字<span class="serverName">{{dataInfo.serviceProviders}}</span>
    </div>
    <!-- 联系方式 -->
    <div class="m_block">
      <el-form label-position="right" label-width="90px" size="mini">
        <el-form-item label="联系方式"></el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="dataInfo.phone" v-if="isView"></el-input>
          <span v-else>{{dataInfo.phone}}</span>
        </el-form-item>
        <el-form-item label="微信号">
          <el-input v-model="dataInfo.wx" v-if="isView"></el-input>
          <span v-else>{{dataInfo.wx}}</span>
        </el-form-item>
      </el-form>
    </div>
    <!-- 银行卡 -->
    <div class="m_block">
      <el-form label-position="right" label-width="90px" size="mini">
        <el-form-item label="银行卡"></el-form-item>
        <el-form-item label="账户名">
          <el-input v-model="dataInfo.bankName" v-if="isView"></el-input>
          <span v-else>{{dataInfo.bankName}}</span>
        </el-form-item>
        <el-form-item label="开户行">
          <el-input v-model="dataInfo.bankOpen" v-if="isView"></el-input>
          <span v-else>{{dataInfo.bankOpen}}</span>
        </el-form-item>
        <el-form-item label="银行账号">
          <el-input v-model="dataInfo.bankAccount" v-if="isView"></el-input>
          <span v-else>{{dataInfo.bankAccount}}</span>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="dataInfo.bankNote" v-if="isView" placeholder="说点什么吧~" clearable></el-input>
          <span v-else>{{dataInfo.bankNote}}</span>
        </el-form-item>
      </el-form>
    </div>
    <!-- 支付宝 -->
    <div class="m_block">
      <el-form label-position="right" label-width="90px" size="mini">
        <el-form-item label="支付宝"></el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="dataInfo.zfName" v-if="isView"></el-input>
          <span v-else>{{dataInfo.zfName}}</span>
        </el-form-item>
        <el-form-item label="支付宝账号">
          <el-input v-model="dataInfo.zfAccount" v-if="isView"></el-input>
          <span v-else>{{dataInfo.zfAccount}}</span>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="dataInfo.zfNote" v-if="isView" placeholder="说点什么吧~" clearable></el-input>
          <span v-else>{{dataInfo.zfNote}}</span>
        </el-form-item>
        <el-form-item label="收款码">
          <el-upload
            class="elUpload"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <!-- <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog> -->
          {{dataInfo.zfCode}}
        </el-form-item>
      </el-form>
    </div>
    <!-- 微信 -->
    <div class="m_block">
      <el-form label-position="right" label-width="90px" size="mini">
        <el-form-item label="微信"></el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="dataInfo.wxNickName" v-if="isView"></el-input>
          <span v-else>{{dataInfo.wxNickName}}</span>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="dataInfo.wxName" v-if="isView"></el-input>
          <span v-else>{{dataInfo.wxName}}</span>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="dataInfo.wxNote" v-if="isView" placeholder="说点什么吧~"  clearable></el-input>
          <span v-else>{{dataInfo.wxNote}}</span>
        </el-form-item>
        <el-form-item label="收款码">
          {{dataInfo.wxCode}}
        </el-form-item>
      </el-form>
    </div>
    <!-- {{childData}} -->
  </div>
</template>
<script>
export default {
  name: 'model',
  data() {
    return {
      msg: "信息",
    }
  },
  props:['dataInfo','isView'],
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      console.log(file)
      // this.dialogImageUrl = file.url;
      // this.dialogVisible = true;
    }
  }
}
</script>
<style>
.modelChild {
    width: 100%;
    margin-top: -50px;
}
.m_block {
  width: 93%;
  margin-top: 10px;
  border-bottom: 1px solid lightgray;
}
label {
  font-weight: 400 !important;
}
.m_block .serverName{
  font-weight: bold;
  line-height: 40px;
  padding-left: 20px;
}
.m_block span {
  font-weight: bold;
}
</style>

