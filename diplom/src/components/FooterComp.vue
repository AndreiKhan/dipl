<template>
    <footer class="footer center">
        <div class="footer_main">
            <router-link to="/main" class="footer_main__link">
                <img class="footer_main__link__logo logo" src="../assets/logo.jpg" alt="Logo">
            </router-link>

            <p class="footer_main__text">Здесь вы сможете найти все, что вам хотелось попробовать.</p>
        </div>

        <div class="footer_contacts">
            <h1 class="footer_contacts__head">Контакты</h1>
            <p class="footer_contacts__text">Улица Газовиков, Дом 45, Москва</p>
            <p class="footer_contacts__text">email@email.email</p>
            <p class="footer_contacts__text">+0 (123) 456-78-90</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComp',
};
</script>

<style lang="sass" scoped>
.footer
    display: flex
    justify-content: space-between
    padding-bottom: 134px

    &_main
        padding-right: 101px

        &__text
            color: #8B8B8B
            font-family: Jost
            font-size: 22px
            font-style: normal
            font-weight: 400
            line-height: 150%
            letter-spacing: 0.22px
            padding-bottom: 31px
            width: 393px

        &_socials
            display: flex
            gap: 54px

    &_contacts
        display: flex
        flex-direction: column
        gap: 25px

        &__head
            color: #F1F1F1
            font-family: DM Serif Display
            font-size: 25px
            font-style: normal
            font-weight: 400
            line-height: 125%

        &__text
            color: #8B8B8B
            font-family: Jost
            font-size: 22px
            font-style: normal
            font-weight: 400
            line-height: 150%
            letter-spacing: 0.22px
            width: 258px


.logo
    width: 100px
    height: 50px
</style>