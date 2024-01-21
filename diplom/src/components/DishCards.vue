<template>
    <div class="box">
        <div v-for="dish in filteredDishes" :key="dish.id" class="box__dishCard">
            <div>
                <img class="box__dishCard__img" :src="require(`@/assets/${dish.img}`)" alt="dish_photo">
            </div>
            <div class="box__dishCard_text">
                <h1 class="box__dishCard_text__header">{{ dish.name }}</h1>
                <p class="box__dishCard_text__par">Кухня: {{ dish.kitchen }}</p>
                <p class="box__dishCard_text__par">Краткое описание: {{ dish.shortDescription }}</p>
                <p class="box__dishCard_text__par">Нравится: <span class="likes">{{ dish.likes }}</span></p>
                <p class="box__dishCard_text__par">Не нравится: <span class="dislikes">{{ dish.dislikes }}</span></p>
                <router-link to="/dish">
                    <button v-on:click="DETAILED_DISH(dish.id)" class="box__dishCard_text__link">Подробнее</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    name: 'DishCards',
    
    computed: {
        ...mapState(['dishes']),
        ...mapGetters(['filteredDishes']),
    },

    methods: {
        ...mapMutations(['DETAILED_DISH']),
    },
};
</script>

<style lang="sass" scoped>
.box
    display: flex
    flex-direction: column
    gap: 20px

    &__dishCard
        display: flex
        gap: 40px
        border-radius: 20px
        background-color: #272727
        padding: 20px
        transition: box-shadow 0.3s

        &:hover
            box-shadow: 0px 0px 49px 3px #FFF

        &__img
            border-radius: 50%
            width: 150px
            height: 150px

        &_text
            width: 100%
            font-family: Jost
            font-style: normal

            &__header
                color: #F1F1F1
        
            &__par
                padding-top: 5px
                color: #8B8B8B
            
            &__link
                margin-top: 10px 
                width: 100%
                background-color: #929292
                height: 30px
                border: none
                border-radius: 20px
                &:hover
                    background-color: #EEE
                    cursor: pointer

.likes
    color: green

.dislikes
    color: red
</style>