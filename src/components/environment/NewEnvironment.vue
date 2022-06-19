<script setup>
import BaseInput from '../base/BaseInput.vue';
</script>

<template>
    <div>
        <BaseInput 
            :label="'Name'"
            :placeholder="'Enter a name'"
        />

        <BaseInput 
            :label="'Description'"
            :placeholder="'Enter a description'"
        />
    </div>
</template>