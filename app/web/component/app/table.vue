<template lang="html">
  <div class="table-content">
    <div class="product-table">
      <div class="hidden-columns"><div></div> <div></div> <div></div> <div></div> <div></div></div>
      <div class="table-head">
        <table class="header-body"  :style="{'position':'absolute','top':0,'width':'1500px','left':-headLeft+'px'}">
          <colgroup>
            <col name="el-table_1_column_1" width="180">
            <col name="el-table_1_column_2" width="180">
            <col name="el-table_1_column_3" width="80">
            <col name="el-table_1_column_4" width="180">
            <col name="el-table_1_column_5" width="180">
          </colgroup>
          <thead class='thead-style'>
            <tr class="row-style">
              <th class="col-style-4">商品信息</th>
              <th class="col-style-1">单价</th>
              <th class="col-style-2">商品毛重</th>
              <th class="col-style-1">数量</th>
              <th class="col-style-1">小计</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="scroll-content" @scroll="scroll" ref='scrollContent'>
        <table class="content-body" style="width:1500px">
          <colgroup>
            <col name="el-table_1_column_1" width="180">
            <col name="el-table_1_column_2" width="180">
            <col name="el-table_1_column_3" width="80">
            <col name="el-table_1_column_4" width="180">
            <col name="el-table_1_column_5" width="180">
          </colgroup>
          <tbody style="background-color:#fff;">
            <tr style="border-bottom:1px solid #e8e8e8">
              <td class="pro-info">
                <div class="info-left">
                  <img src="../../asset/images/logo.png" alt="" width="81" height="81"  class="left-img">
                  <div class="left-text">
                    <p class="product-name">
                      100%羊毛衫圆领中长款宽松韩版上衣秋冬纯色毛衣女加厚针织打底衫
                    </p>
                    <p class="product-number">
                      商品货号:YD45359
                    </p>
                  </div>
                </div>
                <div class="info-right">
                  <p class="product-color">颜色分类：<span>深灰色</span></p>
                  <p class="product-size">尺寸: <span>S</span></p>
                </div>
              </td>
              <td class="pro-price">
                <p>¥1888</p>
                <del>¥2000</del>
              </td>
              <td class="pro-weight">500g</td>
              <td class="pro-number">x2</td>
              <td class="pro-total">3666</td>
            </tr>
            <tr style="border-bottom:1px solid #e8e8e8">
              <td class="pro-info">
                <div class="info-left">
                  <img src="../../asset/images/logo.png" alt="" width="81" height="81"  class="left-img">
                  <div class="left-text">
                    <p class="product-name">
                      100%羊毛衫圆领中长款宽松韩版上衣秋冬纯色毛衣女加厚针织打底衫
                    </p>
                    <p class="product-number">
                      商品货号:YD45359
                    </p>
                  </div>
                </div>
                <div class="info-right">
                  <p class="product-color">颜色分类：<span>深灰色</span></p>
                  <p class="product-size">尺寸: <span>S</span></p>
                </div>
              </td>
              <td class="pro-price">
                <p>¥1888</p>
                <del>¥2000</del>
              </td>
              <td class="pro-weight">500g</td>
              <td class="pro-number">x2</td>
              <td class="pro-total">3666</td>
            </tr>
            <tr style="border-bottom:1px solid #e8e8e8">
              <td class="pro-info">
                <div class="info-left">
                  <img src="../../asset/images/logo.png" alt="" width="81" height="81"  class="left-img">
                  <div class="left-text">
                    <p class="product-name">
                      100%羊毛衫圆领中长款宽松韩版上衣秋冬纯色毛衣女加厚针织打底衫
                    </p>
                    <p class="product-number">
                      商品货号:YD45359
                    </p>
                  </div>
                </div>
                <div class="info-right">
                  <p class="product-color">颜色分类：<span>深灰色</span></p>
                  <p class="product-size">尺寸: <span>S</span></p>
                </div>
              </td>
              <td class="pro-price">
                <p>¥1888</p>
                <del>¥2000</del>
              </td>
              <td class="pro-weight">500g</td>
              <td class="pro-number">x2</td>
              <td class="pro-total">3666</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headLeft: 0
    };
  },
  methods: {
    scroll(event) {
      const scrollLeft = event.target;
      const curHeight = document.documentElement.scrollLeft || document.body.scrollLeft;
      this.headLeft = this.$refs.scrollContent.scrollLeft;
      console.log(this.$refs.scrollContent.scrollLeft, 'scrollLeft');
    }
  }
};
</script>

<style lang="less" scoped>
.table-content{
  position: relative;
  left:0;
  margin-left:300px;
  .product-table{
    position: relative;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    width: 100%;
    max-width: 100%;
    font-size: 14px;
    color: rgb(96, 98, 102);
    overflow: hidden;
    flex: 1 1 0%;
    .fix-head{
      width:1500px;
      height:300px;
      overflow-y: auto;
      overflow-x: auto;
    }
  }
}
.table-head{
  overflow: hidden;
  width:100%;
}
.header-body{
  table-layout: fixed;
  border-collapse: separate;
}
.scroll-content{
  position:relative;
  height:300px;
  overflow-y: auto;
  overflow-x: auto;
  .content-body{
    table-layout: fixed;
    border-collapse: separate;
  }
}
.hidden-columns {
    position: absolute;
    z-index: -1;
}
</style>
