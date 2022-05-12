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
    <main class="flex flex-row grow ">

        <div class="w-80 shrink-0  bg-gray-900 text-gray-100  px-2 ">
            Entity selector goes here:
        </div>
        <div class="w-1 bg-gray-600 hover:bg-blue-700 cursor-col-resize" ></div>
        <div class="grow ">
            <div class="flex flex-col h-full">
                <div class="basis-1/5 overflow-hidden  "> 
                    <Table />
                </div>
                <div class="h-1  bg-gray-600 hover:bg-blue-700 cursor-row-resize" ></div>
                <div class="basis-2/5 text-gray-200 ">
                    
                        Multi purpose area:
                            - show column detail
                            - transpose
                            - join 

                   
                </div>
            </div>
        </div>

        <div class="w-1 bg-gray-600 hover:bg-blue-700 cursor-col-resize" ></div>
        <div class="w-80">

        </div>
    </main>
</template>

