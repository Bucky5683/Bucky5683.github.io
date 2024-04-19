import { createWebHistory, createRouter } from "vue-router";
import SettingView from './components/SettingView.vue'
import EmtyView from './components/EmtyView.vue'

const routes = [
  {
    path: '/',
    component: EmtyView
  },
  {
    path: '/setting',
    component: SettingView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;