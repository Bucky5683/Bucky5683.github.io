<template>

  <body class="background">
    <div class="status-bar">
      <div class="blog-name-box">
        <router-link class="blog-name" to="/" @click="delete_opened_window('all')">Bucky.github.io</router-link>
      </div>
      <div class="status-bar-emtybox"></div>
      <div class="time-box"><a class="time">{{ nowTime }}</a></div>
    </div>
    <router-view class="modal" @close_window="delete_opened_window($event)"></router-view>
    <div class="under-bar">
      <button class="icon"><img class="icon-img" id="notion" src="./assets/notion.png" /></button>
      <button class="icon"><img class="icon-img" id="tstory" src="./assets/tstory.svg" /></button>
      <button class="icon"><img class="icon-img" id="github" src="./assets/github.png" /></button>
      <router-link to="/setting" class="icon" @click="openedWindows.push('setting')"><img class="icon-img" id="setting"
          src="./assets/setting.png" /></router-link>
      <button class="icon"><img class="icon-img" src="./assets/notion.png" /></button>
      <button class="icon"><img class="icon-img" src="./assets/notion.png" /></button>
    </div>
  </body>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      nowTime: "",
      openedWindows: [],
      name: "Bucky",
      age: 23,
      email: "bucky5683@gmail.com",
      main_skill: ['Swift', 'UIkit', 'SwiftUI'],
      sub_skill: ['Vue.js'],
      games: ['LostArk', 'Sims4', 'TFT', 'Stardew Valley', 'Palworld']
    }
  },
  methods: {
    current_dateTime() {
      const now = new Date();
      const month = String(now.getMonth() + 1);
      const day = String(now.getDate());
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      this.nowTime = `${month}월 ${day}일 ${hours}:${minutes}`;
    },
    delete_opened_window(windowtype) {
      let newarray = []
      if (windowtype != 'all') {
        newarray = this.openedWindows.filter((value, i) => {
          console.log('opendWindows[' + i + '] = ' + value)
          return value != windowtype;
        });
      }

      this.openedWindows = newarray;
      if (this.openedWindows.length > 0) {
        this.$router.go(-1);
      } else {
        this.$router.push('/');
      }
    }
  },
  created() {
    this.current_dateTime();
    setInterval(() => {
      this.current_dateTime();
    }, 1000);
  }
}
</script>

<style>
body {
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

.contents {
  width: 100%;
  height: 70%;
  margin: 10px;
}

.modal {
  margin: 10px;
  width: 500px;
  min-width: 400px;
  min-height: 300px;
  overflow: auto;
  resize: both;
  border-radius: 5px;
  overflow: hidden;
}

.status-bar {
  width: 100%;
  padding: 5px;
  background-color: rgb(255, 255, 255, 0.3);
  display: table;
  table-layout: fixed;
}

.time-box {
  display: flex;
  justify-content: end;
}

.time {
  font-size: 15px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  margin-right: 15px;
}

.blog-name-box {
  display: flex;
  justify-content: flex-start;
}

.blog-name {
  font-size: 15px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 15px;
}

.status-bar-emtybox {
  display: table-cell;
}

.under-bar {
  min-width: 30%;
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
  box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.4);
}

.icon {
  background-color: rgb(255, 255, 255, 0);
  border: none;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 10px;
  padding: auto;
}

.icon:hover {
  transition-property: all;
  transition-duration: 0.5s;
  margin-bottom: 20px;
  margin-top: -10px;
}

.icon-img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
}

#tstory {
  width: 90%;
  height: 90%;
}
</style>
