<template>
  <div class="dashboard-container">
    <div class="addBtn">
      <el-button type="primary" size="medium" @click="addModel">新增</el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%" max-height="450">
        <el-table-column fixed prop="serviceProviders" label="服务商" min-width="90"></el-table-column>
        <el-table-column label="联系方式">
          <el-table-column prop="phone" label="手机号" min-width="120"></el-table-column>
          <el-table-column prop="wx" label="微信号" min-width="120"></el-table-column>
        </el-table-column>
        <el-table-column label="银行卡">
          <el-table-column prop="bankName" label="账户名" min-width="120"></el-table-column>
          <el-table-column prop="bankOpen" label="开户行" min-width="120"></el-table-column>
          <el-table-column prop="bankAccount" label="银行账号" min-width="180"></el-table-column>
          <el-table-column prop="bankNote" label="备注"></el-table-column>
        </el-table-column>
        <el-table-column label="支付宝">
          <el-table-column prop="zfName" label="姓名"></el-table-column>
          <el-table-column prop="zfAccount" label="支付宝账号" min-width="120"></el-table-column>
          <el-table-column prop="zfNote" label="备注"></el-table-column>
          <el-table-column prop="zfCode" label="收款码"></el-table-column>
        </el-table-column>
        <el-table-column label="微信">
          <el-table-column prop="wxNickName" label="昵称"></el-table-column>
          <el-table-column prop="wxName" label="姓名"></el-table-column>
          <el-table-column prop="wxNote" label="备注"></el-table-column>
          <el-table-column prop="wxCode" label="收款码"></el-table-column>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="viewRow(scope.$index, tableData)"
              type="text"
              size="small">
              查看
            </el-button>
            <el-button
              @click.native.prevent="editRow(scope.$index, tableData)"
              type="text"
              size="small">
              编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="total, prev, pager, next"
        :total="tableData.length">
      </el-pagination>
    </div>

    <el-dialog :visible.sync="dialogVisible" width="30%" class="dialog">
      <model :dataInfo="dataInfo" :isView="isView"></model>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取消</el-button> -->
        <el-button type="primary" @click="save">{{saveCancel}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  data() {
    return {
      saveCancel: '保存',
      dataInfo: {
        serviceProviders: '',
        phone: '',
        wx: '',
        bankName: '',
        bankOpen: '',
        bankAccount: '',
        bankNote: '',
        zfName: '',
        zfAccount: '',
        zfNote: '',
        zfCode: '',
        wxNickName: '',
        wxName: '',
        wxNote: '',
        wxCode: '',
      },
      isView: true,
      dialogVisible: false,
      // rowData: null,
      tableData: [{
        serviceProviders: '羿贝科技1',
        phone: '13456826868',
        wx: '羿贝科技',
        bankName: '浙商银行',
        bankOpen: '文新支行',
        bankAccount: '3222 2222 1231 2123',
        bankNote: '备注',
        zfName: '三七',
        zfAccount: '13456826868',
        zfNote: '备注',
        zfCode: '432432',
        wxNickName: 'Nancy',
        wxName: '张三',
        wxNote: '微信备注',
        wxCode: '35534',
      },{
        serviceProviders: '羿贝科技2',
        phone: '13456826868',
        wx: '羿贝科技',
        bankName: '浙商银行',
        bankOpen: '文新支行',
        bankAccount: '3222 2222 1231 2123',
        bankNote: '备注',
        zfName: '三七',
        zfAccount: '13456826868',
        zfNote: '备注',
        zfCode: '432432',
        wxNickName: 'Nancy',
        wxName: '张三',
        wxNote: '微信备注',
        wxCode: '35534',
      },{
        serviceProviders: '羿贝科技3',
        phone: '13456826868',
        wx: '羿贝科技',
        bankName: '浙商银行',
        bankOpen: '文新支行',
        bankAccount: '3222 2222 1231 2123',
        bankNote: '备注',
        zfName: '三七',
        zfAccount: '13456826868',
        zfNote: '备注',
        zfCode: '432432',
        wxNickName: 'Nancy',
        wxName: '张三',
        wxNote: '微信备注',
        wxCode: '35534',
      },{
        serviceProviders: '羿贝科技4',
        phone: '13456826868',
        wx: '羿贝科技',
        bankName: '浙商银行',
        bankOpen: '文新支行',
        bankAccount: '3222 2222 1231 2123',
        bankNote: '备注',
        zfName: '三七',
        zfAccount: '13456826868',
        zfNote: '备注',
        zfCode: '432432',
        wxNickName: 'Nancy',
        wxName: '张三',
        wxNote: '微信备注',
        wxCode: '35534',
      }]
    }
  },
  components: {
    model: require('./model.vue').default
  },
  methods: {
    viewRow(index, rows) {
        this.saveCancel = "关闭"
      this.dialogVisible = true
      this.dataInfo = rows[index]
      this.isView = false
    },
    editRow(index, rows) {
      this.saveCancel = "保存"
      this.dialogVisible = true
      this.dataInfo = rows[index]
      this.isView = true
    },
    addModel(){
      this.saveCancel = "保存"
      this.isView = true
      this.dialogVisible = true
      this.dataInfo = {
        serviceProviders: '',
        phone: '',
        wx: '',
        bankName: '',
        bankOpen: '',
        bankAccount: '',
        bankNote: '',
        zfName: '',
        zfAccount: '',
        zfNote: '',
        zfCode: '',
        wxNickName: '',
        wxName: '',
        wxNote: '',
        wxCode: '',
      }
    },
    save() {
      if(this.saveCancel == "保存"){
        console.log(this.dataInfo)
      }
      this.dialogVisible = false
    }

  },
  // computed: {
  //   ...mapGetters([
  //     'name',
  //     'roles'
  //   ])
  // }
}
</script>

<style scoped>
.dashboard-container {
  /* width: 100%; */
  height: 100%;
  margin: 30px 20px 30px 20px;
}
.dashboard-container .table {
  min-height: 200px;
  /* border: 1px solid red; */
}
.addBtn {
  float: right;
  margin-bottom: 20px;
}
.pagination {
  margin-top: 20px;
}
.dialog-footer {
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%,-0%);
}
.dialog {
  padding-bottom: 66px;
  margin-top: -60px;
}
</style>
