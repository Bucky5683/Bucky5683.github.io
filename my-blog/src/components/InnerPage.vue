<template>
    <div class="inner-page" :style="{ top: position.y + 'px', left: position.x + 'px' }">
        <!-- Inner page content -->
        <div class="topButton">
            <button @click="closeModal()">Close</button>
        </div>
        <!-- 받아온 링크를 이용하여 동적으로 생성된 라우트로 이동 -->
        <component :is="whichStep"></component>
    </div>
</template>
  
<script>
export default {
    name: 'InnerPage',
    props: ['modalData'],
    data() {
        return {
            position: { x: 0, y: 0 },
            isDragging: false,
            initialMousePos: { x: 0, y: 0 },
            initialPosition: { x: 0, y: 0 },
            activeComponent: this.modalData
        };
    },
    components: {
        'GithubView': () => import('@/views/GithubView.vue'),
        'BlogView': () => import('@/views/BlogView.vue'),
        'AboutView': () => import('@/views/AboutView.vue')
    },
    methods: {
        closeModal() {
            this.$store.commit('popStateChange', false);
            // 모달을 닫을 때 현재 URL을 스토어에서 제거
            this.$store.commit('urlStateChange', this.modalData);
        },
        startDrag(event) {
            this.isDragging = true;
            this.initialMousePos = { x: event.clientX, y: event.clientY };
            this.initialPosition = { x: this.position.x, y: this.position.y };
        },
        endDrag() {
            this.isDragging = false;
        },
        handleDrag(event) {
            if (this.isDragging) {
                const deltaX = event.clientX - this.initialMousePos.x;
                const deltaY = event.clientY - this.initialMousePos.y;
                this.position = {
                    x: this.initialPosition.x + deltaX,
                    y: this.initialPosition.y + deltaY
                };
            }
        },
        previouse() {
            if (this.active-- === 0) this.active = 2
        },
        next() {
            if (this.active++ > 2) this.active = 0
        }
    },
    mounted() {
        // 마우스 이벤트 추가
        window.addEventListener('mousemove', this.handleDrag);
        window.addEventListener('mouseup', this.endDrag);

        this.activeComponent = this.modalData;
    },
    beforeUnmount() {
        // 컴포넌트가 파괴되기 전에 이벤트 제거
        window.removeEventListener('mousemove', this.handleDrag);
        window.removeEventListener('mouseup', this.endDrag);
    },
    computed: {
        whichStep() {
            switch (this.activeComponent) {
                case 'GithubView':
                    return 'GithubView'
                case 'BlogView':
                    return 'BlogView'
                case 'AboutView':
                    return 'AboutView'
                default:
                    return 'GithubView'
            }
        }
    }
}
</script>
  
<style scoped>
/* 필요한 스타일은 추가 */
.inner-page {
    background-color: white;
}

.topButton {
    background-color: black;
}
</style>
  