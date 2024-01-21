<template>
    <div class="detailedDish_page center">
        <main class="dish">
            <div class="dish_info">
                <div>
                    <img class="dish_info__img" :src="require(`@/assets/${descriptionDish.img}`)" alt="dish_photo">
                </div>
                <div class="dish_info_description">
                    <h1 class="dish_info_description__header">{{ descriptionDish.name }}</h1>
                    <p class="dish_info_description__param">{{ descriptionDish.kitchen }} кухня</p>
                    <p class="dish_info_description__param">Подробное описание: {{ descriptionDish.description }}</p>
                    <div class="rating">
                        <button v-on:click="LIKE(descriptionDish)" class="rating__buttonLikes">Нравится: <span class="likes">{{ descriptionDish.likes }}</span></button>
                        <button v-on:click="DISLIKE(descriptionDish)" class="rating__buttonDislikes">Не нравится: <span class="dislikes">{{ descriptionDish.dislikes }}</span></button>
                    </div>
                </div>
            </div>

            <div>
                <DishAddLocation :locations="descriptionDish.locations"/>
            </div>
            
            <div class="dish_location">
                <DishLocations :locations="descriptionDish.locations"/>
            </div>
        </main>
        
        <div>
            <DishAddComment :comments="descriptionDish.comments"/>
        </div>

        <section class="dish_comments">
            <DishComments :comments="descriptionDish.comments"/>
        </section>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import DishAddComment from '@/components/DishAddComment.vue';
import DishAddLocation from '@/components/DishAddLocation.vue';
import DishComments from '@/components/DishComments.vue';
import DishLocations from '@/components/DishLocations.vue';

export default {
    name: 'DishPage',

    computed: {
        ...mapGetters(['descriptionDish']),
    },

    methods: {
        ...mapMutations(['DISLIKE', 'LIKE']),
    },

    components: {
        DishLocations,
        DishComments,
        DishAddLocation,
        DishAddComment
    },
};
</script>

<style lang="sass" scoped>
.dish
    border-bottom: 1px solid #3F3F3F
    padding-bottom: 30px 

    &_info
        display: flex
        gap: 30px
        color: white
        background-color: #272727
        border-bottom-right-radius: 40px
        border-bottom-left-radius: 40px
        padding: 30px
        padding-bottom: 50px
        margin-bottom: 50px

        &__img
            border-radius: 50%
            width: 400px
            height: 400px

        &_description
            display: flex
            flex-direction: column
            gap: 30px

            &__header
                font-family: Jost
                font-style: normal
                font-size: 40px
            &__param
                font-family: Jost
                font-style: normal

    &_comments
        padding-bottom: 100px 

.rating
    display: flex
    gap: 30px

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
</style>