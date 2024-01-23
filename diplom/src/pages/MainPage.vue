<template>
    <div class="main_page center">

        <main class="main">
            <section class="main_header">
                <p class="main_header__text">
                    Добро пожаловать на сайт по поиску различных блюд. 
                    Увидели где-то в своем любимом сериале или фильме интересное блюдо, и вам очень хочется его попробовать? 
                    Тогда вы пришли в нужное место. Здесь вы сможете найти все, что вам нужно. Просто введите в поиске название этого блюда и(или) кухню. 
                    После этого наш поиск поможет вам найти блюдо и покажет, в каких кафе в вашем городе вы можете попробовать его или заказать себе на дом. 
                    Узнайте, какого на вкус то, что едят ваши любимые персонажи.
                </p>
            </section>
            <DishCards/>
        </main>

        <div class="tags">
            <div class="tags_box">
                <FiltersForDish/>
            </div>
        </div>

    </div>
</template>

<script>
import DishCards from '@/components/DishCards.vue';
import FiltersForDish from '@/components/FiltersForDish.vue';

export default {
    name: 'MainPage',

    components: {
        DishCards,
        FiltersForDish
    },
};
</script>

<style lang="sass" scoped>
.main_page
    display: grid
    gap: 30px
    grid-template-columns: 4fr 1fr
    margin-bottom: 30px

.main
    margin-bottom: 96px

    &_header
        border-bottom: 1px solid #3F3F3F
        padding-bottom: 20px
        margin-bottom: 20px 

        &__text
            color: #F1F1F1
            font-family: Jost
            font-size: 22px
            font-style: normal

.tags
    border-left: 1px solid #3F3F3F

    &_box
        position: sticky
        top: 30px
</style>
