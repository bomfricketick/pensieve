<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import { HomeIcon, BellIcon, FolderIcon, ClockIcon, StarIcon, PlusIcon, CubeIcon } from '@heroicons/vue/outline'
// import { ViewGridIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

import Sidebar from '../components/Sidebar.vue'
</script>

<template>
    <div class="flex flex-1 flex-col overflow-hidden">
        <div class="flex flex-1 overflow-hidden bg-gray-50 dark:bg-gray-800">
            <!-- <Sidebar /> -->

            <div v-if="$route.name == 'User'">
                <h1 class="text-4xl text-white">USER VIEW</h1>
            </div>

            <div class="flex flex-1 flex-col h-full">
                <router-view />
            </div>
        </div>
    </div>

</template>