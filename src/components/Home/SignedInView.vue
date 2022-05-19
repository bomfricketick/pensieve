<script setup>
// import BaseSearch from '../components/base/BaseSearch.vue'
import { CubeIcon, UserIcon, ShareIcon } from '@heroicons/vue/outline'
import BaseSearch from '@/components/base/BaseSearch.vue';
import HomeTabs from './HomeTabs.vue';

// Dummy data
const username = "bomfricketick"
const repos = [
    {
        id: 1,
        name: 'vue-tree-view',
        lastUpdated: '2020-01-01',
        description: 'A Vue component for displaying tree data',
        url: ''
    },
    {
        id: 2,
        name: 'vue-tree-view-demo',
        lastUpdated: '2020-01-14',
        description: 'A Vue demo for displaying tree data',
        url: ''
    },
    {
        id: 3,
        name: 'examples',
        lastUpdated: '2020-01-22',
        description: 'A Vue demo for displaying tree data',
        url: ''
    },
    {
        id: 4,
        name: 'examples4',
        lastUpdated: '2021-01-22',
        description: 'A Vue demo for displaying tree data',
        url: ''
    },
    {
        id: 5,
        name: 'examples5',
        lastUpdated: '2022-04-22',
        description: 'A Vue demo for displaying tree data',
        url: ''
    },
    {
        id: 6,
        name: 'examples6',
        lastUpdated: '2021-01-22',
        description: 'A Vue demo for displaying tree data',
        url: ''
    },
    {
        id: 7,
        name: 'examples7',
        lastUpdated: '2021-01-22',
        description: 'A Vue demo for displaying tree data',
        url: ''
    },
    {
        id: 8,
        name: 'examples8',
        lastUpdated: '2022-01-22',
        description: 'A Vue demo for displaying tree data',
        url: ''
    },
    {
        id: 9,
        name: 'examples9',
        lastUpdated: '2022-01-22',
        description: 'A Vue demo for displaying tree data',
        url: ''
    },
    {
        id: 10,
        name: 'examples10',
        lastUpdated: '2021-01-22',
        description: 'A Vue demo for displaying tree data',
        url: ''
    },
    {
        id: 11,
        name: 'examples11',
        lastUpdated: '2021-01-22',
        description: 'A Vue demo for displaying tree data',
        url: ''
    },
    {
        id: 12,
        name: 'examples12',
        lastUpdated: '2022-01-22',
        description: 'A Vue demo for displaying tree data',
        url: ''
    }
]

</script>


<template>

    <div class="flex flex-1 flex-col overflow-hidden">
        <div class="flex flex-1 overflow-hidden bg-gray-50 dark:bg-gray-800">
            <div class="w-96 bg-gray-900">
                <div class="mx-8">
                    <div class="mt-6 mb-4">
                        <h2 class="text-sm font-semibold flex justify-between mb-1  text-white">Recent Repositories
                            <router-link
                                class="flex items-center text-xs py-1 px-2 rounded-md bg-green-700 hover:bg-green-600"
                                :to="{ name: 'New' }">
                                <ShareIcon class="h-4 w-4 pb-1 -rotate-90 text-white" />
                                <p>
                                    New
                                </p>
                            </router-link>
                        </h2>

                        <div class="mt-2 mb-3">
                            <BaseSearch class="" placeholder="Find a repository" />
                        </div>
                        <ul>
                            <li v-for="repo in repos" :key="repo.id" class="text-gray-200">
                                <div class="flex w-full items-center mt-2">
                                    <span class="rounded-full bg-gray-600 mr-2 p-0.5">
                                        <UserIcon class="h-3 w-3   text-white" />
                                    </span>

                                    <a class="text-sm" :href="username + '/' + repo.name">
                                        {{ username }}/{{ repo.name }}
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="border-t border-gray-600">
                        <h2 class="text-sm font-semibold mt-3  text-white">Recent activity</h2>
                        <div>
                            <p class="mt-2 mb-3 text-gray-400 text-xs">
                                When you take actions across Pensieve, we’ll provide links to that activity here.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="flex flex-1 h-full pl-6 overflow-hidden">
                <div class="flex pr-6 overflow-y-auto">

                    <div class="flex-col mt-4">
                        <div class="flex">
                            <main>
                                <div class="bg-gradient-to-r from-zinc-900 to-gray-900 border border-slate-700 rounded-md">
                                    <div class="p-6">
                                        <div class="flex mb-2 justify-between">
                                            <h2 class="text-2xl text-gray-200">Lorem ipsum dolor sit amet</h2>
                                            <button class="text-gray-300">X</button>
                                        </div>
                                        <p class="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque officiis vero
                                            suscipit assumenda similique officia ab aliquam quisquam vel quaerat.</p>
                                    </div>
                                </div>
                            </main>
                        </div>
    
    
                        <div>
    
                            <HomeTabs />
                        </div>
    
                    </div>
    
                    <aside class="mt-8 px-6 lg:w-80  lg:block hidden">
                        <div>
                            <div class="flex flex-col mx-auto mb-6">
                                <div class="p-4 rounded-full flex justify-center items-center bg-gray-200">
                                    <UserIcon class="text-gray-900 h-full w-full" />
                                </div>
                                <div class="mt-2 leading-3 pb-3">
                                    <h2 class="text-xl font-semibold text-gray-300">Johan</h2>
                                    <h3 class="text-gray-400">username</h3>
                                </div>
    
                                <div>
                                    <button class="w-full py-1 rounded-md border border-gray-500 text-sm bg-gray-600 text-gray-100">Edit profile</button>
                                </div>
                            </div>
    
                            <div>
                                <div>
                                    <h2 class="text-sm font-semibold text-gray-300">Tips</h2>
                                </div>
                            </div>
    
                        </div>
                    </aside>
                </div>

                <!-- <router-view /> -->
            </div>
        </div>
    </div>


</template>