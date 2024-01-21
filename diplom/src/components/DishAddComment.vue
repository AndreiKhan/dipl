<template>
    <div class="addComment" v-if="logged != ''">

        <textarea v-model="comment" placeholder="Написать комментарий к блюду" class="addComment__inputArea"></textarea><br/>

        <button v-on:click="ADD_COMMENT({comment, comments}); comment='';" class="addComment__button">Добавить комментарий</button>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
    name: 'DishAddLocation',
    props: ['comments'],

    data() {
        return {
            comment: '',
        };
    },

    mounted() {
        
    },

    computed: {
        ...mapState(['logged']),
    },

    methods: {
        ...mapMutations(['ADD_COMMENT']),
    },
};
</script>

<style lang="sass" scoped>
.addComment
    display: flex
    flex-direction: column
    align-items: flex-start
    margin-top: 30px 
    margin-bottom: 30px 

    &__inputArea
        width: 100%
        height: 100px
        font-family: Jost
        font-style: normal
        font-size: 20px
        background: none
        border: none
        border-bottom: 1px solid white
        color: #8B8B8B
        resize: none
    
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