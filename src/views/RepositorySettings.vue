<script setup>
import { reactive, ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import BaseInput from '../components/base/BaseInput.vue';
import ShowInput from '../components/base/ShowInput.vue';
import { TrashIcon, ChevronUpIcon } from '@heroicons/vue/outline';
import BaseModal from '../components/base/BaseModal.vue';
import { useUIStore } from '../stores/ui';
import NewEnvironment from '../components/environment/NewEnvironment.vue';

const uiStore = useUIStore();

// function openCreateEnvironmentModal() {
//     uiStore.updateProjectSettings({
//         environmentModalOpen: true
//     });
// }

const environment = ref(null)
const connection = ref(null)

function openModal(payload) {
    if (payload == 'environment') {
        environment.value.openModal();
    } else if (payload == 'connection') {
        connection.value.openModal();
    }
}

// function openNewConnection() { 
//     connection.value.openModal() 
//     }

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
        name: 'Environments',
        add: 'Environment',
        func: 'environment',
        description: 'Environments are used to configure different environments for your project. You can add as many environments as you need.',
        data: [
            {
                id: 1,
                title: 'Development',
                description: 'This is the default environment. It is used to configure the development environment.',
                type: 'Development',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
                secrets: [
                    {
                        id: 1,
                        title: 'AdventureWorks Database',
                        userName: '',
                        password: '',

                    }
                ]
            },
            {
                id: 2,
                title: 'Test',
                description: 'This is the default environment. It is used to configure the development environment.',
                type: 'Test',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
            {
                id: 3,
                title: 'Production',
                description: 'This is the default environment. It is used to configure the development environment.',
                type: 'Production',
                date: 'Apr 12',
                commentCount: 12,
                shareCount: 8,
            },
        ]
    },
    {
        id: 3,
        name: 'Connections',
        add: 'Connection',
        func: 'connection',
        description: 'Connections are used to connect your project to different services. You can add as many connections as you need.',
        data: [
            {
                id: 1,
                title: 'AdventureWorks',
                description: 'Ask Me Anything is a service that allows you to ask a question and get an answer from a bot.',
                date: '2d ago',
                enviroment: [{ name: '', type: 'Development' }, { name: '', type: 'Test' }, { name: '', type: 'Production' }],
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "WideWorldImporters",
                description: 'heard about coffee is a service that allows you to ask a question and get an answer from a bot.',
                date: '4d ago',
                enviroment: [{ name: '', type: 'Production' }, { name: '', type: 'Test' }],
                commentCount: 1,
                shareCount: 2,
            },
        ]
    },
])

</script>

<template>
    <BaseModal ref="environment">
        <template #header>Create environment</template>
        <template #mainContent>
             <NewEnvironment />
        </template>
    </BaseModal>


    <BaseModal ref="connection">
        <template #header>Create connection</template>
        <template #mainContent>
           

        </template>
    </BaseModal>


    <div class="flex flex-col h-full bg-gray-900 overflow-hidden">
        <div class="overflow-y-auto">
            <div class="w-2/3 mx-auto px-8 pb-4 mt-10 bg-gray-900 ">
                <div class="flex text-gray-300 ">

                    <TabGroup vertical>
                        <TabList class="rounded-xl shrink-0 p-1">
                            <Tab v-for="category in Object(settings)" as="template" :key="category"
                                v-slot="{ selected }">
                                <button :class="[
                                    'w-full text-left px-4 rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                                    'ring-blue-400 ring-opacity-60  ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-gray-800 shadow'
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
                                        <button v-if="posts.add" @click="openModal(posts.func)"
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
                                    <p class="text-sm mb-4"> {{ posts.description }} </p>

                                    <div class="rounded-lg overflow-hidden border border-gray-700   ">
                                        <div>

                                            <Disclosure v-slot="{ open }" v-for="item in posts.data" :key="item.id">

                                                <DisclosureButton :class="open ? 'bg-gray-800' : ''"
                                                    class="flex hover:bg-gray-800 w-full justify-between text-left text-sm font-medium  focus:outline-none  focus-visible:bg-gray-800 ">
                                                    <div
                                                        class="relative flex w-full justify-between bg-b items-center py-2 px-3 ">
                                                        <div class="flex-col">
                                                            <p class="">
                                                                {{ item.title }}
                                                            </p>

                                                        </div>


                                                        <!-- <a href="#" :class="[
                                                                'absolute inset-0 ',
                                                                'ring-blue-400 hover:bg-green-500 focus:z-10 focus:outline-none focus:ring-2',
                                                            ]" /> -->

                                                        <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''"
                                                            class="h-5 w-5 text-gray-300" />

                                                    </div>




                                                </DisclosureButton>
                                                <DisclosurePanel
                                                    class="px-4 pt-4 pb-4 text-sm text-gray-500 bg-gray-500/10">
                                                    <div class="flex items-center justify-between">

                                                        <div>

                                                            <p v-if="item.description" class="text-xs text-gray-400">
                                                                {{ item.description }}
                                                            </p>
                                                            <div v-if="item.enviroment" class="flex space-x-4 my-2">
                                                                <p v-for="env in item.enviroment" :key="env"
                                                                    class="text-xs px-2 py-0.5" :class="{
                                                                        'bg-red-600 text-white': env.type === 'Production',
                                                                        'bg-blue-600 text-white': env.type === 'Development',
                                                                        'bg-yellow-400 text-black': env.type === 'Test',
                                                                    }">
                                                                    {{ env.type }}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <TrashIcon class="h-4 w-4" />
                                                    </div>

                                                </DisclosurePanel>


                                            </Disclosure>
                                        </div>
                                    </div>
                                    <!-- <Disclosure as="div" class="mt-2" v-slot="{ open }">
                                        <DisclosureButton
                                            class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                            <span>Do you offer technical support?</span>
                                            <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''"
                                                class="h-5 w-5 text-purple-500" />
                                        </DisclosureButton>
                                        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            No.
                                        </DisclosurePanel>
                                    </Disclosure> -->


                                    <!-- <ul class="rounded-md border border-gray-700">
                                        <li v-for="item in posts.data" :key="item.id">
                                            <div
                                                class="relative flex justify-between  items-center py-2 px-3 hover:bg-gray-800">
                                                <div class="flex-col">
                                                    <p class="">
                                                        {{ item.title }}
                                                    </p>
                                                    <p v-if="item.description" class="text-xs text-gray-400">
                                                        {{ item.description }}
                                                    </p>
                                                    <div v-if="item.enviroment" class="flex space-x-4 my-2">
                                                        <p v-for="env in item.enviroment" :key="env"
                                                            class="text-xs px-2 py-0.5" :class="{
                                                                'bg-red-600 text-white': env.type === 'Production',
                                                                'bg-blue-600 text-white': env.type === 'Development',
                                                                'bg-yellow-400 text-black': env.type === 'Test',
                                                            }">
                                                            {{ env.type }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <TrashIcon class="h-4 w-4" />

                                                <a href="#" :class="[
                                                    'absolute inset-0 rounded-md',
                                                    'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                                                ]" />

                                            </div>

                                        </li>

                                    </ul> -->
                                </div>

                            </TabPanel>
                        </TabPanels>
                    </TabGroup>


                </div>

            </div>

        </div>
    </div>
</template>