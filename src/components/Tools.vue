<script setup>

const Tools = [
    {
        name: 'Sources',
        icon: 'DatabaseIcon',
    },
    {
        name: 'Tables',
        icon: 'TableIcon',
    },
    {
        name: 'Views',
        icon: 'ViewBoardsIcon',
    },
    {
        name: 'Write',
        icon: 'PencilIcon',
    },
    {
        name: 'Lock',
        icon: 'LockOpenIcon',
    }
]


</script>

<template>
    <div class="relative flex h-screen justify-center items-center">
        <div class="absolute right-0 bg-gray-900/40 mr-2">
            <div v-for="item, idx in Tools" :key="idx">
                <span class="w-12 h-12 flex items-center ">
                    <component :is="item.icon" class="h-6 w-6 flex-1 text-gray-300 hover:text-white" />
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { DatabaseIcon, TableIcon, ViewBoardsIcon, PencilIcon, LockOpenIcon } from '@heroicons/vue/outline'
export default {
    components: {
        DatabaseIcon,
        TableIcon,
        ViewBoardsIcon,
        PencilIcon,
        LockOpenIcon
    }
}
</script>