<script setup>
import BaseSearch from '../components/base/BaseSearch.vue'
import { CubeIcon } from '@heroicons/vue/outline'
import Table from '../components/Table.vue';


</script>


<template>
    <nav>
        <div class="flex items-center w-full justify-between">
            <div class="flex items-center">
                <div class="flex items-center h-12 pl-2">
                    <CubeIcon class="h-6 w-6 text-white" />
                    <h1 class="pl-2 text-gray-200">Notifications</h1>
                </div>
            </div>
        </div>
    </nav>
    <main class="flex flex-row grow">


        <div class="basis-1/4 bg-gray-200 m-2 px-2">
            Entity selector goes here:
        </div>
        <div class="basis-3/4 m-2">
            <div class="flex flex-col h-full">
                <div class="basis-3/5 overflow-hidden mb-2 border border-gray-600"> 
                    <Table />
                </div>
                <div class="basis-2/5 bg-gray-400 ">
                    Multi purpose area:
                        - show column detail
                        - transpose
                        - join 
                </div>
            </div>
        </div>
    </main>
</template>