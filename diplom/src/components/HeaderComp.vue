<template>
    <header class="header center">
        <div class="header_left">
            <router-link class="header_left__link" to="/main">
                <img class="header_left__link__logo logo" src="../assets/logo.jpg" alt="Logo">
            </router-link>
        </div>

        <nav class="header_right">
            <router-link class="header_right__link" to="/main">Главная</router-link>
            <div class="header_right" v-if="logged != ''">
                <router-link class="header_right__link" to="/profile">Профиль</router-link>
                <button class="header_right__link" v-on:click="SIGN_OUT()">Выйти</button>
            </div>
            <div class="header_right" v-else>
                <router-link class="header_right__link" to="/signin">Войти</router-link>
                <router-link class="header_right__link" to="/registration">Зарегистрироваться</router-link>
            </div>
            <router-link class="header_right__link" to="/404">404</router-link>
        </nav>
    </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'HeaderComp',

    computed: {
        ...mapState(['logged'])
    },

    methods: {
        ...mapMutations(['SIGN_OUT'])
    },
};
</script>

<style lang="sass" scoped>
.header
    display: flex
    justify-content: space-between
    align-items: center
    padding-top: 10px
    padding-bottom: 20px
    margin-bottom: 10px
    border-bottom: 1px solid #3F3F3F

    &_right
        display: flex
        justify-content: space-between
        gap: 10px
        
        &__link
            color: #F1F1F1
            text-align: center
            font-family: Jost
            font-size: 20px
            font-style: normal
            font-weight: 400
            padding: 10px
            padding-top: 5px
            padding-bottom: 5px
            background-color: #272727
            border-radius: 10px
            border: none

            &:hover
                cursor: pointer
                filter: brightness(1.3)

.logo
    width: 100px
    height: 50px
</style>