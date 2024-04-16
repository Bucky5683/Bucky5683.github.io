<template>
  <body class="background">
    <div class="status-bar">
      <a class="time">{{ nowTime }}</a>
    </div>
    <div >
      <router-view class="modal"></router-view>
    </div>
    <div class="under-bar">
      <button class="icon"><img class="icon-img" src="./assets/notion.png" /></button>
      <button class="icon"><img class="icon-img" src="./assets/notion.png" /></button>
      <button class="icon"><img class="icon-img" src="./assets/notion.png" /></button>
      <button class="icon"><img class="icon-img" src="./assets/notion.png" /></button>
      <button class="icon"><img class="icon-img" src="./assets/notion.png" /></button>
      <button class="icon"><img class="icon-img" src="./assets/notion.png" /></button>
    </div>
  </body>
</template>

<script>

export default {
  name: 'App',
  data() {
    return{
      nowTime: ""
    }
  },
  methods: {
    current_dateTime() {
      const now = new Date();
      const month = String(now.getMonth());
      const day = String(now.getDay());
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      this.nowTime = `${month}월 ${day}일 ${hours}:${minutes}`;
    }
  },
  mounted() {
    this.current_dateTime();
    setInterval(this.current_dateTime, 60000);
  }
}
</script>

<style>

body{
  height: 100vh;
  margin: 0px;
  overflow: hidden;
}

.background {
  background-image: url('./assets/backgroundimg.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.modal {
  height: 50%;
  margin: 10px;
}

.status-bar{
  width: 100%;
  padding: 5px;
  background-color: rgb(255,255,255,0.3);
  display: flex;
  justify-content: flex-end;
}

.time {
  font-size: 15px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  margin-right: 15px;
}

.under-bar{
  width: 70%;
  min-width: 50%;
  height: 10%;
  position: absolute;
  padding: auto;
  top: 94%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(186, 186, 186, 0.3);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.2), 0 3px 6px rgba(0,0,0,0.4);
}

.icon {
  background-color: rgb(255,255,255,0);
	border:none;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: auto;
}

.icon-img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
}

</style>
