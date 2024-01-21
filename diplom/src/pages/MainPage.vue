<template>
    <div class="main_page center">

        <main class="main">
            <section class="main_header">
                <p class="main_header__text">
                    ((Приветствие и объяснение как работает этот сайт))
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, quibusdam perferendis placeat nisi nobis porro similique illum, commodi, blanditiis doloribus ex nemo laborum quos quo exercitationem! Quasi voluptate ut necessitatibus distinctio, officiis consectetur beatae alias numquam id? Autem nesciunt enim libero eaque assumenda veniam, dicta perspiciatis nisi cupiditate delectus et. Accusamus consequuntur in facere, asperiores omnis repellendus assumenda inventore hic odio quibusdam dolore et quos, cumque non autem. Minus hic mollitia suscipit optio rem! Iste ex magni expedita! Nobis, repellendus itaque? Totam repellat consequuntur cum ab assumenda soluta sint eligendi asperiores debitis nulla molestiae, reiciendis dolorem, dolores, autem alias! Sequi.
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
