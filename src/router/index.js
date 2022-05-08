import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "Home" */ "../views/Main.vue")
    },
    {
        path: "/files",
        name: "Files",
        component: () => import(/* webpackChunkName: "Files" */ "../views/Files.vue")
    },
    {
        path: "/notifications",
        name: "Notifications",
        component: () => import(/* webpackChunkName: "Notifications" */ "../views/Notifications.vue")
    },
    {
        path: "/Favorites",
        name: "Favorites",
        component: () => import(/* webpackChunkName: "Favorites" */ "../views/Favorites.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;