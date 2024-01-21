<template>
    <div class="registration">
        <h1 class="registration__header">Введите данные для регистрации</h1>
        <input type="text" v-model="login" placeholder="Login" class="registration__input"><br/>
        <input type="password" v-model="password" placeholder="Password" class="registration__input"><br/>
        <input type="text" v-model="name" placeholder="Name" class="registration__input"><br/>
        <input type="email" v-model="email" placeholder="Email" class="registration__input"><br/>
        <input type="text" v-model="phone" placeholder="Phone" class="registration__input"><br/>
        <input type="text" v-model="city" placeholder="City" class="registration__input"><br/>
        
        <router-link to="/main">
            <button v-on:click="REGISTR_USER({login, password, name, email, phone, city,})" class="registration__button">Зарегистрироваться</button>
        </router-link>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'RegistrationComp',

    data() {
        return {
            login: '',
            password: '',
            name: '',
            email: '',
            phone: '',
            city: '',
        };
    },

    mounted() {
        
    },

    methods: {
        ...mapMutations(['REGISTR_USER']),
    },
};
</script>

<style lang="sass" scoped>
.registration
    display: flex
    flex-direction: column
    align-items: center
    margin-top: 80px
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