<template>
    <div class="filters">
        <input v-model="kitchen" placeholder="Какую кухню ищите?" class="filters__input">
        <input v-model="dish" placeholder="Какое блюдо ищите?" class="filters__input">
        <button v-on:click="FILTERED_DISHES({kitchen, dish})" class="filters__button">Найти</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'FiltersForDish',

    data() {
        return {
            kitchen: '',
            dish: '',
        };
    },

    computed: {
        ...mapState(['dishes']),
    },

    methods: {
        ...mapMutations(['FILTERED_DISHES']),
    },
};
</script>

<style lang="sass" scoped>
.filters
    display: flex
    flex-direction: column
    gap: 10px
    padding-left: 10px 
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
        margin-top: 10px
        font-family: Jost
        font-style: normal
        color: #727272
        background: #272727
        border-radius: 10px
        font-size: 20px
        border: none
        filter: brightness(1.6)

        &:hover
            cursor: pointer

        &:active
            filter: brightness(1.0)
</style>