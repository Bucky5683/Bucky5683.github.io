<template>
    <div class="menu-bar">
        <div class="iconButton" @click="selectMenu('about')"><img src="../assets/profileImage.png" alt="Image"></div>
        <p class="title">Bucky's Hompage</p>
        <p class="time">{{ currentTime }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentTime: ''
        };
    },
    methods: {
        updateTime() {
            const now = new Date();
            this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        },
        selectMenu(page) {
            // 부모 컴포넌트로 이벤트 전달
            this.$emit("menu-selected", page);
        }
    },
    created() {
        this.updateTime(); // 페이지가 생성될 때 한 번 현재 시간 업데이트
        // 매 초마다 현재 시간 업데이트
        this.timer = setInterval(() => {
            this.updateTime();
        }, 1000);
    },
    beforeUnmount() {
        clearInterval(this.timer); // 컴포넌트가 파괴되기 전 타이머 해제
    }
};
</script>

<style scoped>
.menu-bar {
    position: fixed;
    /* 고정 위치 */
    top: 0;
    /* 맨 위에 위치 */
    left: 0;
    /* 왼쪽 정렬 */
    width: 100%;
    /* 가로 전체 영역 차지 */
    display: flex;
    height: 3%;
    min-height: 25px;
    background-color: rgba(0, 0, 0, 0.661);
    align-items: center;
}

.iconButton {
    margin-right: 20px;
    /* 이미지 오른쪽에 약간의 여백 추가 */
    aspect-ratio: 1/1;
    height: 80%;
    margin-left: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.iconButton img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.menu-bar p {
    margin-right: 20px;
    color: white;
    /* 각 메뉴 정보 사이에 여백 추가 */
}

.title {
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 5px;
}

.time {
    font-weight: bold;
    color: white;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: auto;
    /* 화면의 가장 오른쪽으로 이동 */
}
</style>