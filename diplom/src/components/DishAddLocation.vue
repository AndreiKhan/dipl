<template>
    <div class="addLocation" v-if="logged != ''">
        <h1 class="addLocation__header">Добавить новое местоположения блюда</h1>
        <div class="name">
            <input v-model="name" placeholder="Название заведения" class="addLocation__input">
            <input type="checkbox" v-model="delivery" class="addLocation__checkbox">
            <label for="checkbox" class="addLocation__checkboxLabel">Есть ли доставка?</label>
        </div>
        
        <div class="street">
            <input v-model="city" placeholder="Город" class="addLocation__input">
            <input v-model="street" placeholder="Улица" class="addLocation__input">
            <input v-model="house" placeholder="Дом" class="addLocation__input">
        </div>

        <textarea v-model="description" placeholder="Описание заведения или его местополжения" class="addLocation__inputArea"></textarea>

        <button class="addLocation__button" v-on:click="ADD_LOCATION({name, city, street, house, description, delivery, locations});
                                                    name=''; 
                                                    city=''; 
                                                    street=''; 
                                                    house=''; 
                                                    description=''; 
                                                    delivery=false;" 
        >Добавить</button>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
    name: 'DishAddLocation',
    props: ['locations'],

    data() {
        return {
            name: '',
            city: '',
            street: '',
            house: '',
            description: '',
            delivery: false,
        };
    },

    mounted() {
        
    },

    computed: {
        ...mapState(['logged']),
    },

    methods: {
        ...mapMutations(['ADD_LOCATION']),
    },
};
</script>

<style lang="sass" scoped>
.addLocation
    display: flex
    flex-direction: column
    gap: 10px
    background-color: #272727
    margin-bottom: 20px
    border-radius: 10px

    &__header
        font-family: Jost
        font-style: normal
        text-align: center
        color: #F1F1F1

    &__input
        font-family: Jost
        font-style: normal
        font-size: 20px
        background-color: #272727
        padding: 10px
        margin: 10px
        border: none
        border-bottom: 1px solid white
        color: #8B8B8B

    &__inputArea
        width: 500px
        font-family: Jost
        font-style: normal
        font-size: 20px
        padding: 10px
        margin: 10px
        background-color: #272727
        border: none
        border-bottom: 1px solid white
        color: #8B8B8B
        resize: none

    &__checkbox
        width: 20px
        height: 20px
        margin-left: 10px
    
    &__checkboxLabel
        padding-left: 10px
        color: #727272
    
    &__button
        font-family: Jost
        font-style: normal
        font-size: 20px
        color: #727272
        background-color: #272727
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

.name
    display: flex
    align-items: center
</style>