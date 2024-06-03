import {createRouter, createWebHistory} from "vue-router";
import Home from "../pages/Home.vue"
import About from "../pages/About.vue"
import Project from "../pages/Project.vue"
import Contact from "../pages/Contact.vue"


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/project', component: Project },
    { path: '/contact', component: Contact }
]


const router = createRouter({
    routes,
    history: createWebHistory("/")
})

export default router;