<script setup>
import { reactive, ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import BaseInput from '../components/base/BaseInput.vue';
import ShowInput from '../components/base/ShowInput.vue';
import { TrashIcon } from '@heroicons/vue/outline';

const settings = reactive([
    {
        id: 1,
        add: '',
        name: 'General',
        settings: [
            {
                id: 1,
                title: 'Project name',
                data: {
                    type: 'text',
                    value: '',
                    placeholder: 'Enter project name',
                },
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "Project description",
                data: {
                    type: 'textarea',
                    value: '',
                    placeholder: 'Enter project description',
                },
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },


        ]
    },
    {
        id: 2,
        add: 'Environment',
        name: 'Environments',
        description: 'Environments are used to configure different environments for your project. You can add as many environments as you need.',
        data: [
            {
                id: 1,
                title: 'Development',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'Test',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
            {
                id: 3,
                title: 'Production',
                date: 'Apr 12',
                commentCount: 12,
                shareCount: 8,
            },
        ]
    },
    {
        id: 3,
        add: 'Connection',
        name: 'Connections',
        description: 'Connections are used to connect your project to different services. You can add as many connections as you need.',
        data: [
            {
                id: 1,
                title: 'Ask Me Anything',
                date: '2d ago',
                enviroment: [{name: 'Development', color: 'yellow'}, {name: 'Test', color: 'emerald'}, {name: 'Production', color: 'blue'}],
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "heard about coffee",
                date: '4d ago',
                enviroment: [{name: 'Production', color: 'blue'}, {name: 'Test', color: 'emerald'}],
                commentCount: 1,
                shareCount: 2,
            },
        ]
    },
])

</script>

<template>
    <div class="flex flex-col h-full bg-gray-90 overflow-hidden">
        <div class="overflow-y-auto">
            <div class="w-2/3 mx-auto px-8 pb-4 mt-10 bg-gray-900 ">
                <div class="flex text-gray-300 ">

                    <TabGroup vertical>
                        <TabList class="rounded-xl shrink-0 p-1">
                            <Tab v-for="category in Object(settings)" as="template" :key="category"
                                v-slot="{ selected }">
                                <button :class="[
                                    'w-full text-left px-4 rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                                    'ring-white ring-opacity-60  ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-gray-700 shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                                ]">
                                    {{ category.name }}
                                </button>
                            </Tab>
                        </TabList>

                        <TabPanels class="p-1 ml-4 f-full grow">
                            <TabPanel v-for="(posts, idx) in Object(settings)" :key="idx" class="">

                                <div class="mt-2  pb-2 mb-2 border-b border-gray-700">
                                    <div class="flex justify-between items-center">
                                        <h2 class="text-2xl font-normal"> {{ posts.name }} </h2>
                                        <button v-if="posts.add"
                                            class="px-3 py-1 border border-gray-700 rounded-md bg-gray-800">
                                            <div class="flex">New<p class="pl-1 lowercase"> {{ posts.add }} </p>
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                <ul v-if="posts.settings">
                                    <li v-for="post in posts.settings" :key="post.id" class="relative rounded-md py-3">
                                        <div class="" v-if="post.data">
                                            <BaseInput class="grow" v-model="post.data.value" :label="post.title"
                                                :placeholder="post.data.placeholder" />
                                            <ShowInput> {{ post.data.value }} </ShowInput>
                                        </div>
                                    </li>
                                    <button class="px-4 py-1 rounded-md bg-green-600">Update</button>
                                </ul>

                                <div v-if="posts.data">
                                    <p class="text-sm mb-4"> {{posts.description}} </p>
                                    <ul  class="rounded-md border border-gray-700">
                                        <li v-for="item in posts.data" :key="item.id">
                                            <div class="relative flex justify-between bg-b items-center py-2 px-3 hover:bg-gray-800">
                                                <p class="flex items-center ">
                                                    {{ item.title }}
                                                    <div v-for="env in item.enviroment" :key="env">
                                                        <p class="mx-1 px-1  text-xs " :class="'bg-' + env.color + '-700'">
                                                            {{env.name}}
                                                        </p>
                                                    </div>
                                                </p>
                                                <TrashIcon class="h-4 w-4" />

                                                <a href="#" :class="[
                                                    'absolute inset-0 rounded-md',
                                                    'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                                                ]"/>

                                            </div>

                                        </li>

                                    </ul>
                                </div>

                            </TabPanel>
                        </TabPanels>
                    </TabGroup>


                </div>

            </div>

        </div>
    </div>
</template>