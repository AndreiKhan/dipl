<template>
    <div class="dish_location_box">
        <h1 class="dish_location_box__header">Где можно найти</h1>
        <div v-for="location in locations" :key="location.id" class="dish_location_box__elem">
            <div>
                <img class="dish_location_box__elem__img" :src="require(`@/assets/${location.img}`)" alt="comm_photo">
            </div>
            <div class="dish_location_box__elem_info">
                <p class="dish_location_box__elem_info__profile">
                    Добавлено пользователем <strong>{{ location.creator }}</strong>
                </p>

                <p><strong>{{ location.name }}</strong></p>
                <p>Доставка: 
                    <span class="deliveryTrue" v-if="location.delivery">Да</span>
                    <span class="deliveryFalse" v-else>Нет</span>
                </p>

                <div>
                    <p>{{ location.city }}
                    {{ location.street }}
                    {{ location.house }}
                    </p>
                </div>

                <p class="location__description">{{ location.description }}</p>

                <div class="rating">
                    <button v-on:click="LIKE(location)" class="rating__buttonLikes">Нравится здесь: <span class="likes">{{ location.likes }}</span></button>
                    <button v-on:click="DISLIKE(location)" class="rating__buttonDislikes">Не нравится здесь: <span class="dislikes">{{ location.dislikes }}</span></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'DishLocations',
    props: ['locations'],

    methods: {
        ...mapMutations(['DISLIKE', 'LIKE']),
    },
};
</script>

<style lang="sass" scoped>
.dish_location_box
    color: white
    display: flex
    flex-direction: column
    align-items: center
    gap: 30px

    &__header
        font-family: Jost
        font-style: normal

    &__elem
        display: flex
        gap: 30px
        background-color: #272727
        padding: 25px
        border-radius: 40px
        width: 900px

        &__img
            width: 150px
            height: 150px

        &_info
            position: relative
            display: flex
            flex-direction: column
            gap: 15px
        
            &__profile
                position: absolute
                right: 0
                color: #8B8B8B

.location__description
    width: 600px
    word-wrap: break-word

.rating
    display: flex
    gap: 20px

    &__buttonLikes
        font-family: Jost
        font-style: normal
        color: white
        background-color: #272727
        border: none
        box-sizing: border-box
        
        &:hover
            color: green
            cursor: pointer
            box-sizing: border-box

    &__buttonDislikes
        font-family: Jost
        font-style: normal
        color: white
        background-color: #272727
        border: none
        box-sizing: border-box
        
        &:hover
            color: red
            cursor: pointer
            box-sizing: border-box

.likes
    color: green

.dislikes
    color: red

.deliveryTrue
    color: yellow

.deliveryFalse
    color: #8B8B8B
</style>