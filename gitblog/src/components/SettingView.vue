<template>
    <div>
        <div class="windows-status-bar">
            <button class="close-window-button" @click="$emit('close_window', 'setting')"></button>
            <a class="window-title">Setting</a>
        </div>
        <div class="windows-contents-box">
            <img src="../assets/characterimage.png" />
            <p>MyName</p>
            <p>age</p>
            <a>Swift</a>
            <a>SwiftUI</a>
            <a>UIkit</a>
        </div>
    </div>

</template>

<script>
export default {
    name: 'setting_view'
}
</script>

<style>
.windows-status-bar {
    background-color: rgba(77, 77, 77, 0.7);
    border-radius: 5px 5px 0 0;
    display: flex;
    justify-content: flex-start;
}

.close-window-button {
    width: 18px;
    height: 18px;
    border: none;
    border-radius: 10px;
    background-color: red;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 15px;
    margin-right: 15px;
}

.window-title {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 30%);
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin-bottom: 5px;
}

.windows-contents-box {
    background-color: white;
}
</style>