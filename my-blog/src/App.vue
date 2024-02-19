<template>
  <div>
    <menu-bar @menu-selected="handleMenuSelected" />
    <div>
      <home-view></home-view>
    </div>
    <tab-bar @menu-selected="handleMenuSelected" />
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';
import TabBar from './components/TabBar.vue';
import HomeView from './views/HomeView.vue';

export default {
  name: "App",
  components: {
    MenuBar,
    HomeView,
    TabBar,
},
  methods: {
    handleMenuSelected(page) {
      // 메뉴 선택 시 라우터를 이용하여 해당 페이지로 이동
      this.$store.commit("popStateChange", true);
      this.$store.commit("urlStateAdd", page);
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

template {
  background-color: gray;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
