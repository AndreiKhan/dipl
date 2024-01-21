<template>
    <main class="profile">
        <div>
            <img class="profile__img" :src="require(`@/assets/${profile.img}`)" alt="profile_photo">
        </div>
        <div class="profile_info">
            <h1 class="profile_info__name">{{ profile.name }}</h1>
            <p class="profile_info__text">{{ profile.email }}</p>
            <p class="profile_info__text">{{ profile.phone }}</p>
            <p class="profile_info__text">{{ profile.city }}</p>
            <p class="profile_info__text">{{ profile.description }}</p>
        </div>
    </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ProfileInfo',

    computed: {
        ...mapGetters(['profile']),
    },
};
</script>

<style lang="sass" scoped>
.profile
    display: flex
    gap: 50px
    color: white
    padding: 30px
    background-color: #272727
    border-bottom-left-radius: 50px
    border-bottom-right-radius: 50px
    margin-bottom: 100px

    &__img
        width: 400px
        height: 400px
        border-radius: 50%

    &_info
        display: flex
        flex-direction: column
        gap: 15px
        width: 650px

        &__name

        &__text
            padding-top: 15px
            border-top: 1px solid #3F3F3F
            word-wrap: break-word
</style>