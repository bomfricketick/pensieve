<template>
    <form class="relative">
        <svg
            width="20"
            height="20"
            fill="currentColor"
            class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-400"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
        </svg>

        <input
            class="focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-400 border border-gray-200 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-600 rounded-md py-1 pl-8"
            type="text"
            v-bind="$attrs"
            :value="modelValue"
            :placeholder="placeholder"
            :aria-label="areaLabel"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </form>
</template>

<script>
export default {
    props: {
        areaLabel: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        }
    }
}
</script>