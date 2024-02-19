<template>
  <div class="home">
    <h1>This Page is Home</h1>
    <!-- 모달 형태로 나타날 창들을 표시 -->
    <div v-if="$store.state.popState">
      <InnerPage v-for="(url, index) in $store.state.openURL" :key="index" :modalData="url" />
    </div>
  </div>
</template>

<script>
import InnerPage from '@/components/InnerPage.vue';

export default {
  name: 'HomeView',
  components: {
    InnerPage
  }
}
</script>
<style>
body {
  background-image: url('../assets/macosWallpaper.jpg');
}

html,
body {
  overflow: hidden;
}
</style>