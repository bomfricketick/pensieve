<script setup>
import { reactive } from "vue"
import BaseInput from '../components/base/BaseInput.vue';
import HelpBlock from "../components/base/HelpBlock.vue";
import ShowInput from "../components/base/ShowInput.vue";
import { QuestionMarkCircleIcon, ExclamationCircleIcon } from '@heroicons/vue/outline';

const project = reactive({
    name: '',
    description: ''
})

</script>

<template>
    <div class="flex w-full h-full bg-gray-900">
        <div class="w-2/5 mx-auto px-8 mt-10 bg-gray-90">

            <div class="pb-4 mb-4 border-b border-gray-700">
                <h1 class="text-3xl font-light text-white">Create a new project</h1>
                <p class="text-gray-400 text-sm">A project contains your secrets, connections and meta data to generate,
                    create and load your data warehouse</p>
            </div>
            <form action="">
                <div class="mb-4">
                    <BaseInput v-model="project.name" label="Project name" placeholder="Enter a name for your project" type="text" />
                    <HelpBlock>
                        <QuestionMarkCircleIcon class="h-4 w-4 mr-1" />This is a help block!
                    </HelpBlock>
                    <!-- <ShowInput>{{ project.name }}</ShowInput> -->
                </div>
    
                <div class="mb-4">
                    <BaseInput v-model="project.description" label="Description (optional)" placeholder="Enter a description for your project..."
                        type="text" />
                </div>

                <div v-if="project.name" class="border-t border-b border-gray-700 py-4 mb-4">
                    <div class="flex items-center text-gray-400 text-sm">
                        <ExclamationCircleIcon class="h-4 w-4 mr-1" /> 
                            You are creating a project named: {{ project.name }}

                    </div>
                    
                </div>
                <button class="py-1 px-4 text-sm rounded-md bg-green-700 text-white" >Create project</button>

            </form>

        </div>

    </div>
</template>