import { sync } from 'vuex-router-sync';
import store from 'store/app';
import router from 'component/app/router';
import app from './app.vue';
import App from 'app';
import 'element-ui/lib/theme-chalk/index.css';
import Layout from 'component/layout/app';
import Element from 'element-ui';
App.use(Element, { size: 'small' });

App.component(Layout.name, Layout);

sync(store, router);

export default App.init({
  base: '/app',
  ...app,
  router,
  store
});
