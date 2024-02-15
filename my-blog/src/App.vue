<template>
  <div>
    <menu-bar @menu-selected="handleMenuSelected" />
    <router-view />
    <tab-bar @menu-selected="handleMenuSelected" />
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';
import TabBar from './components/TabBar.vue';

export default {
  name: "App",
  components: {
    MenuBar,
    TabBar
  },
  methods: {
    handleMenuSelected(page) {
      // 메뉴 선택 시 라우터를 이용하여 해당 페이지로 이동
      this.$router.push({ name: page });
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
