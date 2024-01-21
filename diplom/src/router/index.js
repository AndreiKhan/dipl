import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import DishPage from '@/pages/DishPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'
import RegistrationPage from '@/pages/RegistrationPage.vue'
import SignInPage from '@/pages/SignInPage.vue'
import Error404Page from '@/pages/Error404Page.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/main',
            name: 'Main_Page',
            component: MainPage,
        },
        {
            path: '/dish',
            name: 'Dish',
            component: DishPage,
        },
        {
            path: '/profile',
            name: 'Profile',
            component: ProfilePage,
        },
        {
            path: '/registration',
            name: 'Registration',
            component: RegistrationPage,
        },
        {
            path: '/signin',
            name: 'SignInPage',
            component: SignInPage,
        },
        {
            path: '*',
            name: 'Not_Found',
            component: Error404Page,
        },
    ]
})