<script setup>

const Navigation = {
    upper: [
        {
            title: 'Home',
            to: 'Home',
            icon: 'HomeIcon'
        },
        {
            title: 'Notifications',
            to: 'Notifications',
            icon: 'BellIcon'
        },
        {
            title: 'Files',
            to: 'Files',
            icon: 'FolderIcon'
        },
        {
            title: 'Favorites',
            to: 'Favorites',
            icon: 'StarIcon'
        }
    ],
    lower: [
        {
            title: 'Settings',
            to: 'Favorites',
            icon: 'ViewGridIcon'
        },
        {
            title: 'About',
            to: 'Favorites',
            icon: 'QuestionMarkCircleIcon'
        },
        {
            title: 'Profile',
            to: 'User',
            icon: 'UserIcon'
        }
    ]
}

</script>

<template>
    <div class="flex flex-col justify-between overflow-hidden flex-shrink-0 bg-gray-900">
        <div>
            <div v-for="(link, idx) in Navigation.upper" :key="idx">
                <router-link class="flex items-center group hover:bg-cyan-800" :title="link.title"
                    :to="{ name: link.to }">
                    <span class="h-12 w-12 flex items-center">
                        <component :is="link.icon" class="h-6 w-6 flex-1 text-white" />
                    </span>
                </router-link>
            </div>
        </div>
        <div>
            <div v-for="(link, idx) in Navigation.lower" :key="idx">
                <router-link class="flex items-center group hover:bg-cyan-800" :title="link.title"
                    :to="{ name: link.to }">
                    <span class="h-12 w-12 flex items-center">
                        <component :is="link.icon" class="h-6 w-6 flex-1 text-white" />
                    </span>
                </router-link>
            </div>
        </div>
    </div>

</template>

<script>
import { ViewGridIcon, QuestionMarkCircleIcon, UserIcon } from '@heroicons/vue/solid'
import { HomeIcon, BellIcon, FolderIcon, ClockIcon, StarIcon, PlusIcon, CubeIcon } from '@heroicons/vue/outline'
export default {
    components: {
        ViewGridIcon,
        QuestionMarkCircleIcon,
        HomeIcon,
        BellIcon,
        FolderIcon,
        ClockIcon,
        StarIcon,
        PlusIcon,
        CubeIcon,
        UserIcon
    }
}
</script>
