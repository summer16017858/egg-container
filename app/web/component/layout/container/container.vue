<template>
  <div :class="isCollapse?'active topBar':'topBar'">
    <i :class="!isCollapse?'el-icon-shop-shouqi icon':'el-icon-shop-zhankai icon'" @click="handleMenu"></i>
    <div class="other-element">
      <el-input
        placeholder="请输入内容"
        suffix-icon="el-icon-search"
        class="search-input">
      </el-input>
      <i class="el-icon-tickets icon-other"></i>
      <i class="el-icon-goods icon-other"></i>
      <el-badge :value="12" class="item">
        <i class="el-icon-shop-more-br icon-other"></i>
      </el-badge>
      <div class="avator">
        <i class="avator-pic"><img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3095574628,3861095142&fm=58" style="display:inline-block;width:30px;height:30px"/></i>
        <el-dropdown>
          <span class="el-dropdown-link">
            ssss<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    }
  },
  methods: {
    handleMenu() {
      console.log(this.$store.state, 'clicksssss');
      this.$store.dispatch('FETCH_MENUSTATE', { isCollapse: this.$store.state.isCollapse });
    }
  }
};
</script>

<style scoped>
 @import "../../../asset/icon/iconfont.css";
 .topBar{
   display: flex;
   flex-direction: row;
   justify-content:space-between;
   flex:3;
   margin-left: 300px;
   background-color: #fff;
   padding:10px 0;
 }
 .topBar.active{
   margin-left:80px;
 }
 .icon{
   flex:1;
   font-size: 30px;
   cursor:pointer;
   margin-left:10px;
 }
 .search-input{
   width:200px;
 }
 .other-element{
   flex:4;
   display: flex;
   align-items: center;
   flex-direction: row;
   justify-content: flex-end;
 }
 .icon-other{
   font-size: 24px;
   margin-right:10px;
 }
 .avator-pic{
   display:inline-block;
   width:30px;
   height:30px;
    image{
      display: inline-block;
    }
 }
</style>
