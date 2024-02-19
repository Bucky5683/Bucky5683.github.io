<template>
    <div class="tab-bar">
        <div class="iconButton" @click="selectMenu('GithubView')"><img src="../assets/githubLogo.webp" alt="Image"></div>
        <div class="iconButton" @click="selectMenu('BlogView')"><img src="../assets/tstoryLogo.webp" alt="Image"></div>
        <div class="iconButton"><img src="../assets/notionlogo.png" alt="Image"></div>
    </div>
</template>
  
<script>
export default {
    name: 'TabBar',
    methods: {
        selectMenu(page) {
            // 부모 컴포넌트로 이벤트 전달
            this.$emit("menu-selected", page);
        },
    },
};
</script>

<style scoped>
.tab-bar {
    position: fixed;
    /* 고정 위치 */
    bottom: 0;
    /* 맨 아래에 위치 */
    left: 0;
    /* 왼쪽 정렬 */
    right: 0;
    /* 오른쪽 정렬 */
    width: 70%;
    /* 가로 전체 영역 차지 */
    margin: 0 auto;
    /* 가운데 정렬 */
    display: flex;
    /* 가로로 정렬 */
    height: 8%;
    min-height: 40px;
    background-color: rgba(211, 211, 211, 0.689);
    justify-content: center;
    align-items: center;
    /* 가로로 중앙 정렬 */
    border-radius: 30px;
    margin-bottom: 5px;
    box-shadow: 2px 2px 2px 2px rgb(203, 203, 203, 0.3);
}

.iconButton {
    color: white;
    height: 80%;
    aspect-ratio: 1/1;
    border-radius: 10px;
    margin-bottom: 5px;
    margin-top: 5px;
    margin-left: 20px;
    margin-right: 20px;
    display: fixed;
    justify-content: center;
    align-items: center;

    box-shadow: 2px 2px 2px 2px rgb(203, 203, 203, 0.3);
}

.iconButton img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px rgb(203, 203, 203, 0.3);
}
</style>