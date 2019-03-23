<template>
  <div class="orderContainer">
    <div class="orderTable">
      <el-table border :header-cell-style="{background:'rgb(245,247,250)'}" :data="tableData" style="width: 100%" max-height="450">
        <el-table-column fixed prop="userAccount" label="客户账号"></el-table-column>
        <el-table-column prop="userName" label="客户姓名"></el-table-column>
        <el-table-column prop="currencyType" label="货币类型"></el-table-column>
        <el-table-column prop="payMoney" label="支付金额" width="100"></el-table-column>
        <el-table-column prop="orderNumber" label="订单号"></el-table-column>
        <el-table-column prop="transferCode" label="转账备注码"></el-table-column>
        <el-table-column prop="createTime" label="交易创建时间"></el-table-column>
        <el-table-column prop="payTime" label="确认支付时间"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="viewRow(scope.$index, tableData)"
              type="text"
              size="small">
              凭证
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :total="tableData.length">
        </el-pagination>
      </div>
    </div>



    <!-- 图片 -->
    <el-dialog
      :modal="false"
      :show-close="false"
      :visible.sync="dialogVisible"
      width="30%">
      <div class="showImg">
        <img src="../../assets/logo.png" alt="">
      </div>
    </el-dialog>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible:false,
      tableData: [{
        userAccount: '134567432212',
        userName: '三七',
        currencyType: '比特币',
        payMoney: '120',
        orderNumber: '5435345345345',
        transferCode: '注意查收',
        createTime: '2019/3/22 16:24',
        payTime: '2019/3/22 16:44',
      },{
        userAccount: '134567432212',
        userName: '三七',
        currencyType: '比特币',
        payMoney: '120',
        orderNumber: '5435345345345',
        transferCode: '注意查收',
        createTime: '2019/3/22 16:24',
        payTime: '2019/3/22 16:44',
      },{
        userAccount: '134567432212',
        userName: '三七',
        currencyType: '比特币',
        payMoney: '120',
        orderNumber: '5435345345345',
        transferCode: '注意查收',
        createTime: '2019/3/22 16:24',
        payTime: '2019/3/22 16:44',
      }]

    }
  },
  methods: {
    viewRow(){
      this.dialogVisible =true
    },
    
  }
}
</script>

<style scoped>
.orderContainer {
  width: 100%;
  /* border: 1px solid red; */
  /* padding: 30px; */
}
.orderTable {
  margin: 50px 20px 20px 20px;

}
.pagination {
  margin-top: 20px;
}
.showImg{
  /* width: 100px; */
  width: 100%;
  min-height: 220px;
  /* border: 1px solid red; */
  margin-top: -30px;
  display: flex;
  justify-content: center;
  /* margin-left: -20px;  */
}
</style>

