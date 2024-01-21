<template>
    <div class="dish_comments_box">
        <h1 class="dish_comments_box__header">Комментарии</h1>
        <div v-for="comment in comments" :key="comment.id" class="dish_comments_box__elem">
            <div>
                <img class="dish_comments_box__elem__img" :src="require(`@/assets/${comment.img}`)" alt="comm_photo">
            </div>

            <div class="dish_comments_box__elem_info">
                <div class="dish_comments_box__elem_info_inline">
                    <p class="dish_comments_box__elem_info__name"><strong>{{ comment.name }}</strong></p>
                    <p class="dish_comments_box__elem_info__date">{{ comment.date }}</p>
                </div>

                <div>
                    <p class="dish_comments_box__elem_info__comment">{{ comment.comment }}</p>
                </div>

                <div class="dish_comments_box__elem_info_inline">
                    <button v-on:click="LIKE(comment)" class="dish_comments_box__elem_info_inline__likes">Полезный отзыв: <span class="likes">{{ comment.likes }}</span></button>
                    <button v-on:click="DISLIKE(comment)" class="dish_comments_box__elem_info_inline__dislikes">Плохой отзыв: <span class="dislikes">{{ comment.dislikes }}</span></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'DishCards',
    props: ['comments'],

    methods: {
        ...mapMutations(['DISLIKE', 'LIKE']),
    },
};
</script>

<style lang="sass" scoped>
.dish_comments_box
    color: white
    display: flex
    flex-direction: column
    gap: 20px
    padding-top: 20px
    
    &__header
        font-family: Jost
        font-style: normal

    &__elem
        display: flex
        gap: 20px
        padding: 10px
        border: 1px solid #272727
        border-radius: 10px

        &__img
            width: 70px
            height: 70px
            border-radius: 50%

        &_info
            display: flex
            flex-direction: column
            gap: 10px

            &__date
                color: #8B8B8B

            &__comment
                padding-left: 10px
                width: 500px
                word-wrap: break-word

            &_inline
                display: flex
                gap: 15px

                &__likes
                    font-family: Jost
                    font-style: normal
                    color: white
                    background-color: #0F0F0F
                    border: none
                    box-sizing: border-box

                    &:hover
                        color: green
                        cursor: pointer
                        box-sizing: border-box

                &__dislikes
                    font-family: Jost
                    font-style: normal
                    color: white
                    background-color: #0F0F0F
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