<template>
    <div class="login">
        <h1 class="login__header">Введите логин и пароль для входа</h1>
        <input type="text" required v-model="login" placeholder="Login" class="login__input"><br/>
        <input type="password" required v-model="password" placeholder="Password" class="login__input"><br/>
        <router-link to="/main">
            <button type="submit" v-on:click="SIGN_IN({login, password})" class="login__button">Войти</button>
        </router-link>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'SignIn',

    data() {
        return {
            login: '',
            password: '',
        };
    },

    mounted() {
        
    },

    computed: {
        
    },

    methods: {
        ...mapMutations(['SIGN_IN']),
    },
};
</script>

<style lang="sass" scoped>
.login
    display: flex
    flex-direction: column
    align-items: center
    margin-top: 200px
    margin-bottom: 200px
    padding: 50px
    border: 1px solid #3F3F3F
    border-radius: 40px

    &__header
        font-family: Jost
        font-style: normal
        margin-bottom: 10px
        color: #F1F1F1

    &__input
        font-family: Jost
        font-style: normal
        font-size: 20px
        background: #272727
        padding: 10px
        border-radius: 10px
        border: none
        color: #8B8B8B

    &__button
        font-family: Jost
        font-style: normal
        font-size: 20px
        color: #727272
        background: #272727
        padding: 10px
        border-radius: 10px
        font-size: 20px
        border: none
        filter: brightness(1.6)

        &:hover
            cursor: pointer
            filter: brightness(1.9)
        
        &:active
            filter: brightness(1.0)
</style>