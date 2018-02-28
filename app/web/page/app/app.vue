<template>
  <app-layout>
    <div class="side-nav">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo side-nav"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        :router="true">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="/list" route="/list">选项1</el-menu-item>
            <el-menu-item index="/account" route="/account">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="/table" route="/table">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二<span class="badge">99+</span></span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </div>
    <Container/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </app-layout>
</template>
<script type="text/babel">
  import Container from '../../component/layout/container/container.vue';
  export default {
    data() {
      return {

      };
    },
    computed: {
      isCollapse() {
        return this.$store.state.isCollapse;
      },
      path() {
        return this.$store.route.path;
      }
    },
    mounted() {
    },
    methods: {
    },
    components: {
      Container
    },
  };
</script>
<style scoped="">
  .side-nav{
    float:left;
    flex:1;
    position: absolute;
    height: 100%;
  }
  .el-menu-vertical-demo.el-menu--collapse {
    width: 80px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 300px;
  }
  .badge{
    padding:5px;
    border-radius: 10px;
    margin-left:30px;
  }
</style>
