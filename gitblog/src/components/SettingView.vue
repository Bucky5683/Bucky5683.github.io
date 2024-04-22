<template>
    <div>
        <div class="windows-status-bar">
            <button class="close-window-button" @click="$emit('close_window', 'setting')"></button>
            <a class="window-title">Setting</a>
        </div>
        <div class="windows-contents-box">
            <div>
                <img class="windows-profile-img" src="../assets/characterimage.png" />
                <div class="windows-contents-profile">
                    <p id="nickname">Bucky</p>
                    <p id="name">김서연</p>
                </div>
                <div style="text-align: start; margin: 10px; padding: 10px; width: 300px;">
                    <div style="margin: 3px; padding: 5px;">
                        <a class="profile-category">🎂 Birthday</a>
                        <a style="margin: 5px; color: white;">2000.11.09</a>
                    </div>
                    <div style="margin: 3px; padding: 5px;">
                        <a class="profile-category">📧 E-mail</a>
                        <a style="margin: 5px; color: white;">bucky5683@gmail.com</a>
                    </div>
                    <div style="margin: 3px; padding:5px;">
                        <a class="profile-category">👩🏻‍💻 Job</a>
                        <a style="margin: 5px; color: white;">iOS Developer</a>
                    </div>
                </div>
                <div class="windows-contents-tags">
                    <div>
                        <a id="swift">Swift</a>
                        <a id="swiftui">SwiftUI</a>
                        <a id="uikit">UIkit</a>
                    </div>
                    <div style="margin: 25px;">
                        <a id="vuejs">Vue.js</a>
                        <a id="flask">Flask</a>
                        <a id="sqlite">SQLite</a>
                    </div>
                </div>

            </div>
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
    width: 100%;
    background-color: rgba(77, 77, 77, 0.7);
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
}

.window-title {
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
}

.windows-contents-box {
    width: 100%;
    height: 100%;
    background-color: rgb(59, 59, 59);
    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    overflow:scroll;
}

.windows-contents-box .profile-category {
    padding: 5px;
    margin: 10px;
    color: white;
    font-weight: bolder;
}

.windows-contents-profile {
    text-align: center;
}

#nickname {
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
}

#name {
    color: white;
    font-size: 15px;
    font-weight: lighter;
    margin-top: -15px;
}

.windows-profile-img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 300px;
}

.windows-contents-tags {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
}

.windows-contents-tags a {
    margin: 5px;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: red;
    font-size: 15px;
    color: white;
    border-radius: 10px;
}

.windows-contents-tags #swift {
    background-color: rgb(247, 96, 2, 0.5);
}

.windows-contents-tags #swiftui {
    background-color: rgb(64, 134, 255, 0.5);
}

.windows-contents-tags #uikit {
    background-color: rgb(64, 134, 255, 0.5);
}

.windows-contents-tags #vuejs {
    background-color: rgb(100, 185, 141, 0.5);
}

.windows-contents-tags #flask {
    background-color: rgb(95, 181, 181, 0.5);
}

.windows-contents-tags #sqlite {
    background-color: rgb(58, 117, 179, 0.5);
}
</style>