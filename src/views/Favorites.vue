<script setup>
import { ChatIcon, XIcon } from '@heroicons/vue/outline'
import { computed } from '@vue/reactivity';
import { ref, onMounted } from 'vue';
import { useChatbotStore } from "../stores/chatbot";

const store = useChatbotStore()
const getMessages = computed(() => {
    return store.getMessages
})
const messages = computed(() => {
    return store.messages
})

onMounted(() => {
    store.fetchMessages();
})

const tessBotVisible = ref(false)
function initBot() {
    tessBotVisible.value = ref(true)
}
</script>

<template>
    <main class="flex grow w-full relative">
        <div class="flex-row w-full justify-between">
            <div class="absolute bottom-6 right-6">
                <div v-if="tessBotVisible" class="bg-gray-600 rounded-md">
                    <div class="flex justify-between w-72 bg-gray-900 py-3 px-3 rounded-t-md">
                        <div>
                            <h3 class="text-gray-50">ChatBot</h3>
                            <p class="text-sm text-gray-400">
                                Ask me a question
                            </p>
                        </div>
                        <button @click="tessBotVisible = false"
                            class="text-gray-400 px-3 rounded-md  hover:bg-gray-500">
                            <XIcon class="w-4 h-4" />
                        </button>
                    </div>
                    <div class="px-4 pb-6  ">
                        <div class="w-56">
                            <div v-for="m, idx in messages.info" :key="idx" :class="idx === 0 ? 'mt-5' : ''"
                                class="border border-gray-400 rounded-md flex px-2 py-3 mb-2 ">
                                <p class="text-gray-200 text-sm">
                                    {{ m.message }}
                                </p>
                            </div>

                            <button v-for="q, idx in messages.option" :key="idx" :class="idx === 0 ? 'mt-5' : ''"
                                class="bg-emerald-700  flex rounded-full text-left px-4 py-3 mb-2">
                                <p class="text-gray-200 text-sm">{{ q.message }}</p>
                            </button>
                        </div>
                    </div>
                </div>

                <button v-if="tessBotVisible == false" @click="initBot()" class="p-6">
                    <ChatIcon class="h-10 w-10 text-gray-300" />
                </button>
            </div>
        </div>
    </main>
</template>