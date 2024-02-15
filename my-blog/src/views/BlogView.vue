<template>
    <div class="about">
      <h1>This is an blog page</h1>
    </div>
    <RssViewer />
  </template>

<script>
// @ is an alias to /src
import RssViewer from '@/components/RssViewer.vue';

export default {
  name: 'HomeView',
  components: {
    RssViewer
}
}
</script>