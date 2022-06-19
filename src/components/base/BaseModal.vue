<script setup>
import { ref } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogOverlay, DialogTitle, } from '@headlessui/vue'
import { PlusIcon, XIcon } from '@heroicons/vue/solid'
const isOpen = ref(false);
function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}
defineExpose({
    closeModal,
    openModal
})
</script>

<template> 
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal">
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="min-h-screen px-4 text-center">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <DialogOverlay class="fixed inset-0 bg-gray-900 opacity-20" />
                    </TransitionChild>

                    <span class="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >

                        <div
                            class="fixed inset-y-0 right-0 w-full max-w-xl m-4 flex-col flex-grow overflow-hidden transition-all transform bg-white dark:bg-gray-700 shadow-xl rounded-md"
                        >
                            <div class="flex flex-col flex-grow h-full ">
                                <div class="flex justify-between p-4">
                                    <DialogTitle
                                        as="h3"
                                        class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100"
                                    >
                                        <slot name="header">
                                            Empty header
                                        </slot>    
                                    </DialogTitle>

                                    <button class="p-2 hover:bg-red-500 dark:hover:bg-red-900" @click="closeModal">
                                        <XIcon class="w-4 h-4" />
                                    </button>
                                </div>
                                
                                

                                <div class="flex flex-col h-full justify-between px-5 overflow-y-auto">
                                    <div class="flex-grow text-left">
                                        <slot name="mainContent"></slot>
                                    </div>

                                    <div class="pb-5 pt-10 space-x-3 flex justify-end">
                                        <button
                                            type="button"
                                            class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-200 bg-gray-200 dark:bg-gray-800 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            @click="closeModal"
                                        >Cancel</button>

                                        <slot name="ActionButton"></slot>
                                                                            
                                     
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>