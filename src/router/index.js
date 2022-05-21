import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue")
    },
    {
        path: "/new",
        name: "New",
        component: () => import(/* webpackChunkName: "New" */ "../views/New.vue")
    },
    {
        path: "/:username", // /:username -> profile settings if routed to directly
        name: "User",
        component: () => import(/* webpackChunkName: "User" */ "../views/User.vue"),
        children: [
            {
                path: ":repo",
                name: "Repository",
                component: () => import(/* webpackChunkName: "Repository" */ "../views/Repository.vue"),
                children: [
                    {
                        path: "settings",
                        name: "RepositorySettings",
                        component: () => import(/* webpackChunkName: "RepositorySettings" */ "../views/RepositorySettings.vue")
                    },
                    {
                        path: "files",
                        name: "Files",
                        component: () => import(/* webpackChunkName: "Files" */ "../views/Files.vue")
                    },
                    {
                        path: "notifications",
                        name: "Notifications",
                        component: () => import(/* webpackChunkName: "Notifications" */ "../views/Notifications.vue")
                    },
                    {
                        path: "favorites",
                        name: "Favorites",
                        component: () => import(/* webpackChunkName: "Favorites" */ "../views/Favorites.vue")
                    }
                ]
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;