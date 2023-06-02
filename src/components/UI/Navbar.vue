<template>
<div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar_btns">
        <my-button @click="$router.push('/posts')">Посты</my-button>
        <my-button @click="$router.push('/about')" style="margin-left: 20px">О сайте</my-button>
        <my-button @click="$router.push('/store')" style="margin-left: 20px">Посты со стором</my-button>
        <my-button @click="$router.push('/composition')" style="margin-left: 20px">Посты c Composition API</my-button>
    </div>
</div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
    name: "Navbar",
    components: {MyButton}
}
</script>

<style scoped>
.navbar {
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.navbar_btns {
    margin-left: auto;
}
</style>