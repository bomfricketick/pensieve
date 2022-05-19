<script setup>
import SignedInView from '../components/Home/SignedInView.vue';
import SignedOutView from '../components/Home/SignedOutView.vue';


const authenticated = true;


</script>


<template>
    <SignedInView v-if="authenticated" />
    <SignedOutView v-else />
</template>