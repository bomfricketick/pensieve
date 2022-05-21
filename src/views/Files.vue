<script setup>
import BaseSearch from '../components/base/BaseSearch.vue'
import { CubeIcon } from '@heroicons/vue/outline'
import Tools from '../components/Tools.vue';

import DragCol from '../components/DragCol.vue';
import DragRow from '../components/DragRow.vue';
import Table from '../components/Table.vue';
</script>


<template>
    <main class="grow">
        <!-- Refector DragCol and DragRow to only use Tailwind -->
        <!-- also refator to use composition API instead of options API -->
        <DragCol height="100%" width="100%" :leftPercent="20" :sliderWidth="4" :sliderBgHoverColor="'#1E40AF'">
            <template #left >
                <div class="h-full text-white bg-gray-900">
                    s

                </div>
            </template>
            <template #right>
                
                
                <DragCol height="100%" width="100%" :leftPercent="80" :sliderWidth="4" :sliderBgHoverColor="'#1E40AF'">
                    <template #left>
                        <nav>
                            <div class="flex items-center w-full justify-between">
                                <div class="flex items-center">
                                    <div class="flex items-center py-1 pl-2">
                                        <CubeIcon class="h-6 w-6 text-white" />
                                        <h1 class="pl-2 text-gray-200">Notifications</h1>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <DragRow height="100%" width="100%" :topPercent="35" :sliderWidth="4" :sliderBgHoverColor="'#1E40AF'">
                            <template #top>
                                <div class="max-h-fit overflow-y-auto">
                                    <Table />
                                </div>
                            </template>
                            <template #bottom>
                                <div class="h-full bg-gray-600">
                                    test bottom

                                </div>
                            </template>
                        </DragRow>
                    </template>
                    <template #right>
                        <div class="h-full bg-green-400">
                            content

                        </div>
                    </template>
                </DragCol>
            </template>
        </DragCol>
    </main>

</template>
