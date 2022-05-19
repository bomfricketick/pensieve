<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const categories = ref({
    Recent: [
        {
            id: 1,
            title: 'Does drinking coffee make you smarter?',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
        },
        {
            id: 2,
            title: "So you've bought coffee... now what?",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
        },
    ],
    Popular: [
        {
            id: 1,
            title: 'Is tech making coffee better or worse?',
            date: 'Jan 7',
            commentCount: 29,
            shareCount: 16,
        },
        {
            id: 2,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
        },
        {
            id: 3,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
        },
        {
            id: 4,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
        },
        {
            id: 5,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
        },
        {
            id: 6,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
        },
        {
            id: 7,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
        },
        {
            id: 8,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
        },
        {
            id: 9,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
        },
        {
            id: 10,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
        },
        {
            id: 11,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
        },
        {
            id: 12,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
        }
    ]
})
</script>

<template>
    <div class="w-full px-2 py-4 sm:px-0">
        <TabGroup>
            <TabList class="flex border-b border-gray-600 h-12">
                <Tab v-for="category in Object.keys(categories)" as="template" :key="category" v-slot="{ selected }">
                    <button :class="[
                        'h-10 px-4 py-2.5 text-sm font-medium leading-5 text-gray-200',
                        ' focus:outline-none ',
                        selected
                            ? 'hover:bg-white/[0.12] hover:text-white after:border-b'
                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                    ]">
                        {{ category }}
                    </button>
                </Tab>
            </TabList>

            <TabPanels class="mt-2">
                <TabPanel v-for="(posts, idx) in Object.values(categories)" :key="idx">
                    <ul class="space-y-4">
                        <li v-for="post in posts" :key="post.id" class="relative rounded-md p-3 ">
                            <h3 class="text-sm text-gray-400 mb-2 font-medium leading-5">
                                {{ post.title }}
                            </h3>
                            <div class="relative p-3 bg-gray-900 ring-1 ring-gray-700 rounded-md">

                                

                                <ul class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                    <li>{{ post.date }}</li>
                                    <li>&middot;</li>
                                    <li>{{ post.commentCount }} comments</li>
                                    <li>&middot;</li>
                                    <li>{{ post.shareCount }} shares</li>
                                </ul>

                                <a href="#" :class="[
                                    'absolute inset-0 rounded-md',
                                    'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                                ]" />
                            </div>
                        </li>
                    </ul>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
</template>

