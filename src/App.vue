<script setup>
import { onMounted } from 'vue';
import { useUIStore } from './stores/ui';

const uiStore = useUIStore();

onMounted(() => {
  uiStore.initialiseTheme()
});

</script>

<template>
  <div class="flex flex-1 flex-col overflow-hidden">
    <div class="flex flex-1 overflow-hidden bg-gray-50 dark:bg-gray-800">
      <!-- <Sidebar /> -->
      <div class="flex flex-1 flex-col h-full">
        <router-view />
      </div>
    </div>
  </div>

</template>