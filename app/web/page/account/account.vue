<template>
  <layout>
    <div>
      <div class="first">结算页面</div>
      <div class="second">
        <!-- <component :is="name"></component> -->
      </div>
    </div>
  </layout>
</template>
<script type="text/babel">
  // import loading from './component/loading.vue'
  // import error from './component/error.vue'
  // const async = () => ({
  //   component:  () => import('./component/async.vue'),
  //   loading,
  //   error,
  //   delay: 100,
  //   timeout: 1000
  // });
  export default {
    name: 'dynamic',
    data() {
      return {
        show: true
      };
    },
    components: {
    }
  };
</script>
