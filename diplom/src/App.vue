<template>
    <div class="top" id="app">
        <HeaderComp/>
        <router-view/>
        <FooterComp/>
    </div>
</template>

<script>
    import HeaderComp from './components/HeaderComp.vue'
    import FooterComp from './components/FooterComp.vue'

    export default {
        name: 'App',
        components: {
            HeaderComp,
            FooterComp,
        }
    }
</script>
  
<style lang="sass">
*
    padding: 0
    margin: 0
    box-sizing: border-box

a
    text-decoration: none

.top
    position: relative
    background-color: rgb(15, 15, 15)
    width: 100%

.center
    margin-left: calc(50% - 1200px / 2)
    margin-right: calc(50% - 1200px / 2)
</style>