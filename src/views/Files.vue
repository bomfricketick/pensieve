<script setup>
import BaseSearch from '../components/base/BaseSearch.vue'
import { CubeIcon } from '@heroicons/vue/outline'
import Tools from '../components/Tools.vue';

</script>


<template>
    <main class="flex w-full">
        <div class="flex-row w-full justify-between">
            <div class="flex items-center w-full justify-between">
                <div class="flex items-center">
                    <CubeIcon class="h-9 w-9  pl-4  pr-1 text-white" />
                    <h1 class="pr-4 text-gray-200">Files</h1>
                </div>
                <BaseSearch placeholder="Search..." class="p-2" />
            </div>
            <div>lkjals</div>
        </div>

        <Tools />
    </main>
</template>