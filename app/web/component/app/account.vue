<template>
  <div :class="isCollapse?'active content':'content'">
    <div class="main-content">
      <div class="title">订单支付</div>
      <div class="info-tip">
        <img src="../../asset/images/icon-right.png" alt=""  class="tip-icon"/>
        <div class="tip-text">
          <p class="font-text">订单提交成功，请尽快支付！订单编号201701312312312</p>
          <p class="time-text">请在<span class="special-text">3天内</span>支付完成，否则订单会自动取消。剩余时间<span class="special-text">3</span>天<span class="special-text">10</span>小时<span class="special-text">40</span>分<span class="special-text">33</span>秒</p>
        </div>
      </div>
      <div class="order-info">
        <transition name="fade">
          <div class="order-content" v-if="show">
            <p class="order-address">
              <span class="label">收货地址：</span><span class="order-text">啦啦啦，13758379000， 浙江省 嘉兴市 海宁市 啦啦镇啦啦啦镇啦啦啦路啦啦啦小区22幢307室，314400</span>
            </p>
            <p class="product-name">
              <span class="label">商品名称：</span><span class="order-text">100%羊毛衫圆领中长款宽松韩版上衣秋冬纯色毛衣女加厚针织打底衫x2件；100%羊毛衫圆领中长款宽松韩版上衣秋冬纯色毛衣女加厚针织打底衫x1件</span>
            </p>
          </div>
        </transition>
        <div class="control-bar" @click="toggleInfo"  v-if="show">收起商品完整信息</div>
        <div class="control-bar" @click="toggleInfo" v-if="!show">展开商品完整信息</div>
      </div>
      <div class="product-table">
        <table width='1500px'>
          <thead class='thead-style'>
            <tr class="row-style">
              <th class="col-style-4">商品信息</th>
              <th class="col-style-1">单价</th>
              <th class="col-style-2">商品毛重</th>
              <th class="col-style-1">数量</th>
              <th class="col-style-1">小计</th>
            </tr>
          </thead>
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
          </tbody>
        </table>
        <div class="info-bottom">
          <div class="remark">
            留言备注：
            <textarea name="mark-input" rows="1" cols="50" placeholder="请输入留言备注" class="mark-input"></textarea>
          </div>
          <div class="price-info"></div>
        </div>
      </div>
      <div class="pay-element">
        <p>请输入六位密码</p>
        <input type="text" class="hidden-input" @focus="onFocus" @blur="onBlur" @keyup="onKeyUp" maxLength="6" minLength="6">
        <div class="digital-box">
          <i :class="curIndex === 0 && !!dataBusy?'digital-item active':curIndex >= 1?'digital-item entered':'digital-item'"></i>
          <i :class="curIndex === 1 && !!dataBusy?'digital-item active':curIndex >= 2?'digital-item entered':'digital-item'"></i>
          <i :class="curIndex === 2 && !!dataBusy?'digital-item active':curIndex >= 3?'digital-item entered':'digital-item'"></i>
          <i :class="curIndex === 3 && !!dataBusy?'digital-item active':curIndex >= 4?'digital-item entered':'digital-item'"></i>
          <i :class="curIndex === 4 && !!dataBusy?'digital-item active':curIndex >= 5?'digital-item entered':'digital-item'"></i>
          <i :class="curIndex === 5 && !!dataBusy?'digital-item active':curIndex >= 6?'digital-item entered':'digital-item'"></i>
          <span :class="!!dataBusy?'showWrap cardwrap':'cardwrap'" :style="{left:curIndex>5?5*49:curIndex*49 + 'px'}"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .content{
    background-color: #eee;
  }
  .content.active{
    transition: all 0.5s;
    margin-left:100px;
  }
  .main-content{
    background-color: #fff;
    position: relative;
    padding-left:25px;
  }
  .hidden-input{
    width:295px;
    position: absolute;
    left:0;
    top: 32px;
    height:50px;
    z-index: 99;
    opacity: 0;
  }
  .digital-box{
    position: relative;
    width:295px;
    height:50px;
    border:1px solid #999;
    .digital-item{
      display: block;
      float:left;
      width:50px;
      height:30px;
      margin:10px 0;
      border-right:1px solid #999;
      margin-left:-1px;
    }
    .digital-item:last-of-type{
      border-right:none;
      margin-left:-2px;
    }
    .digital-item.active{
      background: url('../../asset/images/password-blink.gif') no-repeat center top;
    }
    .digital-item.entered{
      background: url('../../asset/images/passeord-dot.png') no-repeat center center;
    }
  }
  .cardwrap{
    position: absolute;
    display: block;
    left: 0px;
    top: 0px;
    height: 48px;
    width:48px;
    border: 1px solid rgba(82, 168, 236, .8);
    border: 1px solid #00ffff\9;
    border-radius: 2px;
    visibility: hidden;
    -webkit-box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.75), 0 0 8px rgba(82, 168, 236, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
  .pay-element{
    position: relative;
  }
  .showWrap{
    visibility: visible;
  }
  .title{
    font-size: 16px;
    color:#39414c;
    font-weight: bold;
    height: 42px;
    line-height:42px;
    margin-top:30px;
  }
  .info-tip{
    height:99px;
    padding:26px 0 21px 0;
  }
  .tip-icon{
    display: inline-block;
    vertical-align: sub;
  }
  .tip-text{
    font-size: 16px;
    color:#39414c;
    font-weight: bold;
    display: inline-block;
  }
  .time-text{
    color:#39414c;
    font-size: 12px;
    font-weight: normal;
  }
  .special-text{
    color:#fe2249;
  }
  .order-info{
    padding:23px 20px;
    background-color: #f7f7f7;
  }
  // .order-content{
  //   height:100%;
  //
  // }
  .label{
    color:#39414c;
    font-size: 12px;
  }
  .order-text{
    color:#a2a2a2;
    font-size: 12px;
  }
  .control-bar{
    color:#7ba5c3;
    font-size: 12px;
    cursor: pointer;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 2s;
  }
  .fade-enter,.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    overflow: hidden;
    height:0;
  }
  .fade-enter-to,.fade-leave /* .fade-leave-active below version 2.1.8 */ {
    opacity: 1;
    height:100px;
  }
  .thead-style{
    background-color: #e8e8e8;
    padding:10px 0;
    height:100px;
    top:0;
  }
  .row-style,.row-style th{
    vertical-align: middle;
    text-align: center;
    height:43px;
  }
  .col-style-4{
    width:798px;
  }
  .col-style-2{
    width:255px;
  }
  .col-style-1{
    width:188px;
  }
  .pro-info{
    display: flex;
    flex-direction: row;
    align-content:space-between;
    justify-content: space-between;
    border-right:1px solid #e8e8e8;
    padding:20px 35px 20px 20px;
    .info-left{
      .left-img{
        display: inline-block;
      }
      .left-text{
        display: inline-block;
        .product-name{
          font-size: 12px;
        }
        .product-number{
          font-size: 12px;
        }
      }
    }

  }
  .pro-price,.pro-weight,.pro-number,.pro-total{
    text-align: center;
    vertical-align: top;
    border-right: 1px solid #e8e8e8;
    padding-top: 20px;
  }
  .product-table{
    position: relative;
    overflow-x: scroll;
    background-color: #e8e8e8
  }
  .info-bottom{
    padding:20px 0 20px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .mark-input{
    vertical-align: middle;
  }
</style>
<script type="text/babel">
export default{
  preFetch({ state, dispatch, commit }) {
    const { id } = state.route.params;
    return Promise.all([
      dispatch('FETCH_ARTICLE_DETAIL', { id })
    ]);
  },
  beforeMount() {
    const { id } = this.$store.state.route.params;
    return Promise.all([
      this.$store.dispatch('FETCH_ARTICLE_DETAIL', { id })
    ]);
  },
  data() {
    return {
      dataBusy: 0,
      curIndex: -1,
      show: true,
      tableData:
      [{
        price: '2666',
        oldPrice: '3000',
        name: '王小虎',
        weight: '40',
        number: '2',
        total: '5333'
      }, {
        price: '1000',
        oldPrice: '2000',
        name: '王小虎',
        weight: '40',
        number: '3',
        total: '3000'
      }]
    };
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    }
  },
  methods: {
    onFocus() {
      this.dataBusy = 1;
      this.curIndex = this.curIndex === -1 ? 0 : this.curIndex;
    },
    onBlur() {
      this.dataBusy = 0;
      // this.curIndex = -1;
    },
    onKeyUp(event) {
      const value = event.target.value;
      this.curIndex = value.length;
      console.log(value, this.curIndex, 'target value');
    },
    toggleInfo() {
      this.show = !this.show;
    }
  }
};
</script>
